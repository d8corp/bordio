import React from 'react'
import {storiesOf} from '@storybook/react'

import 'src/index.css'

import RegistrationForm from '.'

storiesOf('forms', module)
  .add('RegistrationForm', () => {
    return (
      <RegistrationForm />
    )
  })
