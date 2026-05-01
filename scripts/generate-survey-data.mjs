import fs from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve("..");
const EN_FILE = path.join(ROOT, "proj1/questionare/obfuscation_identity_archive_questionnaire_content_v0.4.md");
const ZH_FILE = path.join(ROOT, "proj1/questionare/obfuscation_identity_archive_questionnaire_content_v0.4_zh.md");
const OUT_FILE = path.resolve("lib/generatedSurveyData.ts");

const QUESTION_CONFIG = [
  { q: 1, name: "shell_form", type: "radiogroup", isRequired: true },
  { q: 2, name: "places", type: "checkbox", maxSelectedChoices: 6 },
  { q: 3, name: "expression_formats", type: "checkbox", maxSelectedChoices: 5 },
  { q: 4, name: "material_sources", type: "checkbox", maxSelectedChoices: 8 },
  { q: 5, name: "social_role_tags", type: "checkbox", minSelectedChoices: 3, maxSelectedChoices: 6 },
  { q: 6, name: "spatial_tags", type: "checkbox", minSelectedChoices: 3, maxSelectedChoices: 6 },
  { q: 7, name: "time_era_tags", type: "checkbox", minSelectedChoices: 3, maxSelectedChoices: 6 },
  { q: 8, name: "platform_behavior_tags", type: "checkbox", minSelectedChoices: 3, maxSelectedChoices: 6 },
  { q: 9, name: "emotion_personality_tags", type: "checkbox", minSelectedChoices: 4, maxSelectedChoices: 7 },
  { q: 10, name: "relationship_tags", type: "checkbox", minSelectedChoices: 3, maxSelectedChoices: 6 },
  { q: 11, name: "aesthetic_cultural_tags", type: "checkbox", minSelectedChoices: 3, maxSelectedChoices: 6 },
  { q: 12, name: "system_tags", type: "checkbox", minSelectedChoices: 3, maxSelectedChoices: 6 },
  { q: 13, name: "non_human_tags", type: "checkbox", minSelectedChoices: 6, maxSelectedChoices: 12 }
];

function sectionForQuestion(text, questionNumber) {
  const start = text.search(new RegExp(`^## Q${questionNumber}\\.`, "m"));
  if (start < 0) throw new Error(`Question ${questionNumber} not found`);
  const next = text.slice(start + 1).search(/^## Q\d+\./m);
  return next < 0 ? text.slice(start) : text.slice(start, start + 1 + next);
}

function titleForSection(section) {
  return section.split("\n")[0].replace(/^##\s*/, "").trim();
}

function choicesForSection(section) {
  return section
    .split("\n")
    .filter((line) => line.startsWith("- "))
    .map((line) => line.replace(/^- /, "").trim())
    .filter((item) => !item.includes("Other:") && !item.includes("其他："));
}

function selectionDescription(config) {
  if (config.type !== "checkbox") return undefined;

  if (config.minSelectedChoices && config.maxSelectedChoices) {
    return {
      default: `Select ${config.minSelectedChoices}-${config.maxSelectedChoices} options.`,
      "zh-cn": `请选择 ${config.minSelectedChoices}-${config.maxSelectedChoices} 项。`
    };
  }

  if (config.maxSelectedChoices) {
    return {
      default: `Select up to ${config.maxSelectedChoices} options.`,
      "zh-cn": `最多选择 ${config.maxSelectedChoices} 项。`
    };
  }

  return undefined;
}

async function main() {
  const [en, zh] = await Promise.all([fs.readFile(EN_FILE, "utf8"), fs.readFile(ZH_FILE, "utf8")]);
  const questions = QUESTION_CONFIG.map((config) => {
    const enSection = sectionForQuestion(en, config.q);
    const zhSection = sectionForQuestion(zh, config.q);
    const enChoices = choicesForSection(enSection);
    const zhChoices = choicesForSection(zhSection);
    if (enChoices.length !== zhChoices.length) {
      throw new Error(`Choice count mismatch at Q${config.q}: en=${enChoices.length}, zh=${zhChoices.length}`);
    }

    return {
      ...config,
      title: {
        default: titleForSection(enSection),
        "zh-cn": titleForSection(zhSection)
      },
      description: selectionDescription(config),
      choices: enChoices.map((value, index) => ({
        value,
        text: {
          default: value,
          "zh-cn": zhChoices[index]
        }
      })),
      showOtherItem: true,
      otherText: {
        default: "Other",
        "zh-cn": "其他"
      }
    };
  });

  const content = `// Generated from proj1/questionare/*.md by scripts/generate-survey-data.mjs.\n` +
    `// Do not edit manually unless the questionnaire source is unavailable.\n\n` +
    `import type { SurveyQuestionDefinition } from "./surveyTypes";\n\n` +
    `export const generatedQuestionDefinitions = ${JSON.stringify(questions, null, 2)} satisfies SurveyQuestionDefinition[];\n`;

  await fs.writeFile(OUT_FILE, content);
  console.log(`Wrote ${OUT_FILE}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
