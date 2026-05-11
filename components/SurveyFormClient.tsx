"use client";

import dynamic from "next/dynamic";
import type { Locale } from "./SurveyForm";

export const SurveyFormClient = dynamic<{ locale: Locale }>(
  () => import("./SurveyForm").then((module) => module.SurveyForm),
  {
    ssr: false,
    loading: () => (
      <section className="survey-shell survey-loading">
        <span className="survey-border-layer" aria-hidden="true">
          <span className="survey-border survey-border-top" />
          <span className="survey-border survey-border-right" />
          <span className="survey-border survey-border-bottom" />
          <span className="survey-border survey-border-left" />
        </span>
        Preparing the archive form...
      </section>
    ),
  },
);
