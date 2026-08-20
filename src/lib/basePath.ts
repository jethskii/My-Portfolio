// GitHub Pages serves this repo at /My-Portfolio/, but local dev and other
// hosts serve it at the root. GITHUB_ACTIONS is set automatically by the
// deploy workflow, so this only kicks in for that build.
export const basePath = process.env.GITHUB_ACTIONS === "true" ? "/My-Portfolio" : "";

export function withBasePath(path: string) {
  return `${basePath}${path}`;
}
