import { SurveyForm } from "@/components/SurveyForm";

export default function Home() {
  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Obfuscation Identity Archive</p>
        <h1>Build an identity that refuses clean prediction.</h1>
        <p>
          Assemble an obfuscation identity with tags, false routes, non-human fragments, and one carried fragment.
          The submitted result is stored as project-compatible JSON.
        </p>
      </section>
      <SurveyForm />
    </main>
  );
}
