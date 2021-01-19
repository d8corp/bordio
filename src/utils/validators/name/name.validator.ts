export const NAME_REGEXP = /^[a-zA-Z]+$/

export default function (name?: string) {
  if (name === undefined) {
    return true
  }
  return NAME_REGEXP.test(name)
}
