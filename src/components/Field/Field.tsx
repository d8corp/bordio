import React, {BaseSyntheticEvent, PureComponent, ReactEventHandler, ReactNode} from 'react'
import {IValidatorField} from 'src/utils/fieldValidator'
import classes from 'src/utils/classes'

import selectorArrow from './selectorArrow.svg'
import checkboxArrow from './checkboxArrow.svg'

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

  onSelect (value: string | boolean) {
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
        <span className={classes('field__select', !value && 'field__select_placeholder')}>
          {value || placeholder}
        </span>
        <ul className='field__menu'>
          {values?.map(val => (
            <li className='field__menu-item' value={val} key={val} onMouseDown={() => this.onSelect(val)}>{override ? override(val) : val}</li>
          )) || null}
        </ul>
        <img className='field__select-arrow' src={selectorArrow} alt='arrow' />
        {this.error}
      </label>
    )
  }

  get radiobox () {
    const {values, value, override} = this.props
    return (
      <div className='field__radiobox'>
        {values?.map(val => (
          <label className='field__radiobox-label' key={val}>
            <input
              className='field__radiobox-input'
              type='radio'
              checked={value === val}
              onChange={e => e.target.checked && this.onSelect(val)}
            />
            <span className='field__radiobox-mark' />
            <span className='field__radiobox-placeholder'>
              {override ? override(val) : val}
            </span>
          </label>
        )) || null}
        {this.error}
      </div>
    )
  }

  get checkbox () {
    const {value, placeholder} = this.props
    return (
      <div className='field__checkbox'>
        <label className='field__checkbox-label'>
          <input
            className='field__checkbox-input'
            type='checkbox'
            checked={value as boolean}
            onChange={e => this.onSelect(e.target.checked)}
          />
          <span className='field__checkbox-mark'>
          <img className='field__checkbox-mark-icon' src={checkboxArrow} alt='arrow'/>
        </span>
          <span className='field__checkbox-placeholder'>{placeholder}</span>
          {this.error}
        </label>
      </div>
    )
  }

  get input () {
    const {placeholder, name, type = 'text'} = this.props

    return type === 'select' ? this.select : (
      <label className='field'>
        <input
          onInput={this.onInput}
          placeholder={placeholder as string}
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

    switch (type) {
      case 'select': {
        return this.select
      }
      case 'radiobox': {
        return this.radiobox
      }
      case 'checkbox': {
        return this.checkbox
      }
      default: {
        return this.input
      }
    }
  }
}

export default Field
