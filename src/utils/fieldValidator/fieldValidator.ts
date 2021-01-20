import {type} from "os";

export interface IValidatorField {
  name: string
  value?: string | boolean
  type?: string
  error?: string
  required?: boolean
  placeholder?: string
  values?: string[]
  pattern?: string
  requiredError?: string
  patternError?: string
  valuesError?: string
}

export default function ({
  name,
  value,
  values,
  required,
  pattern,
  patternError = `Please enter a valid ${name}`,
  requiredError = `You must ${values ? 'select' : 'enter'} your ${name}`,
  valuesError = `You must select from ${values?.join(', ')}`,
}: IValidatorField): string {
  if (value === undefined || typeof value === 'boolean') {
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
