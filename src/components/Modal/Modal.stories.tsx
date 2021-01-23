import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import 'src/index.css'

import Modals from 'src/components/Modals'
import {Button} from 'src/components/Button'
import Modal from '.'

storiesOf('components/Modal', module)
  .add('with text', () => {
    return (
      <Modal>
        This is a modal!
      </Modal>
    )
  })
  .add('with Modal', () => {
    return (
      <Modals>
        <Modal title='Information'>
          This is a modal!
        </Modal>
      </Modals>
    )
  })
  .add('confirmation', () => {
    return (
      <Modals>
        <Modal>
          <p>
            Do you want to save the changes?
          </p>
          <Button invert onClick={action('cancel')}>Cancel</Button>
          <Button onClick={action('confirm')}>Yes, I do</Button>
        </Modal>
      </Modals>
    )
  })
  .add('confirmation with title', () => {
    return (
      <Modals>
        <Modal title='Confirmation'>
          <p>
            Do you want to save the changes?
          </p>
          <Button invert onClick={action('cancel')}>Cancel</Button>
          <Button onClick={action('confirm')}>Yes, I do</Button>
        </Modal>
      </Modals>
    )
  })
