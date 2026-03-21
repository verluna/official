// HubSpot integration — create/update contacts with scorecard and lead data.
// Uses @hubspot/api-client when HUBSPOT_ACCESS_TOKEN is set.
// Gracefully degrades (logs instead of throwing) when token is missing.

import { Client } from "@hubspot/api-client";
import { FilterOperatorEnum } from "@hubspot/api-client/lib/codegen/crm/contacts/models/Filter";

let hubspotClient: Client | null = null;

function getClient(): Client | null {
  if (hubspotClient) return hubspotClient;
  const token = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!token) {
    console.log(
      JSON.stringify({
        route: "hubspot",
        event: "skip",
        reason: "HUBSPOT_ACCESS_TOKEN not set",
      })
    );
    return null;
  }
  hubspotClient = new Client({ accessToken: token });
  return hubspotClient;
}

interface ScorecardContactProps {
  email: string;
  firstName?: string;
  companyName?: string;
  role?: string;
  scorecardScore: number;
  scorecardTier: string;
  newsletterOptIn: boolean;
}

export async function upsertScorecardContact(
  props: ScorecardContactProps
): Promise<string | null> {
  const client = getClient();
  if (!client) return null;

  const properties: Record<string, string> = {
    email: props.email,
    scorecard_score: String(props.scorecardScore),
    scorecard_tier: props.scorecardTier,
    scorecard_date: new Date().toISOString().split("T")[0],
    lead_source_detail: "Scorecard",
    newsletter_opt_in: String(props.newsletterOptIn),
  };

  if (props.firstName) properties.firstname = props.firstName;
  if (props.companyName) properties.company = props.companyName;
  if (props.role) properties.jobtitle = props.role;

  try {
    // Try to find existing contact
    const searchResponse = await client.crm.contacts.searchApi.doSearch({
      filterGroups: [
        {
          filters: [
            { propertyName: "email", operator: FilterOperatorEnum.Eq, value: props.email },
          ],
        },
      ],
      properties: ["email"],
      limit: 1,
      after: "0",
      sorts: [],
    });

    if (searchResponse.total > 0) {
      const contactId = searchResponse.results[0].id;
      await client.crm.contacts.basicApi.update(contactId, { properties });
      console.log(
        JSON.stringify({
          route: "hubspot",
          event: "contact_updated",
          contactId,
        })
      );
      return contactId;
    }

    // Create new contact
    const createResponse = await client.crm.contacts.basicApi.create({
      properties,
      associations: [],
    });
    console.log(
      JSON.stringify({
        route: "hubspot",
        event: "contact_created",
        contactId: createResponse.id,
      })
    );
    return createResponse.id;
  } catch (err) {
    console.error(
      JSON.stringify({
        route: "hubspot",
        event: "error",
        error: err instanceof Error ? err.message : String(err),
      })
    );
    return null;
  }
}

interface ContactFormProps {
  email: string;
  name: string;
  company?: string;
  companySize?: string;
  source?: string;
}

export async function upsertContactFormLead(
  props: ContactFormProps
): Promise<string | null> {
  const client = getClient();
  if (!client) return null;

  const properties: Record<string, string> = {
    email: props.email,
    firstname: props.name.split(" ")[0],
    lastname: props.name.split(" ").slice(1).join(" ") || "",
    lead_source_detail: "Contact Form",
  };

  if (props.company) properties.company = props.company;
  if (props.companySize) properties.company_size_range = props.companySize;
  if (props.source) properties.hs_analytics_source = props.source;

  try {
    const searchResponse = await client.crm.contacts.searchApi.doSearch({
      filterGroups: [
        {
          filters: [
            { propertyName: "email", operator: FilterOperatorEnum.Eq, value: props.email },
          ],
        },
      ],
      properties: ["email"],
      limit: 1,
      after: "0",
      sorts: [],
    });

    if (searchResponse.total > 0) {
      const contactId = searchResponse.results[0].id;
      await client.crm.contacts.basicApi.update(contactId, { properties });
      return contactId;
    }

    const createResponse = await client.crm.contacts.basicApi.create({
      properties,
      associations: [],
    });
    return createResponse.id;
  } catch (err) {
    console.error(
      JSON.stringify({
        route: "hubspot",
        event: "contact_form_error",
        error: err instanceof Error ? err.message : String(err),
      })
    );
    return null;
  }
}

export async function upsertNewsletterContact(
  email: string,
  source: string
): Promise<string | null> {
  const client = getClient();
  if (!client) return null;

  const properties: Record<string, string> = {
    email,
    newsletter_pending: "true",
    newsletter_opt_in_source: source,
    newsletter_opt_in_date: new Date().toISOString().split("T")[0],
  };

  try {
    const searchResponse = await client.crm.contacts.searchApi.doSearch({
      filterGroups: [
        {
          filters: [
            { propertyName: "email", operator: FilterOperatorEnum.Eq, value: email },
          ],
        },
      ],
      properties: ["email", "newsletter_confirmed"],
      limit: 1,
      after: "0",
      sorts: [],
    });

    if (searchResponse.total > 0) {
      const contact = searchResponse.results[0];
      if (contact.properties.newsletter_confirmed === "true") {
        return contact.id; // Already subscribed
      }
      await client.crm.contacts.basicApi.update(contact.id, { properties });
      return contact.id;
    }

    const createResponse = await client.crm.contacts.basicApi.create({
      properties,
      associations: [],
    });
    return createResponse.id;
  } catch (err) {
    console.error(
      JSON.stringify({
        route: "hubspot",
        event: "newsletter_error",
        error: err instanceof Error ? err.message : String(err),
      })
    );
    return null;
  }
}

export async function confirmNewsletterContact(
  email: string
): Promise<boolean> {
  const client = getClient();
  if (!client) return false;

  try {
    const searchResponse = await client.crm.contacts.searchApi.doSearch({
      filterGroups: [
        {
          filters: [
            { propertyName: "email", operator: FilterOperatorEnum.Eq, value: email },
          ],
        },
      ],
      properties: ["email"],
      limit: 1,
      after: "0",
      sorts: [],
    });

    if (searchResponse.total > 0) {
      await client.crm.contacts.basicApi.update(searchResponse.results[0].id, {
        properties: {
          newsletter_confirmed: "true",
          newsletter_confirmed_date: new Date().toISOString().split("T")[0],
          newsletter_pending: "false",
        },
      });
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
