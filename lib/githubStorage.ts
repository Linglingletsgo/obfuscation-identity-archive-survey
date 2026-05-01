type GitHubCommitResponse = {
  content?: {
    path?: string;
    html_url?: string;
  };
  commit?: {
    html_url?: string;
  };
};

function requiredEnv(name: string) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

export async function saveSubmissionToGitHub(record: Record<string, unknown>) {
  const token = requiredEnv("GITHUB_TOKEN");
  const owner = requiredEnv("GITHUB_OWNER");
  const repo = requiredEnv("GITHUB_REPO");
  const branch = process.env.GITHUB_BRANCH || "main";
  const basePath = process.env.GITHUB_SUBMISSIONS_PATH || "submissions";
  const committerName = process.env.GITHUB_COMMITTER_NAME || "Obfuscation Archive Bot";
  const committerEmail = process.env.GITHUB_COMMITTER_EMAIL || "obfuscation-archive@example.com";
  const submissionId = String(record.submission_id);
  const filePath = `${basePath}/${submissionId}.json`;
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;
  const content = Buffer.from(JSON.stringify(record, null, 2) + "\n").toString("base64");

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      Accept: "application/vnd.github+json",
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
      "X-GitHub-Api-Version": "2022-11-28"
    },
    body: JSON.stringify({
      message: `Add obfuscation archive submission ${submissionId}`,
      content,
      branch,
      committer: {
        name: committerName,
        email: committerEmail
      }
    })
  });

  const result = (await response.json()) as GitHubCommitResponse & { message?: string };
  if (!response.ok) {
    throw new Error(result.message || `GitHub write failed with status ${response.status}`);
  }

  return {
    path: result.content?.path ?? filePath,
    fileUrl: result.content?.html_url,
    commitUrl: result.commit?.html_url
  };
}
