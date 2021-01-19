export const PASS_REGEXP = /.{6,}/

export default function (password?: string) {
  if (password === undefined) {
    return true
  }
  return PASS_REGEXP.test(password)
}
