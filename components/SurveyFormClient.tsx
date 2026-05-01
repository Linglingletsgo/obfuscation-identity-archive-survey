"use client";

import dynamic from "next/dynamic";

export const SurveyFormClient = dynamic(
  () => import("./SurveyForm").then((module) => module.SurveyForm),
  {
    ssr: false,
    loading: () => (
      <section className="survey-shell survey-loading">
        Preparing the archive form...
      </section>
    ),
  },
);
