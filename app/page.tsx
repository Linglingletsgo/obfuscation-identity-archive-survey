import { SurveyFormClient } from "@/components/SurveyFormClient";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Obfuscation Identity Archive</p>
          <h1>Build an identity that refuses clean prediction.</h1>
          <p>
            Assemble an obfuscation identity with tags, false routes, non-human fragments, and one carried fragment.
          </p>
        </div>
        <aside className="hero-card" aria-label="Archive protocol summary">
          <p className="card-kicker">Archive protocol</p>
          <ul>
            <li>Anonymous submission</li>
            <li>Fictional and contradictory answers allowed</li>
            <li>Save your submission ID after completion</li>
          </ul>
        </aside>
      </section>
      <SurveyFormClient />
    </main>
  );
}
