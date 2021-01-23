import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import 'src/index.css'

import Modal from 'src/components/Modal'
import {Button} from 'src/components/Button'
import Modals from '.'

storiesOf('components/Modals', module)
  .add('with text', () => {
    return (
      <Modals>
        This is just the text!
      </Modals>
    )
  })
  .add('with Button', () => {
    return (
      <Modals>
        <Button onClick={action('onClick')}>Click me!</Button>
      </Modals>
    )
  })
  .add('with Modal', () => {
    return (
      <Modals>
        <Modal title='Information'>Some information</Modal>
      </Modals>
    )
  })
