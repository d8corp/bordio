import React, {Component, ReactNode} from 'react'

// import components
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

  // events
  onSuccess = (id: string): void => {
    this.setState({
      title: 'Success',
      message: <>Registration was successful, your id: <br /> <b>{id}</b></>,
    })
  }
  onError = (message: string): void => {
    this.setState({
      title: 'Error',
      message,
    })
  }

  // methods
  clear (): void {
    this.setState({title: '', message: ''})
  }

  // elements
  get message (): ReactNode {
    const {title, message} = this.state

    return message ? (
      <Modal title={title}>
        <p>
          {message}
        </p>
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
            autoFocus
            onSuccess={this.onSuccess}
            onError={this.onError}
          />
        </Modal>
      </Modals>
    )
  }
}

export default App
