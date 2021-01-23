import React, {Component} from 'react'
import Form from 'src/components/Form'

// api
import registration, {RegistrationApi} from 'src/api/registration'

// components
import {FieldProps} from 'src/components/Field'

// file imports
import registrationFormFields from './registrationFormFields'

// interfaces
export interface RegistrationFormProps {
  children?: never
}

// classes
class RegistrationForm extends Component<RegistrationFormProps> {
  state = {
    fields: registrationFormFields,
  }

  onChange = (fields: FieldProps[]) => {
    this.setState({fields})
  }

  render () {
    const {fields} = this.state

    return (
      <Form
        title='Create a new account'
        actionName='Sign up'
        fields={fields}
        onChange={this.onChange}
        action={data => registration(data as RegistrationApi).then(result => {
          alert(`Success registration, your id ${result.data.signup.id}`)
        })}
      />
    )
  }
}

export default RegistrationForm
