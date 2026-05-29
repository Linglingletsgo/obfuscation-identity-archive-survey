"use client";

import "survey-core/survey-core.min.css";
import { useEffect, useMemo, useState } from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { createSurveyJson } from "@/lib/surveySchema";

export type Locale = "default" | "zh-cn";
type SubmissionState =
  | { status: "idle" }
  | { status: "submitting" }
  | { status: "success"; submissionId: string }
  | { status: "error"; message: string };

const submissionText: Record<
  Locale,
  {
    submitting: string;
    successPrefix: string;
    saveCode: string;
  }
> = {
  default: {
    submitting: "Sealing and submitting the archive entry...",
    successPrefix: "Submission ID:",
    saveCode: "Save this submission ID. It is the only identifier shown for your archive entry."
  },
  "zh-cn": {
    submitting: "正在封存并提交档案条目...",
    successPrefix: "Submission ID：",
    saveCode: "请保存这个 submission ID。这是之后识别该档案条目的唯一编码。"
  }
};

function isCompletionPreview() {
  if (process.env.NODE_ENV !== "development") return false;
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).has("complete");
}

export type SurveyFormProps = {
  locale: Locale;
  onCompletionChange?: (isComplete: boolean) => void;
  onPageIndexChange?: (pageIndex: number) => void;
};

export function SurveyForm({ locale, onCompletionChange, onPageIndexChange }: SurveyFormProps) {
  const [submission, setSubmission] = useState<SubmissionState>({ status: "idle" });
  const survey = useMemo(() => {
    const model = new Model(createSurveyJson());
    model.locale = locale;
    model.onComplete.add(async (sender) => {
      onCompletionChange?.(true);
      if (isCompletionPreview()) {
        setSubmission({ status: "success", submissionId: "debug-preview" });
        return;
      }
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
  }, [locale, onCompletionChange]);

  useEffect(() => {
    if (!isCompletionPreview()) return;
    survey.doComplete();
  }, [survey]);

  useEffect(() => {
    onPageIndexChange?.(survey.currentPageNo);
    const syncPageIndex = (sender: Model) => {
      onPageIndexChange?.(sender.currentPageNo);
    };
    survey.onCurrentPageChanged.add(syncPageIndex);

    return () => {
      survey.onCurrentPageChanged.remove(syncPageIndex);
    };
  }, [onCompletionChange, onPageIndexChange, survey]);

  return (
    <section className="survey-shell">
      <span className="survey-border-layer" aria-hidden="true">
        <span className="survey-border survey-border-top" />
        <span className="survey-border survey-border-right" />
        <span className="survey-border survey-border-bottom" />
        <span className="survey-border survey-border-left" />
      </span>
      <Survey model={survey} />

      {submission.status !== "idle" && (
        <div className={`submission-state ${submission.status}`} aria-live="polite">
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
      )}
    </section>
  );
}
