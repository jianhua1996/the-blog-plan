export function cutText(str, len = 90) {
  if (typeof str !== "string") return
  if (str.length < len) return str
  return `${str.slice(0, len)}...`
}
