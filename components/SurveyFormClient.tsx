"use client";

import dynamic from "next/dynamic";
import type { Locale } from "./SurveyForm";

export const SurveyFormClient = dynamic<{ locale: Locale }>(
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
