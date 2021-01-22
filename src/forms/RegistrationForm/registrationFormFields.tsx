import React from 'react'
import Link from 'src/components/Link'
import {FieldProps} from 'src/components/Field'

export const fields: FieldProps[] = [
  {
    name: 'name',
    type: 'text',
    placeholder: 'Enter your name',
    value: undefined,
    error: '',
    required: true,
    pattern: '^[a-zA-Z]+$',
  },
  {
    name: 'email',
    type: 'email',
    placeholder: 'Email',
    value: undefined,
    error: '',
    required: true,
    pattern: '^(([^<>()[\\]\\\\.,;:\\s@"]+(\\.[^<>()[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
    patternError: 'Please enter a valid email address',
  },
  {
    name: 'password',
    type: 'password',
    placeholder: 'Password',
    value: undefined,
    error: '',
    required: true,
    pattern: '.{6,}',
    patternError: 'Password must contain at least 6 symbols',
  },
  {
    name: 'country',
    type: 'select',
    placeholder: 'Select country',
    value: undefined,
    values: ['Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya'],
    error: '',
    required: true,
    requiredError: 'You must select your country',
  },
  {
    name: 'gender',
    type: 'radiobox',
    value: undefined,
    values: ['MALE', 'FEMALE'],
    error: '',
    required: true,
    override: (val: string) => val === 'MALE' ? 'Male' : 'Female'
  },
  {
    name: 'policies',
    type: 'checkbox',
    placeholder: <>Accept <Link href='#'>terms</Link> and <Link href='#'>conditions</Link></>,
    value: false,
    error: '',
    required: true,
    requiredError: 'You must accept the policies',
  }
]

export default fields
