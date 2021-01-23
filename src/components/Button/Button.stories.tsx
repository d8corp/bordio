import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import 'src/index.css'

import Modals from 'src/components/Modals'
import Modal from 'src/components/Modal'
import Button from '.'

storiesOf('components/Button', module)
  .add('with text', () => {
    return (
      <Button onClick={action('onClick')}>Hello, world!</Button>
    )
  })
  .add('invert', () => {
    return (
      <Button invert onClick={action('onClick')}>Hello, world!</Button>
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
  .add('invert and loading', () => {
    return (
      <Button invert loading onClick={action('onClick')}>Hello, world!</Button>
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
  .add('in a modal', () => {
    return (
      <Modals>
        <Modal title='Hello, World!'>
          <Button stretch onClick={action('onClick')}>Click me!</Button>
        </Modal>
      </Modals>
    )
  })
