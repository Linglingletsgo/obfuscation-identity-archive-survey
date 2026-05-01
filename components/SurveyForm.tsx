"use client";

import "survey-core/survey-core.min.css";
import { useMemo, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { createSurveyJson } from "@/lib/surveySchema";

type Locale = "default" | "zh-cn";
type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; submissionId: string }
  | { status: "error"; message: string };

const localeLabels: Record<Locale, string> = {
  default: "English",
  "zh-cn": "中文"
};

export function SurveyForm() {
  const [locale, setLocale] = useState<Locale>("default");
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const survey = useMemo(() => {
    const model = new Model(createSurveyJson());
    model.locale = locale;
    model.onComplete.add(async (sender) => {
      setSubmission({ status: "submitting" });
      try {
        const response = await fetch("/api/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ data: sender.data })
        });
        const result = (await response.json()) as {
          error?: string;
          submission_id?: string;
        };
        if (!response.ok) throw new Error(result.error || "Submission failed.");
        setSubmission({
          status: "success",
          submissionId: result.submission_id || "unknown"
        });
      } catch (error) {
        setSubmission({
          status: "error",
          message: error instanceof Error ? error.message : "Unknown submission error."
        });
      }
    });
    return model;
  }, [locale]);

  return (
    <section className="survey-shell">
      <div className="language-switch" aria-label="Language switch">
        {(Object.keys(localeLabels) as Locale[]).map((item) => (
          <button
            className={item === locale ? "active" : ""}
            key={item}
            onClick={() => setLocale(item)}
            type="button"
          >
            {localeLabels[item]}
          </button>
        ))}
      </div>

      <Survey model={survey} />

      <div className={`submission-state ${submission.status}`}>
        {submission.status === "idle" && <p>Results will be converted to the project JSON schema and committed to GitHub.</p>}
        {submission.status === "submitting" && <p>Submitting archive to GitHub...</p>}
        {submission.status === "success" && (
          <div>
            <p>Submitted: {submission.submissionId}</p>
          </div>
        )}
        {submission.status === "error" && <p>{submission.message}</p>}
      </div>
    </section>
  );
}
