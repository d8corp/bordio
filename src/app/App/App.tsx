import React from 'react'

// components
import Modals from 'src/components/Modals'
import Modal from 'src/components/Modal'
import RegistrationForm from 'src/forms/RegistrationForm'

/**
 * @description Main application component
 * */
export function App () {
  return (
    <Modals>
      <Modal>
        <RegistrationForm />
      </Modal>
    </Modals>
  )
}

export default App
