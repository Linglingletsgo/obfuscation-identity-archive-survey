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

const submissionText: Record<
  Locale,
  {
    idle: string;
    submitting: string;
    successPrefix: string;
    saveCode: string;
  }
> = {
  default: {
    idle: "Complete the archive form, then submit your obfuscated identity.",
    submitting: "Sealing and submitting the archive entry...",
    successPrefix: "Submission ID:",
    saveCode: "Save this submission ID. It is the only identifier shown for your archive entry."
  },
  "zh-cn": {
    idle: "请完成档案表单，然后提交你的混淆身份。",
    submitting: "正在封存并提交档案条目...",
    successPrefix: "Submission ID：",
    saveCode: "请保存这个 submission ID。这是之后识别该档案条目的唯一编码。"
  }
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
      <div className="survey-toolbar">
        <p>Language / 语言</p>
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
      </div>

      <Survey model={survey} />

      <div className={`submission-state ${submission.status}`} aria-live="polite">
        {submission.status === "idle" && <p>{submissionText[locale].idle}</p>}
        {submission.status === "submitting" && <p>{submissionText[locale].submitting}</p>}
        {submission.status === "success" && (
          <div>
            <p>
              {submissionText[locale].successPrefix} <strong>{submission.submissionId}</strong>
            </p>
            <p>{submissionText[locale].saveCode}</p>
          </div>
        )}
        {submission.status === "error" && <p>{submission.message}</p>}
      </div>
    </section>
  );
}
