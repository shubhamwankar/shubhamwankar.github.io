/** Public files use the same prefix as routes on GitHub project Pages. */
export function assetPath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/${path.replace(/^\/+/, "")}`
}
