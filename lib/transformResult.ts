const ARRAY_FIELDS = [
  "places",
  "expression_formats",
  "material_sources",
  "social_role_tags",
  "spatial_tags",
  "time_era_tags",
  "platform_behavior_tags",
  "emotion_personality_tags",
  "relationship_tags",
  "aesthetic_cultural_tags",
  "system_tags",
  "non_human_tags"
] as const;

type RawSurveyData = Record<string, unknown>;

function randomId() {
  return Math.random().toString(16).slice(2, 10);
}

function normalizeOtherValue(value: unknown, comment: unknown) {
  if (value !== "other") return String(value);
  const trimmed = typeof comment === "string" ? comment.trim() : "";
  return trimmed ? `Other: ${trimmed}` : "Other";
}

function normalizeSingle(data: RawSurveyData, field: string) {
  const value = data[field];
  return value === undefined ? "" : normalizeOtherValue(value, data[`${field}-Comment`]);
}

function normalizeArray(data: RawSurveyData, field: string) {
  const value = data[field];
  if (!Array.isArray(value)) return [];
  return value.map((item) => normalizeOtherValue(item, data[`${field}-Comment`]));
}

function requiredString(data: RawSurveyData, field: string) {
  const value = data[field];
  if (typeof value !== "string" || value.trim().length === 0) {
    throw new Error(`Missing required field: ${field}`);
  }
  return value.trim();
}

export function transformSurveyResult(data: RawSurveyData) {
  if (data.consent_agreement !== "agree") {
    throw new Error("Submission requires data-use consent.");
  }

  const now = new Date();
  const submissionId = `submission_${now.toISOString().replace(/[-:.TZ]/g, "")}_${randomId()}`;
  const record: Record<string, unknown> = {
    submission_id: submissionId,
    dataset: "Obfuscation Identity Archive",
    is_test_data: false,
    submitted_at: now.toISOString(),
    shell_form: normalizeSingle(data, "shell_form")
  };

  for (const field of ARRAY_FIELDS) {
    record[field] = normalizeArray(data, field);
  }

  record.identity_name = requiredString(data, "identity_name");
  record.carried_fragment = requiredString(data, "carried_fragment");
  record.consent_data_use_scope =
    "I have read and agree to the stated use scope, including artistic machine-based organization or generation within this project, and I am willing to submit this obfuscation identity archive.";
  record.consent_artistic_machine_processing_required = true;

  return record;
}
