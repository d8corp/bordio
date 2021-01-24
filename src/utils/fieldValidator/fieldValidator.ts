export interface IValidatorOptions {
  name: string
  values?: string[]
  required?: boolean
  pattern?: string
  patternError?: string
  requiredError?: string
  valuesError?: string
}

export default function (value: any, {
  name,
  values,
  required,
  pattern,
  patternError = `Please enter a valid ${name}`,
  requiredError = `You must ${values ? 'select' : 'enter'} the ${name}`,
  valuesError = `You must select from ${values?.join(', ')}`,
}: IValidatorOptions): string {
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
