import { generatedQuestionDefinitions } from "./generatedSurveyData";

const fieldGroups = {
  basic: ["shell_form", "places", "expression_formats", "material_sources"],
  tags: [
    "social_role_tags",
    "spatial_tags",
    "time_era_tags",
    "platform_behavior_tags",
    "emotion_personality_tags",
    "relationship_tags",
    "aesthetic_cultural_tags",
    "system_tags",
    "non_human_tags"
  ]
};

function generatedQuestion(name: string) {
  const question = generatedQuestionDefinitions.find((item) => item.name === name);
  if (!question) throw new Error(`Missing generated question: ${name}`);
  return {
    ...question,
    q: undefined
  };
}

export function createSurveyJson() {
  return {
    title: {
      default: "Obfuscation Identity Archive",
      "zh-cn": "混淆身份档案"
    },
    description: {
      default: "A privacy questionnaire for assembling an obfuscation identity archive.",
      "zh-cn": "一份用于组装混淆身份档案的隐私问卷。"
    },
    showProgressBar: "top",
    progressBarType: "pages",
    checkErrorsMode: "onValueChanged",
    completeText: {
      default: "Submit archive",
      "zh-cn": "提交档案"
    },
    pages: [
      {
        name: "intro",
        title: {
          default: "Before you begin",
          "zh-cn": "开始之前"
        },
        elements: [
          {
            type: "html",
            name: "intro_text",
            html: {
              default:
                "<div class=\"policy-note\"><h3>Use scope and privacy notice</h3><p>You may mix real memories, fictional details, dreams, metaphors, false memories, nonsense, private codes, random content, platform-style labels, non-human identities, imagined eras, or any other materials.</p><p>Please do not enter directly identifiable information, including legal names, addresses, phone numbers, email addresses, account handles, ID numbers, or other information that can directly identify you or another person.</p><p>Your submission will be converted into a project-compatible JSON record and stored in the project GitHub submissions repository for artistic research, dataset testing, visualization, avatar-map generation, and related project documentation. This archive is not confidential storage.</p><p>By continuing, you agree that the submitted material may be processed, reorganized, visualized, and machine-interpreted within this project. You may use fictional, misleading, contradictory, or obfuscated answers.</p><p><strong>After submission, save the generated file code / submission ID.</strong> It is the only code shown to you for identifying your submitted record later.</p></div>",
              "zh-cn":
                "<div class=\"policy-note\"><h3>使用范围与隐私说明</h3><p>你可以混合真实记忆、虚构细节、梦境、隐喻、虚假记忆、无意义内容、私人暗号、随机内容、平台式标签、非人类身份、想象年代或任何其他材料。</p><p>请不要填写可直接识别个人身份的信息，包括真实姓名、地址、电话号码、邮箱、账号、证件号码，或任何能够直接识别你或他人的信息。</p><p>你的提交会被转换为项目兼容的 JSON 记录，并保存到项目 GitHub submissions 仓库中，用于艺术研究、数据集测试、可视化、avatar-map 生成及相关项目文档。本档案不是保密存储空间。</p><p>继续填写即表示你同意提交内容可在本项目中被处理、重组、可视化和机器解释。你可以使用虚构、误导性、矛盾或混淆化的答案。</p><p><strong>提交完成后，请保存生成的文件编码 / submission ID。</strong> 这是之后识别你提交记录的唯一编码。</p></div>"
            }
          }
        ]
      },
      {
        name: "basic_assembly",
        title: {
          default: "A. Basic Assembly",
          "zh-cn": "A. 基础组装"
        },
        elements: fieldGroups.basic.map(generatedQuestion)
      },
      {
        name: "tag_assembly",
        title: {
          default: "B. Tag Assembly",
          "zh-cn": "B. 标签组装"
        },
        description: {
          default:
            "These tags do not represent your real identity. You may select contradictory, unstable, absurd, or conflicting tags.",
          "zh-cn": "这些标签不代表你的真实身份。你可以选择矛盾、不稳定、荒诞或彼此冲突的标签。"
        },
        elements: fieldGroups.tags.map(generatedQuestion)
      },
      {
        name: "text_fragments",
        title: {
          default: "C. Text Fragments",
          "zh-cn": "C. 文本碎片"
        },
        elements: [
          {
            type: "text",
            name: "identity_name",
            isRequired: true,
            title: {
              default: "Q14. Give this obfuscation identity a name",
              "zh-cn": "Q14. 给这个混淆身份起一个名字"
            }
          },
          {
            type: "comment",
            name: "carried_fragment",
            isRequired: true,
            title: {
              default: "Q17. Leave one thing this obfuscation identity carries, hides, transmits, or invents",
              "zh-cn": "Q17. 请留下这个混淆身份携带、隐藏、传递或发明的一样东西"
            },
            description: {
              default:
                "This may be a secret, memory, warning, rumor, message, false message, private code, unfinished thought, sensory trace, impossible object, or anything else.",
              "zh-cn":
                "它可以是秘密、记忆、警告、传闻、信息、虚假信息、私人暗号、未完成的想法、感官痕迹、不可能存在的物件，或任何其他答案。"
            }
          }
        ]
      },
      {
        name: "consent",
        title: {
          default: "D. Consent",
          "zh-cn": "D. 同意"
        },
        elements: [
          {
            type: "radiogroup",
            name: "consent_agreement",
            isRequired: true,
            title: {
              default: "Q18. Do you agree to the data-use scope stated at the beginning of this questionnaire?",
              "zh-cn": "Q18. 您是否同意本问卷开头所述的数据使用范围？"
            },
            choices: [
              {
                value: "agree",
                text: {
                  default:
                    "I have read and agree to the stated use scope, including artistic machine-based organization or generation within this project, and I am willing to submit this obfuscation identity archive.",
                  "zh-cn":
                    "我已阅读并同意所述使用范围，包括本项目内的艺术性机器整理或生成，我愿意提交这份混淆身份档案。"
                }
              },
              {
                value: "decline",
                text: {
                  default: "I do not agree to the stated use scope and will not submit.",
                  "zh-cn": "我不同意所述使用范围，且不予提交。"
                }
              }
            ]
          }
        ]
      }
    ]
  };
}
