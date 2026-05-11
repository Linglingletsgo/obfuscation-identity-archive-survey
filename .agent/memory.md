# Project Memory

## Snapshot
- Date: 2026-05-11
- Project root: `/Volumes/Acasis/1学业相关/_FashionFutures/RIF2/general/obfuscation-identity-archive-survey`
- Current status: independent Next.js + SurveyJS bilingual questionnaire app for Obfuscation Identity Archive. GitHub repo: `https://github.com/Linglingletsgo/obfuscation-identity-archive-survey`. Recent UI work created a hand-drawn/crayon-style survey interface with custom assets in `public/survey-ui/`.

## Project State
- Key files and folders:
  - `app/page.tsx`: renders `HomeContent`.
  - `app/globals.css`: all current hand-drawn UI styling, mobile media queries, SurveyJS overrides, frame assets, and font rules.
  - `app/api/submit/route.ts`: API route that transforms SurveyJS results and commits JSON to GitHub.
  - `components/HomeContent.tsx`: bilingual intro/protocol/structure content, language switch, and hides intro sections after SurveyJS leaves page 0.
  - `components/SurveyForm.tsx`: client SurveyJS model, completion submit logic, page-index callback, decorative survey border layer.
  - `components/SurveyFormClient.tsx`: dynamic client-only SurveyJS render to avoid hydration mismatch.
  - `lib/generatedSurveyData.ts`: generated bilingual question data used by SurveyJS.
  - `lib/surveySchema.ts`, `surveyTypes.ts`, `transformResult.ts`: schema and result conversion to project-compatible raw JSON.
  - `lib/githubStorage.ts`: GitHub submission write helper. Never write actual secrets into memory/docs.
  - `scripts/generate-survey-data.mjs`: regenerates `generatedSurveyData.ts` from `../proj1/questionare/*questionnaire_content*`.
  - `public/survey-ui/`: hand-drawn PNG assets: `button_frame.png`, `card_frame_large.png`, `card_frame_small.png`, `divider_scribble.png`, `label_frame.png`, `language_switch_frame.png`, `survey_border_horizontal.png`, `survey_border_vertical.png`.
  - `submissions/`: local/remote JSON submissions; many real submission files now exist.
- Related main-project docs:
  - `../proj1/questionare/obfuscation_identity_archive_questionnaire_content_v0.4.md`
  - `../proj1/questionare/obfuscation_identity_archive_questionnaire_content_v0.4_zh.md`
  - These Markdown questionnaire files were manually synced to remove `A mass of fog / 一团雾` and `A gust of wind / 一阵风`; archives were copied to `../archive/`.
- Generated/noisy areas:
  - `.next/` is local build output and ignored.
  - macOS `._*` files may appear on the external drive; ignore/remove from commit scopes when needed.

## Task Goals
- Active goal: host a bilingual anonymous web questionnaire that writes project-compatible JSON submissions to GitHub.
- Questionnaire goal: collect obfuscation identity tags plus `identity_name` and `carried_fragment`, with clear anonymity/privacy/use-scope language.
- Current UI goal: preserve a childlike hand-drawn/crayon style while keeping mobile layout usable.
- User preferences/constraints:
  - Final user-facing explanations in Chinese.
  - Do not show submission result links in frontend.
  - Do not include `"version"` in output JSON.
  - Use one consistent label for generated file code/submission ID if shown.
  - Tell users not to provide directly identifying personal information.
  - Keep questionnaire content synchronized between `lib/generatedSurveyData.ts` and `../proj1/questionare` Markdown when options change.
  - Commit/push only when user asks. User frequently asks `push` after CSS changes.

## Decisions
- Stack: Next.js `16.2.4`, React `19.1.0`, SurveyJS `survey-core` / `survey-react-ui`.
- Scripts use Webpack, not Turbopack: `npm run dev` -> `next dev --webpack`; `npm run build` -> `next build --webpack`.
- SurveyJS is rendered client-only because SurveyJS generated unstable IDs previously caused React hydration mismatch.
- `HomeContent` tracks SurveyJS page index; intro/title/language/protocol sections show only while `currentPageNo === 0`. After `Next`, only the questionnaire remains.
- UI assets:
  - Top/side survey frame uses separate horizontal/vertical PNGs via `.survey-border-layer`; no giant frame image for the whole survey.
  - `card_frame_large.png` is used for `Project Introduction` and `policy-note` (`Before you begin`) cards.
  - `label_frame.png` is shared by `Project Introduction` and `Use scope and privacy notice` labels.
  - `language_switch_frame.png` frames the language selector.
- Fonts:
  - Default English UI uses hand-drawn fallback stack (`Comic Sans MS`, `Chalkboard SE`, etc.).
  - Chinese mode uses Google font `ZCOOL KuaiLe` through `--zh-font`; SurveyJS Chinese font is set via `--sjs-font-family`.
  - Label font sizing was contentious. Latest intended state: `Project Introduction` and `Use scope and privacy notice` labels both use `0.9rem`; SurveyJS needs high-specificity override for `.sd-root-modern .policy-note h3` or it may apply default large h3 styles.
- Current questionnaire option choice:
  - Deleted only `A mass of fog / 一团雾` and `A gust of wind / 一阵风` because they duplicated `Fog / 雾` and `Wind / 风`.
  - Other exact duplicates across questions were intentionally not deleted.

## Commands and Verification
- Common commands:
  - `npm run generate:survey`
  - `npm run build`
  - `npm run dev`
  - `git status --short`
  - `git add ... && git commit -m "..." && git push`
- Verification status:
  - Recent builds have passed with `npm run build` after CSS and survey data edits.
  - Last pushed commit before current uncommitted work: `de40985 fix: preserve mobile card frame proportions` on `main`.
  - There is currently an uncommitted change in `lib/generatedSurveyData.ts`: removed `A mass of fog` and `A gust of wind` from the generated data. This has not been committed/pushed yet.
  - Related Markdown docs in `../proj1/questionare` were also modified and archived in `../archive/`, but the parent folder is not a git repo.

## Next Steps
- Immediate next action:
  - If user wants frontend consistency deployed, commit/push `lib/generatedSurveyData.ts` after confirming no other questionnaire option changes are needed.
  - If Markdown source is authoritative, consider running `npm run generate:survey` only after ensuring the generator reads the edited Markdown and does not reintroduce removed items.
- Known blockers/risks:
  - `.env.local` contains secrets; never reveal or commit token values.
  - No formal E2E test for GitHub submission flow.
  - Mobile layout is visually sensitive; avoid broad desktop-affecting CSS changes when user asks for mobile fixes.
  - `card_frame_large.png` should not be distorted further on mobile unless explicitly approved.
