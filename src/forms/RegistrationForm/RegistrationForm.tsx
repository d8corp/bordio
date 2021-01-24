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
  autoFocus?: boolean
}

// components
class RegistrationForm extends Component<RegistrationFormProps> {
  render () {
    const {onError, onSuccess, autoFocus} = this.props

    return (
      <Form
        autoFocus={autoFocus}
        actionName='Sign up'
        fields={registrationFormFields}
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
