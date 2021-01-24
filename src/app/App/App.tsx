import React, {Component, ReactNode} from 'react'

// components
import Modals from 'src/components/Modals'
import Modal from 'src/components/Modal'
import Button from 'src/components/Button'
import RegistrationForm from 'src/forms/RegistrationForm'

// interfaces
export interface AppProps {
  children?: never
}
export interface AppState {
  title: ReactNode
  message: ReactNode
}

/**
 * @description - main application component
 * */
export class App extends Component <AppProps, AppState> {
  state = {
    title: '',
    message: '',
  }

  onSuccess = (id: string) => {
    this.setState({
      title: 'Success',
      message: <>Registration was successful, your id: <br /> <b>{id}</b></>,
    })
  }

  onError = (message: string) => {
    this.setState({
      title: 'Error',
      message,
    })
  }

  clear () {
    this.setState({title: '', message: ''})
  }

  get message () {
    const {title, message} = this.state

    return message ? (
      <Modal title={title}>
        {message}
        <Button
          autoFocus
          stretch
          onClick={() => this.clear()}>
          Ok
        </Button>
      </Modal>
    ) : null
  }

  render () {
    return (
      <Modals>
        {this.message}
        <Modal title='Create a new account'>
          <RegistrationForm
            onSuccess={this.onSuccess}
            onError={this.onError}
          />
        </Modal>
      </Modals>
    )
  }
}

export default App
