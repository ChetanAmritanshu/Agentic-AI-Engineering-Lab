export const SITE = {
  name: "Agentic AI Engineering Lab",
  shortName: "AGENTIC AI LAB",
  repository: "https://github.com/ChetanAmritanshu/Agentic-AI-Engineering-Lab",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH ?? "",
} as const;

export function href(path: string) {
  return `${SITE.basePath}${path}`;
}
