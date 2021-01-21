import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import 'src/index.css'
import './Field.stories.css'

import Field from '.'

storiesOf('components/Field/text', module)
  .add('empty', () => {
    return (
      <Field name='name' onChange={action('onChange')}/>
    )
  })
  .add('placeholder', () => {
    return (
      <Field name='name' placeholder='Enter your name' onChange={action('onChange')}/>
    )
  })
  .add('value', () => {
    return (
      <Field name='name' value='value' onChange={action('onChange')}/>
    )
  })
  .add('error', () => {
    return (
      <Field
        name='name'
        placeholder='Enter your name'
        error='Name is required'
        onChange={action('onChange')}
      />
    )
  })

storiesOf('components/Field/email', module)
  .add('empty', () => {
    return (
      <Field name='email' type='email' onChange={action('onChange')}/>
    )
  })
  .add('placeholder', () => {
    return (
      <Field name='email' type='email' placeholder='Email' onChange={action('onChange')}/>
    )
  })
  .add('value', () => {
    return (
      <Field name='email' type='email' value='d8corp@mail.ru' onChange={action('onChange')}/>
    )
  })
  .add('error', () => {
    return (
      <Field
        name='email'
        type='email'
        value='123'
        error='Invalid email'
        onChange={action('onChange')}
      />
    )
  })

storiesOf('components/Field/password', module)
  .add('empty', () => {
    return (
      <Field name='password' type='password' onChange={action('onChange')}/>
    )
  })
  .add('placeholder', () => {
    return (
      <Field name='password' type='password' placeholder='Password' onChange={action('onChange')}/>
    )
  })
  .add('value', () => {
    return (
      <Field name='password' type='password' value='password' onChange={action('onChange')}/>
    )
  })
  .add('error', () => {
    return (
      <Field
        name='password'
        type='password'
        error='Password should be at last 6 chars'
        value='12345'
        onChange={action('onChange')}
      />
    )
  })

storiesOf('components/Field/select', module)
  .add('empty', () => {
    return (
      <Field name='select' type='select' onChange={action('onChange')}/>
    )
  })
  .add('placeholder', () => {
    return (
      <Field
        name='select'
        type='select'
        placeholder='Select country'
        onChange={action('onChange')}
      />
    )
  })
  .add('value', () => {
    return (
      <Field name='select' type='select' value='Latvia' onChange={action('onChange')}/>
    )
  })
  .add('values', () => {
    return (
      <Field
        name='select'
        type='select'
        placeholder='Select country'
        values={['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya']}
        onChange={action('onChange')}
      />
    )
  })
  .add('selected value', () => {
    return (
      <Field
        name='select'
        type='select'
        placeholder='Select country'
        values={['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya']}
        value='Latvia'
        onChange={action('onChange')}
      />
    )
  })
  .add('error', () => {
    return (
      <Field
        name='select'
        type='select'
        error='Test error'
        onChange={action('onChange')}
      />
    )
  })
  .add('override', () => {
    return (
      <Field
        name='select'
        type='select'
        values={['test1', 'test2']}
        override={e => e.toUpperCase()}
        value='test1'
        onChange={action('onChange')}
      />
    )
  })
  .add('long select', () => {
    return (
      <Field
        name='select'
        type='select'
        placeholder='Select country'
        values={['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya']}
        onChange={action('onChange')}
      />
    )
  })

storiesOf('components/Field/radiobox', module)
  .add('values', () => {
    return (
      <Field
        name='radiobox'
        type='radiobox'
        values={['test1', 'test2']}
        onChange={action('onChange')}
      />
    )
  })
  .add('selected', () => {
    return (
      <Field
        name='radiobox'
        type='radiobox'
        value='test1'
        values={['test1', 'test2']}
        onChange={action('onChange')}
      />
    )
  })
  .add('error', () => {
    return (
      <Field
        name='radiobox'
        type='radiobox'
        value='test1'
        values={['test1', 'test2']}
        error='error'
        onChange={action('onChange')}
      />
    )
  })
  .add('override', () => {
    return (
      <Field
        name='radiobox'
        type='radiobox'
        value='test1'
        values={['test1', 'test2']}
        override={e => e.toUpperCase()}
        onChange={action('onChange')}
      />
    )
  })

storiesOf('components/Field/checkbox', module)
  .add('empty', () => {
    return (
      <Field
        name='checkbox'
        type='checkbox'
        onChange={action('onChange')}
      />
    )
  })
  .add('placeholder', () => {
    return (
      <Field
        name='checkbox'
        type='checkbox'
        placeholder='Accept terms and conditions'
        onChange={action('onChange')}
      />
    )
  })
  .add('checked', () => {
    return (
      <Field
        name='checkbox'
        type='checkbox'
        value
        placeholder='Accept terms and conditions'
        onChange={action('onChange')}
      />
    )
  })
  .add('error', () => {
    return (
      <Field
        name='checkbox'
        type='checkbox'
        error='You must accept the policies'
        placeholder='Accept terms and conditions'
        onChange={action('onChange')}
      />
    )
  })
