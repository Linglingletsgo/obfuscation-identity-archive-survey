import { saveSubmissionToGitHub } from "@/lib/githubStorage";
import { transformSurveyResult } from "@/lib/transformResult";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { data?: Record<string, unknown> };
    if (!body.data || typeof body.data !== "object") {
      return Response.json({ error: "Missing archive entry data." }, { status: 400 });
    }

    const record = transformSurveyResult(body.data);
    const github = await saveSubmissionToGitHub(record);

    return Response.json({
      ok: true,
      submission_id: record.submission_id,
      github
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown submission error.";
    const status = message.includes("consent") || message.includes("Missing required") ? 400 : 500;
    return Response.json({ error: message }, { status });
  }
}
