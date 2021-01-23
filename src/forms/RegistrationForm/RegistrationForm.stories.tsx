import React from 'react'
import {storiesOf} from '@storybook/react'

import 'src/index.css'

import Modals from 'src/components/Modals'
import Modal from 'src/components/Modal'

import RegistrationForm from '.'

storiesOf('forms/RegistrationForm', module)
  .add('simple', () => {
    return (
      <RegistrationForm />
    )
  })
  .add('in a modal', () => {
    return (
      <Modals>
        <Modal>
          <RegistrationForm />
        </Modal>
      </Modals>
    )
  })
  .add('with title', () => {
    return (
      <Modals>
        <Modal title='Create a new account'>
          <RegistrationForm />
        </Modal>
      </Modals>
    )
  })
