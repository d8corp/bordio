import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import 'src/index.css'

import Link from '.'

storiesOf('components/Link', module)
  .add('empty', () => {
    return (
      <Link>Hello, world!</Link>
    )
  })
  .add('onClick', () => {
    return (
      <Link onClick={action('onClick')}>Hello, world!</Link>
    )
  })
  .add('href', () => {
    return (
      <Link href='#'>Hello, world!</Link>
    )
  })
