import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import 'src/index.css'
import emailImage from 'src/icons/email.svg'
import passwordImage from 'src/icons/password.svg'

import Modals from 'src/components/Modals'
import Modal from 'src/components/Modal'

import Form from '.'

const signInFields = [
  {
    name: 'email',
    type: 'email',
    before: <img className='registration-form__icon registration-form__icon_email' src={emailImage} alt='email' />,
    placeholder: 'Email',
    required: true,
    pattern: '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    patternError: 'Please enter a valid email address',
  },
  {
    name: 'password',
    type: 'password',
    before: <img className='registration-form__icon registration-form__icon_password' src={passwordImage} alt='password' />,
    placeholder: 'Password',
    required: true,
    pattern: '.{6,}',
    patternError: 'Password must contain at least 6 symbols',
  }
] as any

const formAction = async (data: any) => action('action')(data)

storiesOf('components/Form', module)
  .add('empty form', () => {
    return (
      <Form
        fields={[]}
        action={formAction}
      />
    )
  })
  .add('login form', () => {
    return (
      <Form
        actionName='Sign In'
        fields={signInFields}
        action={formAction}
      />
    )
  })
  .add('inside a modal', () => {
    return (
      <Modals>
        <Modal>
          <Form
            actionName='Sign In'
            fields={signInFields}
            action={formAction}
          />
        </Modal>
      </Modals>
    )
  })
  .add('with title', () => {
    return (
      <Modals>
        <Modal title='Login'>
          <Form
            actionName='Sign In'
            fields={signInFields}
            action={formAction}
          />
        </Modal>
      </Modals>
    )
  })
  .add('loading', () => {
    return (
      <Modals>
        <Modal title='Login'>
          <Form
            actionName='Sign In'
            fields={signInFields}
            action={() => new Promise(resolve => setTimeout(resolve, 1000))}
          />
        </Modal>
      </Modals>
    )
  })
  .add('poll', () => {
    return (
      <Modals>
        <Modal title='Do you like it?'>
          <Form
            fields={[
              {
                name: 'answer',
                autoFocus: true,
                stretch: false,
                type: 'radiobox',
                values: ['No, really bad', 'Yes, looks good'],
                required: true,
              }
            ]}
            action={formAction}
          />
        </Modal>
      </Modals>
    )
  })
