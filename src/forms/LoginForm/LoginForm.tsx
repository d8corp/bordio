import React, {Component, ReactEventHandler} from 'react'
import Field, {IOnFieldChange} from 'src/components/Field'
import Button from 'src/components/Button'
import fieldValidator, {IValidatorField} from 'src/utils/fieldValidator'

import './LoginForm.css'

interface ILoginFormState {
  fields: IValidatorField[]
  disabled: boolean
}

class LoginForm extends Component<{}, ILoginFormState> {
  state = {
    fields: [
      {
        name: 'name',
        type: 'text',
        placeholder: 'Enter your name',
        value: undefined,
        error: '',
        required: true,
        pattern: '^[a-zA-Z]+$',
      },
      {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        value: undefined,
        error: '',
        required: true,
        pattern: '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
        patternError: 'Please enter a valid email address',
      },
      {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        value: undefined,
        error: '',
        required: true,
        pattern: '.{6,}',
        patternError: 'Password must contain at least 6 symbols',
      },
      {
        name: 'country',
        type: 'select',
        placeholder: 'Select country',
        value: undefined,
        values: [],
        error: '',
        required: true,
      },
      {
        name: 'gender',
        type: 'radio',
        value: undefined,
        values: [],
        error: '',
        required: true,
      },
      {
        name: 'policies',
        type: 'check',
        value: false,
        error: '',
        required: true,
        requiredError: 'You must accept the policies',
      }
    ],
    disabled: true,
  }

  isValid = false

  onSubmit: ReactEventHandler = e => {
    e.preventDefault()

    this.validation()

    if (this.isValid) {
      console.log('>', this.state.fields)
    }
  }

  validation () {
    const newFields: IValidatorField[] = []
    const fields: IValidatorField[] = this.state.fields

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

  setFieldValue: IOnFieldChange = (value, name) => {
    const {fields} = this.state
    const newFields = fields.map(field => field.name === name ? {
      ...field,
      value,
      error: fieldValidator({...field, value})
    } : field)

    this.setState({fields: newFields})

    this.updateDisabled(newFields)
  }

  render () {
    const {fields, disabled} = this.state

    return (
      <form className='login-form' onSubmit={this.onSubmit}>
        <h1 className='login-form__title'>Create a new account</h1>
        {fields.map(field => (
          <Field
            {...field}
            key={field.name}
            onChange={this.setFieldValue}
          />
        ))}
        <Button stretch disabled={disabled}>Sign up</Button>
      </form>
    )
  }
}

export default LoginForm
