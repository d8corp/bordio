import React, {Component, ReactEventHandler, ReactNode} from 'react'

// local utils
import fieldValidator from 'src/utils/fieldValidator'

// api
import registration from 'src/api/registration'

// components
import Field, {FieldProps} from 'src/components/Field'
import Button from 'src/components/Button'

// file imports
import emailImage from './email.svg'
import passwordImage from './password.svg'
import registrationFormFields from './registrationFormFields'

// style imports
import './RegistrationForm.css'

// interfaces
export interface RegistrationFormState {
  fields: FieldProps[]
  disabled: boolean
  loading: boolean
}
export interface RegistrationFormProps {
  children?: never
}

// variables
export const BEFORE_ICONS: Record<string, ReactNode> = {
  password: <img className='registration-form__icon registration-form__icon_password' src={passwordImage} alt='password' />,
  email: <img className='registration-form__icon registration-form__icon_email' src={emailImage} alt='email' />,
}

// classes
class RegistrationForm extends Component<RegistrationFormProps, RegistrationFormState> {
  state = {
    fields: registrationFormFields,
    disabled: true,
    loading: false,
  }

  // events
  onSubmit: ReactEventHandler = e => {
    e.preventDefault()

    const {disabled, loading} = this.state

    if (loading) {
      return
    }

    this.validation()

    if (!disabled) {
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

      this.setState({loading: true})
    }
  }
  onChange = (value: boolean | string, name: string) => {
    const fields: FieldProps[] = []
    let disabled = false

    function addField (field: FieldProps) {
      fields.push(field)

      const invalidRequired = field.required && !field.value

      if (invalidRequired || field.error) {
        disabled = true
      }
    }

    for (const field of this.state.fields) {
      if (field.name === name) {
        const newField: FieldProps = {
          ...field,
          value: value as any,
        }

        newField.error = fieldValidator(newField)

        addField(newField)
      } else {
        addField(field)
      }
    }

    this.setState({fields, disabled})
  }

  // methods
  clear () {
    const newFields = []

    for (const field of this.state.fields) {
      newFields.push({...field, value: undefined, error: ''})
    }

    this.setState({fields: newFields, disabled: true})
  }
  validation () {
    const newFields = []
    const fields = this.state.fields

    for (const field of fields) {
      newFields.push({...field, error: fieldValidator(field)})
    }

    this.setState({fields: newFields})
  }

  render () {
    const {fields, disabled, loading} = this.state

    return (
      <form className='registration-form' onSubmit={this.onSubmit}>
        <h1 className='registration-form__title'>Create a new account</h1>
        {fields.map(field => (
          <Field
            {...field}
            before={BEFORE_ICONS[field.name]}
            key={field.name}
            onChange={this.onChange}
          />
        ))}
        <Button stretch disabled={disabled} loading={loading}>Sign up</Button>
      </form>
    )
  }
}

export default RegistrationForm
