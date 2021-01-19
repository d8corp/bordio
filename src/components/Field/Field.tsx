import React, {BaseSyntheticEvent, Component, ReactNode} from 'react'

import './Field.css'

export type TInputEvent = BaseSyntheticEvent<any, any, HTMLInputElement>

interface IOnFieldChange {
  (value: string): void
}
interface IErrorHandler {
  (value: string | undefined): string
}

interface IFieldProps {
  placeholder?: string
  name?: string
  type?: 'text' | 'password'
  value?: string
  onChange?: IOnFieldChange
  error?: IErrorHandler | string
}

class Field extends Component <IFieldProps> {
  onInput = (e: TInputEvent) => {
    const {onChange} = this.props

    if (onChange) {
      onChange(e.target.value)
    }
  }

  get error (): ReactNode {
    let {error} = this.props

    if (!error) {
      return null
    }

    if (typeof error === 'function') {
      error = error(this.props.value)
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
