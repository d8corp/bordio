import React, {BaseSyntheticEvent, Component, ReactNode} from 'react'

import './Field.css'

export type TInputEvent = BaseSyntheticEvent<any, any, HTMLInputElement>

export interface IOnFieldChange {
  (value: string | boolean, name: string): void
}

interface IFieldProps {
  placeholder?: string
  name: string
  type?: 'text' | 'password' | string
  value?: string | boolean
  onChange?: IOnFieldChange
  error?: string
}

class Field extends Component <IFieldProps> {
  onInput = (e: TInputEvent) => {
    const {onChange, name} = this.props

    if (onChange) {
      onChange(e.target.value, name)
    }
  }

  get error (): ReactNode {
    let {error} = this.props

    if (!error) {
      return null
    }

    return (
      <span className='field__error'>
        {error}
      </span>
    )
  }

  render () {
    const {placeholder, name, type = 'text'} = this.props

    return (
      <label className='field'>
        <input
          onInput={this.onInput}
          placeholder={placeholder}
          name={name}
          className='field__input'
          type={type}
        />
        <span className='field__focus' />
        {this.error}
      </label>
    )
  }
}

export default Field
