import React, {BaseSyntheticEvent, PureComponent, ReactEventHandler, ReactNode} from 'react'
import {IValidatorField} from 'src/utils/fieldValidator'

import sliderArrow from './sliderArrow.svg'

import './Field.css'

export type TInputEvent = BaseSyntheticEvent<any, any, HTMLInputElement>

export interface IOnFieldChange {
  (value: string | boolean, name: string): void
}

interface IFieldProps extends IValidatorField {
  onChange?: IOnFieldChange
}

class Field extends PureComponent <IFieldProps> {
  static defaultProps = {
    type: 'text',
  }

  onInput: ReactEventHandler = (e: TInputEvent) => {
    const {onChange, name} = this.props

    if (onChange) {
      onChange(e.target.value, name)
    }
  }

  onSelect (value: string) {
    const {onChange, name} = this.props
    if (onChange) {
      onChange(value, name)
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

  get select () {
    const {name, placeholder, values, override, value} = this.props
    return (
      <label className='field'>
        <select
          value={value as string}
          className='field__input field__input_select'
          onChange={this.onInput}
          name={name}>
          <option disabled>{placeholder}</option>
          {values?.map(val => (
            <option key={val} value={val}>{override ? override(val) : val}</option>
          )) || null}
        </select>
        <span className='field__focus' />
        <span className={['field__select', !value && 'field__select_placeholder'].filter(e => e).join(' ')}>
          {value || placeholder}
        </span>
        <ul className='field__menu'>
          {values?.map(val => (
            <li className='field__menu-item' value={val} key={val} onMouseDown={() => this.onSelect(val)}>{override ? override(val) : val}</li>
          )) || null}
        </ul>
        <img className='field__select-arrow' src={sliderArrow} alt='arrow' />
        {this.error}
      </label>
    )
  }

  get input () {
    const {placeholder, name, type = 'text'} = this.props

    return type === 'select' ? this.select : (
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

  render () {
    const {type} = this.props

    return type === 'select' ? this.select : this.input
  }
}

export default Field
