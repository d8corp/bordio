/**
 * fieldValidator generic types
 *
 * V - type of value
 * R - required option type
 * */

// interfaces
export interface IValidatorOptions <V, R> {
  name: string
  values?: any[]
  required?: R
  pattern?: V extends string ? string : never
  patternError?: V extends string ? string : never
  requiredError?: R extends true ? string : never
  valuesError?: string
}

// functions
export function fieldValidator <V, R> (value: V, {
  name,
  values,
  required,
  pattern,
  patternError = `Please enter a valid ${name}` as any,
  requiredError = `You must ${values ? 'select' : 'enter'} the ${name}` as any,
  valuesError = `You must select from ${values?.join(', ')}`,
}: IValidatorOptions<V, R>): string {
  if (!value && required) {
    return requiredError
  }

  if (pattern && !new RegExp(pattern).test(value as any)) {
    return patternError
  }

  if (values && !values.includes(value)) {
    return valuesError
  }

  return ''
}

export default fieldValidator
