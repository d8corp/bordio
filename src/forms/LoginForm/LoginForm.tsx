import React, {Component} from 'react'
import Form, {TFormData} from 'src/components/Form'
import Field from 'src/components/Field'
import Button from 'src/components/Button'

import './LoginForm.css'

class LoginForm extends Component {
  state = {
    fields: {
      name: undefined,
      email: undefined,
      password: undefined,
      country: undefined,
      gender: undefined,
      accept: undefined,
    } as Record<string, string | undefined>,
  }

  onSubmit = (data: TFormData) => {
    this.onValid()
    console.log('>', data)
  }

  onValid () {
    const newFields: Record<string, string> = {}
    const {fields} = this.state

    for (const key in fields) {
      newFields[key] = fields[key] === undefined ? '' : fields[key] + ''
    }
  }

  render () {
    return (
      <Form className='login-form' onSubmit={this.onSubmit}>
        <h1 className='login-form__title'>Create a new account</h1>
        <Field
          placeholder='Enter your name'
          name='name'
          onChange={name => this.setState({name})}
        />
        <Field
          placeholder='Email'
          name='email'
          onChange={email => this.setState({email})}
        />
        <Field
          placeholder='Password'
          name='password'
          type='password'
          onChange={password => this.setState({password})}
        />
        <Button stretch>Sign up</Button>
      </Form>
    )
  }
}

export default LoginForm
