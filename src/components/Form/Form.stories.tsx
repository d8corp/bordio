import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import 'src/index.css'
import emailImage from 'src/icons/email.svg'
import passwordImage from 'src/icons/password.svg'

import Form from '.'

storiesOf('components/Form', module)
  .add('empty form', () => {
    return (
      <Form fields={[]} />
    )
  })
  .add('title', () => {
    return (
      <Form fields={[]} />
    )
  })
  .add('login form', () => {
    return (
      <Form
        actionName='Sign In'
        fields={[
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
        ]}
        onChange={action('onChange')}
      />
    )
  })
  .add('a login form', () => {
    return (
      <Form
        actionName='Sign In'
        fields={[
          {
            name: 'email',
            type: 'email',
            before: <img className='registration-form__icon registration-form__icon_email' src={emailImage} alt='email' />,
            placeholder: 'Email',
            pattern: '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
            patternError: 'Please enter a valid email address',
          },
          {
            name: 'password',
            type: 'password',
            before: <img className='registration-form__icon registration-form__icon_password' src={passwordImage} alt='password' />,
            placeholder: 'Password',
            pattern: '.{6,}',
            patternError: 'Password must contain at least 6 symbols',
          }
        ]}
        onChange={action('onChange')}
      />
    )
  })
