import React from 'react'
import {storiesOf} from '@storybook/react'

import 'src/index.css'

import App from '.'

storiesOf('app', module)
  .add('App', () => {
    return (
      <App />
    )
  })
