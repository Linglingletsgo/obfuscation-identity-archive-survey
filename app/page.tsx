import { SurveyFormClient } from "@/components/SurveyFormClient";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Obfuscation Identity Archive</p>
          <h1>Assemble an identity that refuses clean prediction.</h1>
          <p>
            This questionnaire asks you to assemble an obfuscated version of your own identity. You may use real, fictional,
            misleading, contradictory, or non-human elements.
            <br />
            这份问卷邀请你组装一个关于“你自己身份”的混淆版本。你可以使用真实、虚构、误导性、矛盾或非人类元素。
          </p>
        </div>
        <div className="hero-side">
          <aside className="hero-card" aria-label="Archive protocol summary">
            <p className="card-kicker">Archive protocol</p>
            <ul>
              <li>No directly identifying details</li>
              <li>Fictional, misleading, and contradictory answers are valid</li>
              <li>Keep your submission ID after submitting</li>
            </ul>
          </aside>
          <aside className="hero-card" aria-label="Questionnaire structure summary">
            <p className="card-kicker">Questionnaire structure</p>
            <ul>
              <li>15 questions in total</li>
              <li>A. Basic Assembly: Q1-Q4</li>
              <li>B. Tag Assembly: Q5-Q13</li>
              <li>C. Text Fragments: Q14-Q15</li>
              <li>D. Consent: Q16</li>
            </ul>
          </aside>
        </div>
      </section>
      <SurveyFormClient />
    </main>
  );
}
