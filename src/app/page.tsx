import {
  Hero,
  TrustBar,
  ProblemSolution,
  Capabilities,
  Repository,
  About,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Capabilities />
      <Repository />
      <About />
      <Contact />
    </>
  );
}
