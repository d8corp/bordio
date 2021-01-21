import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import 'src/index.css'

import Button from '.'

storiesOf('components/Button', module)
  .add('with text', () => {
    return (
      <Button onClick={action('onClick')}>Hello, world!</Button>
    )
  })
  .add('disabled', () => {
    return (
      <Button disabled onClick={action('onClick')}>Hello, world!</Button>
    )
  })
  .add('loading', () => {
    return (
      <Button loading onClick={action('onClick')}>Hello, world!</Button>
    )
  })
  .add('disabled and loading', () => {
    return (
      <Button disabled loading onClick={action('onClick')}>Hello, world!</Button>
    )
  })
  .add('stretch', () => {
    return (
      <Button stretch onClick={action('onClick')}>Hello, world!</Button>
    )
  })
  .add('stretch and loading', () => {
    return (
      <Button stretch loading onClick={action('onClick')}>Hello, world!</Button>
    )
  })
