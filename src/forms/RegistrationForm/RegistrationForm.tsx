import React, {Component, ReactEventHandler, ReactNode} from 'react'

// local utils
import classes from 'src/utils/classes'
import fieldValidator, {IValidatorField} from 'src/utils/fieldValidator'
import registration from 'src/api/registration'

// components
import Field, {IFieldOnChangeProp, TFieldProps} from 'src/components/Field'
import Button from 'src/components/Button'

// file imports
import emailImage from './email.svg'
import passwordImage from './password.svg'
import registrationFormFields from './registrationFormFields'

// style imports
import './RegistrationForm.css'

// interfaces
interface IRegistrationFormState {
  fields: TFieldProps[]
  disabled: boolean
  loading: boolean
}

// variables
const beforeIcons: Record<string, ReactNode> = {
  password: <img className='registration-form__icon registration-form__icon_password' src={passwordImage} alt='password' />,
  email: <img className='registration-form__icon registration-form__icon_email' src={emailImage} alt='email' />,
}

// classes
/**
 * @description Simple form to sign-up
 * */
class RegistrationForm extends Component<{}, IRegistrationFormState> {
  state = {
    fields: registrationFormFields,
    disabled: true,
    loading: false,
  }

  isValid = false

  onSubmit: ReactEventHandler = e => {
    e.preventDefault()

    this.validation()

    if (this.isValid) {
      this.setState({loading: true})

      const data: Record<string, any> = {}

      for (const field of this.state.fields) {
        data[field.name] = field.value
      }

      const {name, email, password, country, gender} = data

      registration(name, email, password, country, gender)
        .then(result => {
          alert(`Success registration, your id ${result.data.signup.id}`)
          this.clear()
        }, error => {
          alert(error.message)
        })
        .finally(() => {
          this.setState({loading: false})
        })
    }
  }

  clear () {
    const newFields = []

    for (const field of this.state.fields) {
      newFields.push({...field, value: undefined, error: ''})
    }

    this.setState({fields: newFields})
  }

  validation () {
    const newFields = [] as TFieldProps[]
    const fields = this.state.fields

    for (const field of fields) {
      newFields.push({...field, error: fieldValidator(field)})
    }

    this.setState({fields: newFields})

    this.updateDisabled(newFields)
  }

  updateDisabled (fields: IValidatorField[] = this.state.fields) {
    let disabled = false

    for (const field of fields) {
      if (!field.value || field.error) {
        disabled = true
        break
      }
    }

    this.isValid = !disabled
    this.setState({disabled})
  }

  setFieldValue: IFieldOnChangeProp = (value: boolean | string, name: string) => {
    const {fields} = this.state
    const newFields = fields.map(field => field.name === name ? {
      ...field,
      value,
      error: fieldValidator({...field, value})
    } : field) as TFieldProps[]

    this.setState({fields: newFields})

    this.updateDisabled(newFields)
  }

  render () {
    const {fields, disabled, loading} = this.state

    return (
      <form className={classes('registration-form', loading && 'registration-form_loading')} onSubmit={this.onSubmit}>
        <h1 className='registration-form__title'>Create a new account</h1>
        {fields.map(field => (
          <Field
            {...field}
            before={beforeIcons[field.name]}
            key={field.name}
            onChange={this.setFieldValue}
          />
        ))}
        <Button stretch disabled={disabled} loading={loading}>Sign up</Button>
      </form>
    )
  }
}

export default RegistrationForm
