export const NAME_REGEXP = /^[a-zA-Z]+$/

export default function (name?: string, required?: boolean) {
  if (!name) {
    return required ? 'You must enter your name' : ''
  }

  return NAME_REGEXP.test(name) ? '' : 'Please enter a valid name'
}
