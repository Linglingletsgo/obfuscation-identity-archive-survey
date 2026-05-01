export type LocaleText = {
  default: string;
  "zh-cn": string;
};

export type SurveyChoice = {
  value: string;
  text: LocaleText;
};

export type SurveyQuestionDefinition = {
  q: number;
  name: string;
  type: "radiogroup" | "checkbox";
  title: LocaleText;
  description?: LocaleText;
  choices: SurveyChoice[];
  isRequired?: boolean;
  minSelectedChoices?: number;
  maxSelectedChoices?: number;
  showOtherItem: boolean;
  otherText: LocaleText;
};
