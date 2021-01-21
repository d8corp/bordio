import React, {BaseSyntheticEvent, PureComponent, ReactEventHandler, ReactNode} from 'react'

// local utils
import {IValidatorField} from 'src/utils/fieldValidator'
import classes from 'src/utils/classes'

// file imports
import selectorArrow from './selectorArrow.svg'
import checkboxArrow from './checkboxArrow.svg'

// style imports
import './Field.css'

// types
export type TInputEvent = BaseSyntheticEvent<any, any, HTMLInputElement>

// interfaces
export interface IOnFieldChange {
  (value: boolean, name: 'checkbox'): void
  (value: string, name: string): void
}
export interface IFieldProps extends IValidatorField {
  onChange?: IOnFieldChange
  before?: ReactNode
}

// classes
/**
 * @description Use Field component inside a form
 * */
export class Field extends PureComponent <IFieldProps> {
  static defaultProps = {
    type: 'text',
  }

  // methods
  onChange: ReactEventHandler = (e: TInputEvent) => {
    this.onSelect(e.target.value)
  }
  onSelect (newValue: string | boolean) {
    const {onChange, name, value} = this.props
    if (onChange && newValue !== value) {
      onChange(newValue as string, name)
    }
  }

  // elements
  get before (): ReactNode {
    return this.props.before ?? null
  }
  get error (): ReactNode {
    let {error} = this.props

    return error ? (
      <span className='field__error'>
        {error}
      </span>
    ) : null
  }

  // elements by type
  get select (): ReactNode {
    const {name, placeholder, values, override, value} = this.props

    return (
      <label className='field'>
        <select
          value={value as string}
          className='field__input field__input_select'
          onChange={this.onChange}
          name={name}>
          <option disabled>{placeholder}</option>
          {values?.map(val => (
            <option key={val} value={val}>{override ? override(val) : val}</option>
          )) || null}
        </select>
        <span className='field__focus' />
        <span className={classes('field__select', !value && 'field__select_placeholder')}>
          {(override ? override(value as string) : value) || placeholder}
        </span>
        <ul className='field__menu'>
          {values?.map(val => (
            <li className='field__menu-item' value={val} key={val} onMouseDown={() => this.onSelect(val)}>{override ? override(val) : val}</li>
          )) || <li className='field__menu-item_empty'>Empty</li>}
        </ul>
        <img className='field__select-arrow' src={selectorArrow} alt='arrow' />
        {this.error}
      </label>
    )
  }
  get radiobox (): ReactNode {
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
  get checkbox (): ReactNode {
    const {value = false, placeholder} = this.props

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
  get other (): ReactNode {
    const {placeholder, name, type = 'text', before = null, value = ''} = this.props

    return (
      <label className='field'>
        {before}
        <input
          onChange={this.onChange}
          value={value as string}
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
        return this.other
      }
    }
  }
}

export default Field
