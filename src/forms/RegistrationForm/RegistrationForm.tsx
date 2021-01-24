import React, {Component} from 'react'

// import components
import Form from 'src/components/Form'

// api
import registration, {RegistrationApi} from 'src/api/registration'

// data imports
import registrationFormFields from './registrationFormFields'

// interfaces
export interface RegistrationFormProps {
  children?: never
  onSuccess?: (id: string) => any
  onError?: (message: string) => any
}

// components
class RegistrationForm extends Component<RegistrationFormProps> {
  state = {
    fields: registrationFormFields,
  }

  onChange = (fields: typeof registrationFormFields) => {
    this.setState({fields})
  }

  render () {
    const {fields} = this.state
    const {onError, onSuccess} = this.props

    return (
      <Form
        actionName='Sign up'
        fields={fields}
        action={data => registration(data as RegistrationApi).then(result => {
          if (onSuccess) {
            onSuccess(result.data.signup.id)
          }
        }, error => {
          if (onError) {
            onError(error.message)
          }
          return Promise.reject(error)
        })}
      />
    )
  }
}

export default RegistrationForm
