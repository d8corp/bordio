import nameValidator from './name'
import passValidator from './pass'
import emailValidator from './email'

export interface IValidatorField {
  name: string
  type: string
  value: undefined | string | boolean
  error: string
  required: boolean
  placeholder?: string
  values?: string[]
}

export default function ({name, value, required}: IValidatorField): string {
  switch (name) {
    case 'name': {
      return nameValidator(value as string, required)
    }
    case 'password': {
      return passValidator(value as string, required)
    }
    case 'email': {
      return emailValidator(value as string, required)
    }
    default: {
      return required && value === undefined ? `You must enter your ${name}` : ''
    }
  }
}
