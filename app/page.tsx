import { SurveyFormClient } from "@/components/SurveyFormClient";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Obfuscation Identity Archive</p>
          <h1>Assemble an identity that refuses clean prediction.</h1>
          <p>
            Combine unstable tags, false routes, non-human traces, and one carried fragment into an anonymous archive entry.
          </p>
        </div>
        <aside className="hero-card" aria-label="Archive protocol summary">
          <p className="card-kicker">Archive protocol</p>
          <ul>
            <li>No directly identifying details</li>
            <li>Fictional, misleading, and contradictory answers are valid</li>
            <li>Keep your submission ID after submitting</li>
          </ul>
        </aside>
      </section>
      <SurveyFormClient />
    </main>
  );
}
