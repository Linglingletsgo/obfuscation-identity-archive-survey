"use client";

import { useState } from "react";
import { SurveyFormClient } from "@/components/SurveyFormClient";
import type { Locale } from "@/components/SurveyForm";

const localeLabels: Record<Locale, string> = {
  default: "English",
  "zh-cn": "中文"
};

const content: Record<
  Locale,
  {
    htmlLang: string;
    title: string;
    introHeading: string;
    intro: string[];
    protocolTitle: string;
    protocolItems: string[];
    structureTitle: string;
    structureItems: string[];
  }
> = {
  default: {
    htmlLang: "en",
    title: "Assemble an identity that refuses clean prediction.",
    introHeading: "Project Introduction",
    intro: [
      "Today, human experience is increasingly recorded as data. Social platforms, smart devices, recommendation systems, and data brokers collect traces of what we click, buy, desire, avoid, feel, repeat, and withhold. These traces are used to classify us, predict us, and shape what we may become.",
      "Obfuscation Identity Archive begins from this present condition and imagines a future Posthuman Legibility Regime: a world where identity must be continuously updated, explained, and made readable to platforms, databases, and governance systems.",
      "In this future, opacity becomes suspicious. Old desires, private memories, contradictory identities, false messages, invented aliases, and unrecorded emotions are treated as risks because they cannot be easily quantified, predicted, or absorbed into official systems.",
      "This questionnaire does not ask you to describe your true self. Instead, you are invited to assemble an obfuscation identity through selected tags and one carried fragment. This identity may be partial, fictional, misleading, poetic, contradictory, or unstable.",
      "Your answers will be transformed into a tag-based avatar for the following project, which will be published and accessed. These avatar fragments may later be combined with others to form a Collective Avatar-Archive: a visual and 3D body made from tags, memories, conflicts, signals, and residues that resist becoming fully legible."
    ],
    protocolTitle: "Archive protocol",
    protocolItems: [
      "No directly identifying details",
      "Fictional, misleading, and contradictory answers are valid",
      "Keep your submission ID after submitting"
    ],
    structureTitle: "Questionnaire structure",
    structureItems: [
      "15 questions in total",
      "A. Basic Assembly: Q1-Q4",
      "B. Tag Assembly: Q5-Q13",
      "C. Text Fragments: Q14-Q15",
      "D. Consent: Q16"
    ]
  },
  "zh-cn": {
    htmlLang: "zh-CN",
    title: "组装一个拒绝被清晰预测的身份。",
    introHeading: "项目简介",
    intro: [
      "在当下，人类经验正越来越多地被记录为数据。社交平台、智能设备、推荐系统和数据经纪产业持续收集我们点击、购买、渴望、回避、感受、重复以及隐瞒的痕迹。这些痕迹被用来分类我们、预测我们，并塑造我们可能成为什么样的人。",
      "Obfuscation Identity Archive（混淆身份档案）从这一现实处境出发，推测一个未来的后人类可读性政体：在这个世界里，身份必须被持续更新、解释，并变得能够被平台、数据库和治理系统读取。",
      "在这样的未来中，不透明性会变得可疑。旧的欲望、私密的记忆、矛盾的身份、虚假的信息、发明的别名，以及未被记录的情绪，都可能被视为系统风险，因为它们无法被轻易量化、预测或吸收到官方系统中。",
      "这份问卷并不是要求你描述真实的自己。相反，你将通过选择标签，并留下一段携带文字片段，组装一个“混淆身份”。这个身份可以是局部的、虚构的、误导性的、诗意的、矛盾的或不稳定的。",
      "你的回答将被转化为后续项目中的一个基于标签的化身形象，并将被发布和访问。这些化身之后也可能与其他问卷结果组合，形成一个 Collective Avatar-Archive：一个由标签、记忆、冲突、信号和残余构成的视觉与 3D 身体，用来抵抗身份被完全变得可读。"
    ],
    protocolTitle: "档案协议",
    protocolItems: [
      "请不要填写可直接识别个人身份的信息",
      "虚构、误导性和矛盾的回答都是有效的",
      "提交后请保存你的 submission ID"
    ],
    structureTitle: "问卷结构",
    structureItems: [
      "共 15 个问题",
      "A. 基础组装：Q1-Q4",
      "B. 标签组装：Q5-Q13",
      "C. 文字片段：Q14-Q15",
      "D. 同意条款：Q16"
    ]
  }
};

export function HomeContent() {
  const [locale, setLocale] = useState<Locale>("default");
  const current = content[locale];

  return (
    <main lang={current.htmlLang}>
      <div className="global-toolbar">
        <p className="eyebrow">Obfuscation Identity Archive</p>
        <div className="language-switch" aria-label="Language switch">
          {(Object.keys(localeLabels) as Locale[]).map((item) => (
            <button className={item === locale ? "active" : ""} key={item} onClick={() => setLocale(item)} type="button">
              {localeLabels[item]}
            </button>
          ))}
        </div>
      </div>

      <section className="hero">
        <div className="hero-copy">
          <h1>{current.title}</h1>
          <article className="project-intro" aria-label={current.introHeading}>
            <h2>{current.introHeading}</h2>
            {current.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
        <div className="hero-side">
          <aside className="hero-card" aria-label={current.protocolTitle}>
            <p className="card-kicker">{current.protocolTitle}</p>
            <ul>
              {current.protocolItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
          <aside className="hero-card" aria-label={current.structureTitle}>
            <p className="card-kicker">{current.structureTitle}</p>
            <ul>
              {current.structureItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <SurveyFormClient locale={locale} />
    </main>
  );
}
