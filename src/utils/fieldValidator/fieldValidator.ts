export interface IValidatorField {
  name: string
  value?: string | boolean
  values?: string[]
  required?: boolean
  pattern?: string
  patternError?: string
  requiredError?: string
  valuesError?: string
}

export default function ({
  name,
  value,
  values,
  required,
  pattern,
  patternError = `Please enter a valid ${name}`,
  requiredError = `You must ${values ? 'select' : 'enter'} the ${name}`,
  valuesError = `You must select from ${values?.join(', ')}`,
}: IValidatorField): string {
  if (!value) {
    return required ? requiredError : ''
  }

  if (pattern && !new RegExp(pattern).test(value as string)) {
    return patternError
  }

  if (values && !values.includes(value as string)) {
    return valuesError
  }

  return ''
}
