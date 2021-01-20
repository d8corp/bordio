import React, {Component, ReactEventHandler} from 'react'
import Field, {IOnFieldChange} from 'src/components/Field'
import Button from 'src/components/Button'
import validator, {IValidatorField} from 'src/utils/validator'

import './LoginForm.css'

interface ILoginFormState {
  fields: IValidatorField[]
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
      },
      {
        name: 'email',
        type: 'email',
        placeholder: 'Email',
        value: undefined,
        error: '',
        required: true,
      },
      {
        name: 'password',
        type: 'password',
        placeholder: 'Password',
        value: undefined,
        error: '',
        required: true,
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
        name: 'accept',
        type: 'check',
        value: false,
        error: '',
        required: true,
      }
    ],
  }

  onSubmit: ReactEventHandler = e => {
    e.preventDefault()

    console.log('>', this.state.fields)
  }

  checkAll () {

  }

  validation (): IValidatorField[] {
    const newFields: IValidatorField[] = []
    const fields: IValidatorField[] = this.state.fields

    for (const field of fields) {
      newFields.push({...field, error: validator(field)})
    }

    return newFields
  }

  setValue: IOnFieldChange = (value, name) => {
    const {fields} = this.state

    this.setState({fields: fields.map(field => field.name === name ? {
      ...field,
      value,
      error: validator({...field, value})
    } : field)})
  }

  render () {
    const {fields} = this.state
    return (
      <form className='login-form' onSubmit={this.onSubmit}>
        <h1 className='login-form__title'>Create a new account</h1>
        {fields.map(field => (
          <Field
            {...field}
            key={field.name}
            onChange={this.setValue}
          />
        ))}
        <Button stretch>Sign up</Button>
      </form>
    )
  }
}

export default LoginForm
