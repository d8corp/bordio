import React from 'react'
import Link from 'src/components/Link'
import {FormField} from 'src/components/Form'

import passwordImage from 'src/icons/password.svg'
import emailImage from 'src/icons/email.svg'

import './RegistrationFormFields.css'

export const fields: FormField[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name',
    required: true,
    pattern: '^[a-zA-Z]+$',
  },
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
  },
  {
    name: 'country',
    type: 'select',
    placeholder: 'Select country',
    values: ['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya'],
    required: true,
    requiredError: 'You must select your country',
  },
  {
    name: 'gender',
    type: 'radiobox',
    values: ['MALE', 'FEMALE'],
    required: true,
    override: (val: string) => val === 'MALE' ? 'Male' : 'Female'
  },
  {
    name: 'policies',
    type: 'checkbox',
    placeholder: <>Accept <Link href='#'>terms</Link> and <Link href='#'>conditions</Link></>,
    required: true,
    requiredError: 'You must accept the policies',
  }
]

export default fields
