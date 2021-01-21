import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import 'src/index.css'

import Button from '.'

storiesOf('Button', module)
  .add('with text', () => (
    <Button onClick={action('clicked')}>Hello, world!</Button>
  ))
  .add('disabled', () => (
    <Button disabled onClick={action('clicked')}>Hello, world!</Button>
  ))
  .add('loading', () => (
    <Button loading onClick={action('clicked')}>Hello, world!</Button>
  ))
  .add('disabled and loading', () => (
    <Button disabled loading onClick={action('clicked')}>Hello, world!</Button>
  ))
  .add('stretch', () => (
    <Button stretch onClick={action('clicked')}>Hello, world!</Button>
  ))
  .add('stretch and loading', () => (
    <Button stretch loading onClick={action('clicked')}>Hello, world!</Button>
  ))
