import React from 'react'
import {storiesOf} from '@storybook/react'

import 'src/index.css'

import LoginForm from '.'

storiesOf('forms', module)
  .add('LoginForm', () => {
    return (
      <LoginForm />
    )
  })
