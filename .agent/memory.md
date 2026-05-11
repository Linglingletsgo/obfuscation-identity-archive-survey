# Project Memory

## Snapshot
- Date: 2026-05-09
- Project root: `/Volumes/Acasis/1学业相关/_FashionFutures/RIF2/general/obfuscation-identity-archive-survey`
- Current status: independent Next.js + SurveyJS bilingual questionnaire app for Obfuscation Identity Archive. It is a separate GitHub repo at `https://github.com/Linglingletsgo/obfuscation-identity-archive-survey`.

## Project State
- Key files and folders:
  - `app/page.tsx`: homepage shell and intro/privacy copy.
  - `app/globals.css`: UI styling.
  - `app/api/submit/route.ts`: API route that transforms SurveyJS results and commits JSON to GitHub.
  - `components/SurveyForm.tsx` and `SurveyFormClient.tsx`: SurveyJS rendering; client-only handling avoids SSR hydration issues.
  - `lib/generatedSurveyData.ts`: generated SurveyJS bilingual question data.
  - `lib/surveySchema.ts`, `surveyTypes.ts`, `transformResult.ts`: schema and result conversion to project-compatible raw JSON.
  - `lib/githubStorage.ts`: GitHub submission write helper. Do not store secrets in memory.
  - `scripts/generate-survey-data.mjs`: regenerates `generatedSurveyData.ts` from questionnaire markdown files.
  - `submissions/`: local/remote JSON submissions; currently contains 10 real submission files.
  - `.env.example`: documents required env vars. `.env.local` exists locally but contains secrets and must not be copied into memory or commits.
- Generated artifacts:
  - `.next/`: local Next build output, ignored by git.
  - `lib/generatedSurveyData.ts`: generated from `../proj1/questionare/*questionnaire_content*`.
- Missing or noisy areas:
  - Many macOS `._*` files exist; ignore/remove before commits if necessary.

## Task Goals
- Active goal: host a bilingual anonymous web questionnaire that writes project-compatible JSON submissions to GitHub.
- Questionnaire goal: collect obfuscation identity tags plus `identity_name` and `carried_fragment`, with clear anonymity/privacy/use-scope language.
- User preferences or constraints:
  - Do not show submission result links in the frontend.
  - Do not include `"version"` in output JSON.
  - Use one consistent label for generated file code/submission ID if shown.
  - Tell users not to provide directly identifying personal information.
  - Keep questionnaire content synchronized with `proj1/questionare` markdown files.

## Decisions
- Stack: Next.js `16.2.4`, React `19.1.0`, SurveyJS `survey-core` / `survey-react-ui`.
- SurveyJS is rendered client-only to avoid hydration mismatch from unstable generated attributes.
- Output schema matches the algorithm raw input format used by `proj1/obfuscation-interaction-algorithm/raw/submissions/`.
- Server env vars required for GitHub writes:
  - `GITHUB_TOKEN`
  - `GITHUB_OWNER`
  - `GITHUB_REPO`
  - `GITHUB_BRANCH`
  - `GITHUB_SUBMISSIONS_PATH`
  - `GITHUB_COMMITTER_NAME`
  - `GITHUB_COMMITTER_EMAIL`
- Do not write actual token values into docs or memory.
- Current submission files in `submissions/` are the 10 real results later copied into the algorithm raw folder.

## Commands and Verification
- Commands:
  - `npm run generate:survey`
  - `npm run build`
  - `npm run dev`
  - `npm audit --omit=dev`
- Verification status:
  - Previous build passed with Next 16.2.4.
  - `postcss` was pinned via `overrides`.
  - GitHub repo exists and local `main` has been pushed previously.
  - If questionnaire markdown changes, rerun `npm run generate:survey` before building/deploying.

## Next Steps
- Immediate next action: if questionnaire files change in `../proj1/questionare`, regenerate `lib/generatedSurveyData.ts`, build, and push.
- Known blockers:
  - Deployment requires a valid GitHub token with contents write permission on the submissions repo.
  - `gh auth status` may be stale in some shell contexts; plain `git push` can still work via system credentials.
  - No formal E2E test for submission flow.
