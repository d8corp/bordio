export const EMAIL_REGEXP = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function (email?: string, required?: boolean): string {
  if (!email) {
    return required ? 'You must enter your email' : ''
  }

  return EMAIL_REGEXP.test(email) ? '' : 'Please enter a valid email address'
}
