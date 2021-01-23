import React from 'react'
import {storiesOf} from '@storybook/react'
import {action} from '@storybook/addon-actions'

import {Modals} from 'src/components/Modals'
import {Modal} from 'src/components/Modal'

import 'src/index.css'
import './Field.stories.css'
import emailImage from 'src/icons/email.svg'
import passwordImage from 'src/icons/password.svg'

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
  .add('stretch', () => {
    return (
      <Field
        name='name'
        stretch
        placeholder='Enter your name'
        onChange={action('onChange')}
      />
    )
  })
  .add('in a modal', () => {
    return (
      <Modals>
        <Modal>
          <Field
            name='name'
            stretch
            placeholder='Enter your name'
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
    )
  })
  .add('autoFocus', () => {
    return (
      <Modals>
        <Modal>
          <Field
            name='name'
            stretch
            autoFocus
            placeholder='Enter your name'
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
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
  .add('before', () => {
    return (
      <Field
        name='email'
        placeholder='Email'
        before={<img className='registration-form__icon registration-form__icon_email' src={emailImage} alt='email' />}
        onChange={action('onChange')}
      />
    )
  })
  .add('stretch', () => {
    return (
      <Field
        name='email'
        placeholder='Email'
        before={<img className='registration-form__icon registration-form__icon_email' src={emailImage} alt='email' />}
        stretch
        onChange={action('onChange')}
      />
    )
  })
  .add('in a modal', () => {
    return (
      <Modals>
        <Modal>
          <Field
            name='email'
            placeholder='Email'
            before={<img className='registration-form__icon registration-form__icon_email' src={emailImage} alt='email' />}
            stretch
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
    )
  })
  .add('autoFocus', () => {
    return (
      <Modals>
        <Modal>
          <Field
            name='email'
            placeholder='Email'
            autoFocus
            before={<img className='registration-form__icon registration-form__icon_email' src={emailImage} alt='email' />}
            stretch
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
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
  .add('before', () => {
    return (
      <Field
        name='password'
        type='password'
        before={<img className='registration-form__icon registration-form__icon_password' src={passwordImage} alt='password' />}
        onChange={action('onChange')}
      />
    )
  })
  .add('stretch', () => {
    return (
      <Field
        name='password'
        type='password'
        stretch
        before={<img className='registration-form__icon registration-form__icon_password' src={passwordImage} alt='password' />}
        onChange={action('onChange')}
      />
    )
  })
  .add('in a modal', () => {
    return (
      <Modals>
        <Modal>
          <Field
            name='password'
            type='password'
            stretch
            before={<img className='registration-form__icon registration-form__icon_password' src={passwordImage} alt='password' />}
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
    )
  })
  .add('autoFocus', () => {
    return (
      <Modals>
        <Modal>
          <Field
            name='password'
            type='password'
            stretch
            autoFocus
            before={<img className='registration-form__icon registration-form__icon_password' src={passwordImage} alt='password' />}
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
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
        error='You must select your country'
        placeholder='Select country'
        values={['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya']}
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
  .add('stretch', () => {
    return (
      <Field
        stretch
        name='select'
        type='select'
        placeholder='Select country'
        values={['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya']}
        onChange={action('onChange')}
      />
    )
  })
  .add('in a modal', () => {
    return (
      <Modals>
        <Modal>
          <Field
            stretch
            name='select'
            type='select'
            placeholder='Select country'
            values={['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya']}
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
    )
  })
  .add('autoFocus', () => {
    return (
      <Modals>
        <Modal>
          <Field
            stretch
            autoFocus
            name='select'
            type='select'
            placeholder='Select country'
            values={['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya']}
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
    )
  })

storiesOf('components/Field/radiobox', module)
  .add('values', () => {
    return (
      <Field
        name='gender'
        type='radiobox'
        values={['Male', 'Female']}
        onChange={action('onChange')}
      />
    )
  })
  .add('error', () => {
    return (
      <Field
        name='gender'
        type='radiobox'
        values={['Male', 'Female']}
        onChange={action('onChange')}
        error='You must select the gender'
      />
    )
  })
  .add('selected', () => {
    return (
      <Field
        name='gender'
        type='radiobox'
        value='Male'
        values={['Male', 'Female']}
        onChange={action('onChange')}
      />
    )
  })
  .add('override', () => {
    return (
      <Field
        name='gender'
        type='radiobox'
        value='MALE'
        values={['MALE', 'FEMALE']}
        override={val => val === 'MALE' ? 'Male' : 'Female'}
        onChange={action('onChange')}
      />
    )
  })
  .add('in a modal', () => {
    return (
      <Modals>
        <Modal>
          <Field
            name='gender'
            type='radiobox'
            value='MALE'
            values={['MALE', 'FEMALE']}
            override={val => val === 'MALE' ? 'Male' : 'Female'}
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
    )
  })
  .add('autoFocus', () => {
    return (
      <Modals>
        <Modal>
          <Field
            name='gender'
            type='radiobox'
            value='MALE'
            values={['MALE', 'FEMALE']}
            override={val => val === 'MALE' ? 'Male' : 'Female'}
            autoFocus
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
    )
  })
  .add('several boxes', () => {
    return (
      <Modals>
        <Modal>
          <Field
            name='gender'
            type='radiobox'
            value='MALE'
            values={['MALE', 'FEMALE']}
            override={val => val === 'MALE' ? 'Male' : 'Female'}
            onChange={action('onChange')}
          />
          <Field
            name='size'
            type='radiobox'
            values={['M', 'L', 'XL']}
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
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
  .add('in a modal', () => {
    return (
      <Modals>
        <Modal>
          <Field
            name='checkbox'
            type='checkbox'
            error='You must accept the policies'
            placeholder='Accept terms and conditions'
            onChange={action('onChange')}
          />
        </Modal>
      </Modals>
    )
  })
