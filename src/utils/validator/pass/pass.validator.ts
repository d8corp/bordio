export const PASS_REGEXP = /.{6,}/

export default function (password?: string, required?: boolean) {
  if (!password) {
    return required ? 'You must enter your password' : ''
  }

  return PASS_REGEXP.test(password) ? '' : 'Password must contain at least 6 symbols'
}
