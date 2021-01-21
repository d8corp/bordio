import React, {Component, ReactEventHandler, ReactNode} from 'react'

import classes from 'src/utils/classes'
import fieldValidator, {IValidatorField} from 'src/utils/fieldValidator'
import registration from 'src/api/registration'
import Field, {IOnFieldChange} from 'src/components/Field'
import Button from 'src/components/Button'
import Link from 'src/components/Link'

import emailImage from './email.svg'
import passwordImage from './password.svg'

import './LoginForm.css'

interface ILoginFormState {
  fields: IValidatorField[]
  disabled: boolean
  loading: boolean
}

const beforeIcons: Record<string, ReactNode> = {
  password: <img src={passwordImage} alt='password' />,
  email: <img src={emailImage} alt='email' />,
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
        values: ['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya'],
        error: '',
        required: true,
      },
      {
        name: 'gender',
        type: 'radiobox',
        value: undefined,
        values: ['MALE', 'FEMALE'],
        error: '',
        required: true,
        override: (val: string) => val === 'MALE' ? 'Male' : 'Female'
      },
      {
        name: 'policies',
        type: 'checkbox',
        placeholder: <>Accept <Link href='#'>terms</Link> and <Link href='#'>conditions</Link></>,
        value: false,
        error: '',
        required: true,
        requiredError: 'You must accept the policies',
      }
    ],
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
    const {fields, disabled, loading} = this.state

    return (
      <form className={classes('login-form', loading && 'login-form_loading')} onSubmit={this.onSubmit}>
        <h1 className='login-form__title'>Create a new account</h1>
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

export default LoginForm
