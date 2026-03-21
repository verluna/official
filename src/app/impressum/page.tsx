import { Metadata } from "next";
import { PageHeader } from "@/components/ui";

export const metadata: Metadata = {
  title: "Impressum | Verluna",
  description: "Legal notice (Impressum) for Verluna, Berlin, Germany. Required under German Telemediengesetz (TMG).",
  alternates: {
    canonical: "https://verluna.de/impressum",
  },
};

export default function ImpressumPage() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Impressum"
        description="Angaben gemass Telemediengesetz (TMG)"
      />
      <div className="pb-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            <Section title="Angaben gemass &sect; 5 TMG">
              <div className="p-4 rounded-lg border border-surface-border bg-surface/30 font-mono text-sm">
                <p className="text-off-white">Verluna</p>
                <p className="text-steel-grey">Tolga Oral</p>
                <p className="text-steel-grey">[Strasse und Hausnummer]</p>
                <p className="text-steel-grey">[PLZ] Berlin</p>
                <p className="text-steel-grey">Deutschland</p>
              </div>
              <p className="text-sm text-warning-amber mt-4">
                Note: Exact address and legal entity details to be filled in by
                Tolga before publication.
              </p>
            </Section>

            <Section title="Kontakt">
              <ul>
                <li>
                  <strong>E-Mail:</strong>{" "}
                  <a
                    href="mailto:hello@verluna.de"
                    className="text-terminal-green hover:underline"
                  >
                    hello@verluna.de
                  </a>
                </li>
                <li>
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://verluna.de"
                    className="text-terminal-green hover:underline"
                  >
                    verluna.de
                  </a>
                </li>
              </ul>
            </Section>

            <Section title="Umsatzsteuer-ID">
              <p>
                Umsatzsteuer-Identifikationsnummer gemass &sect; 27a
                Umsatzsteuergesetz: [USt-IdNr. einsetzen]
              </p>
            </Section>

            <Section title="Verantwortlich fur den Inhalt nach &sect; 55 Abs. 2 RStV">
              <div className="p-4 rounded-lg border border-surface-border bg-surface/30 font-mono text-sm">
                <p className="text-off-white">Tolga Oral</p>
                <p className="text-steel-grey">[Adresse wie oben]</p>
              </div>
            </Section>

            <Section title="EU-Streitschlichtung">
              <p>
                Die Europaische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-terminal-green hover:underline"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p>
                Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind
                nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor
                einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Section>

            <Section title="Haftung fur Inhalte">
              <p>
                Als Diensteanbieter sind wir gemass &sect; 7 Abs. 1 TMG fur eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach &sect;&sect; 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, ubermittelte oder
                gespeicherte fremde Informationen zu uberwachen oder nach
                Umstanden zu forschen, die auf eine rechtswidrige Tatigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberuhrt. Eine diesbezugliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung moglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </Section>

            <Section title="Haftung fur Links">
              <p>
                Unser Angebot enthalt Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb konnen wir fur
                diese fremden Inhalte auch keine Gewahr ubernehmen. Fur die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
            </Section>

            <Section title="Urheberrecht">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfaltigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung ausserhalb der Grenzen des Urheberrechtes bedurfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </Section>
          </div>
        </div>
      </div>
    </>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h3 className="text-xl font-semibold tracking-tight text-off-white mb-4">
        {title}
      </h3>
      <div className="text-steel-grey space-y-4 leading-relaxed [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_strong]:text-off-white">
        {children}
      </div>
    </section>
  );
}
