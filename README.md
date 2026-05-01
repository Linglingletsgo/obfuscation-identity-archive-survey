# Obfuscation Identity Archive Survey

A bilingual SurveyJS + Next.js 16 questionnaire for the Obfuscation Identity Archive.

## What It Does

- Renders the current project questionnaire with SurveyJS.
- Supports English and Chinese switching.
- Converts SurveyJS results into the same raw JSON schema used by the project dataset.
- Writes each submission to GitHub as `submissions/<submission_id>.json` through a server-side Next.js route.

## Tech Stack

- Next.js `16.2.4`
- React `19.1.0`
- SurveyJS Form Library (`survey-core`, `survey-react-ui`)
- GitHub REST Contents API

## Local Setup

```bash
npm install
npm run generate:survey
cp .env.example .env.local
npm run dev
```

## Environment Variables

Create `.env.local` for local development or configure these variables in deployment:

```bash
GITHUB_TOKEN=
GITHUB_OWNER=
GITHUB_REPO=obfuscation-identity-archive-survey
GITHUB_BRANCH=main
GITHUB_SUBMISSIONS_PATH=submissions
GITHUB_COMMITTER_NAME=Obfuscation Archive Bot
GITHUB_COMMITTER_EMAIL=actions@users.noreply.github.com
```

`GITHUB_TOKEN` must be server-side only. Do not expose it to the browser. Use a fine-grained GitHub token with Contents read/write access to the target submissions repository.

## Submission Output

Each submission is committed as JSON with fields such as:

```json
{
  "submission_id": "submission_20260501000000_abcd1234",
  "dataset": "Obfuscation Identity Archive",
  "is_test_data": false,
  "submitted_at": "2026-05-01T00:00:00.000Z",
  "shell_form": "Real self",
  "places": [],
  "expression_formats": [],
  "material_sources": [],
  "social_role_tags": [],
  "spatial_tags": [],
  "time_era_tags": [],
  "platform_behavior_tags": [],
  "emotion_personality_tags": [],
  "relationship_tags": [],
  "aesthetic_cultural_tags": [],
  "system_tags": [],
  "non_human_tags": [],
  "identity_name": "",
  "carried_fragment": "",
  "consent_data_use_scope": "I have read and agree to the stated use scope, including artistic machine-based organization or generation within this project, and I am willing to submit this obfuscation identity archive.",
  "consent_artistic_machine_processing_required": true
}
```

## Frontend Submission State

After a successful submission, the frontend only displays the generated `submission_id`. GitHub file and commit URLs are not shown to participants.
