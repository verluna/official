import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";

export function FounderNote() {
  return (
    <section className="section-padding border-t border-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <Reveal className="md:col-span-3">
            <Image
              src="/images/team/tolga-oral.png"
              alt="Tolga Oral, founder of Verluna"
              width={320}
              height={320}
              className="rounded-lg border border-line w-full max-w-[260px]"
            />
          </Reveal>

          <Reveal delay={0.1} className="md:col-span-9">
            <blockquote className="text-2xl sm:text-3xl font-medium tracking-tight text-text leading-snug max-w-3xl">
              &ldquo;Most AI consulting ends with a slide deck. Ours ends with a
              system your team runs the next morning.&rdquo;
            </blockquote>
            <p className="mt-6 text-sm text-text-muted">
              Tolga Oral, Founder.{" "}
              <Link
                href="/about"
                className="text-text hover:text-accent transition-colors duration-200"
              >
                More about Verluna
              </Link>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
