"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Client {
  name: string;
  logo: string;
  caseStudyId?: string;
}

const clients: Client[] = [
  { name: "DeepL", logo: "/images/clients/deepl.svg" },
  { name: "Concentrix", logo: "/images/clients/concentrix.svg" },
  { name: "Tradelite Solutions", logo: "/images/clients/tradelite.svg" },
  { name: "NonNocere", logo: "/images/clients/nonnocere.svg" },
  { name: "Delta.io", logo: "/images/clients/deltaio.svg" },
];

export function TrustBar() {
  return (
    <section className="py-16 border-y border-surface-border bg-charcoal/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-sm font-mono text-steel-grey uppercase tracking-wider">
            Trusted by Industry Leaders
          </p>
          <p className="mt-2 text-xs text-steel-grey/60">
            50+ systems built &bull; 2,000+ hours automated
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-16"
        >
          {clients.map((client, index) => {
            const logoContent = (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-steel-grey opacity-60 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center h-10"
              >
                <Image
                  src={client.logo}
                  alt={`${client.name} logo`}
                  width={120}
                  height={40}
                  className="h-8 w-auto object-contain"
                  style={{ filter: "brightness(0) invert(0.7)" }}
                />
              </motion.div>
            );

            if (client.caseStudyId) {
              return (
                <Link
                  key={client.name}
                  href={`/work#${client.caseStudyId}`}
                  className="focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-offset-2 focus:ring-offset-charcoal rounded"
                >
                  {logoContent}
                </Link>
              );
            }

            return logoContent;
          })}
        </motion.div>
      </div>
    </section>
  );
}
