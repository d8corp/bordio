import React, {
  PureComponent,
  ReactNode,
  createRef,
  RefObject,
  ChangeEvent, KeyboardEvent
} from 'react'
// local utils
import {IValidatorOptions} from 'src/utils/fieldValidator'
import classes from 'src/utils/classes'

// file imports
import selectorArrow from './selectorArrow.svg'
import checkboxArrow from './checkboxArrow.svg'

// style imports
import './Field.css'

// types
export type TFieldOnChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>
export type TFieldStrTypes = 'select' | 'text' | 'password' | 'email' | 'radiobox'
export type TFieldBoolTypes = 'checkbox'
export type TFieldType = TFieldStrTypes | TFieldBoolTypes
export type TFieldValue <T> = T extends TFieldStrTypes ? string : boolean

// interfaces
export interface FieldProps <T extends TFieldType, R> extends IValidatorOptions<TFieldValue<T>, R>{
  value?: TFieldValue<T>
  type?: T
  error?: string
  override?: (value: TFieldValue<T>) => ReactNode
  before?: ReactNode
  stretch?: boolean
  autoFocus?: boolean
  placeholder?: T extends TFieldStrTypes ? string : ReactNode
  onChange?: (value: TFieldValue<T>, name: string) => void
}

// classes
export class Field <T extends TFieldType, R> extends PureComponent <FieldProps<T, R>> {
  static defaultProps = {
    type: 'text',
  }

  // methods
  onChange (event: TFieldOnChangeEvent) {
    this.setValue(event.target.value)
  }
  onSelectKeyDown (event: KeyboardEvent<HTMLSelectElement>, ul: RefObject<HTMLUListElement>) {
    const isUp = event.key === 'ArrowUp'
    const isDown = event.key === 'ArrowDown'

    if (isDown || isUp) {
      event.preventDefault()

      const {value, values} = this.props

      if (values) {
        const id = values.indexOf(value as string)
        const max = values.length - 1
        const newId = isDown ? (
          id >= max ? 0 : id + 1
        ) : (
          id <= 0 ? max : id - 1
        )

        this.setValue(values[newId])

        ul.current?.children[newId].scrollIntoView({behavior: 'smooth', block: "center"})
      }
    }
  }
  setValue (newValue?: any) {
    const {onChange, name, value} = this.props

    if (onChange && newValue !== value) {
      onChange(newValue, name)
    }
  }

  // elements
  get error (): ReactNode {
    let {error} = this.props

    return error ? (
      <span className='field__error'>
        {error}
      </span>
    ) : null
  }

  get className () {
    const {stretch} = this.props
    return classes('field', stretch && 'field_stretch')
  }

  // elements by type
  get select (): ReactNode {
    const {name, placeholder, values, override, value, autoFocus} = this.props as FieldProps<'select', R>
    const ul = createRef<HTMLUListElement>()

    return (
      <label className={this.className}>
        <select
          autoFocus={autoFocus}
          onKeyDown={e => this.onSelectKeyDown(e, ul)}
          value={value}
          className='field__input field__input_select'
          onChange={e => this.onChange(e)}
          name={name}>
          <option disabled>{placeholder}</option>
          {values?.map(val => (
            <option key={val} value={val}>{override ? override(val) : val}</option>
          )) || null}
        </select>
        <span className='field__focus' />
        <span className={classes('field__select', !value && 'field__select_placeholder')}>
          {(override && value ? override(value) : value) || placeholder}
        </span>
        <ul ref={ul} className='field__menu'>
          {values?.map(val => (
            <li
              className={classes('field__menu-item', val === value && 'field__menu-item_selected')}
              value={val}
              key={val}
              onMouseDown={() => this.setValue(val)}>
              {override ? override(val) : val}
            </li>
          )) || <li className='field__menu-item_empty'>Empty</li>}
        </ul>
        <img className='field__select-arrow' src={selectorArrow} alt='arrow' />
        {this.error}
      </label>
    )
  }
  get radiobox (): ReactNode {
    const {values, value, override, autoFocus} = this.props

    return (
      <div className='field__radiobox'>
        {values?.map(val => (
          <label className='field__radiobox-label' key={val}>
            <input
              autoFocus={autoFocus}
              className='field__radiobox-input'
              type='radio'
              checked={value === val}
              onChange={e => e.target.checked && this.setValue(val)}
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
    const {value = false, placeholder, autoFocus} = this.props as FieldProps<'checkbox', R>

    return (
      <div className='field__checkbox'>
        <label className='field__checkbox-label'>
          <input
            autoFocus={autoFocus}
            className='field__checkbox-input'
            type='checkbox'
            checked={value}
            onChange={e => this.setValue(e.target.checked)}
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
    const {autoFocus, placeholder, name, type, before, value = ''} = this.props as FieldProps<TFieldStrTypes, R>

    return (
      <label className={this.className}>
        {before}
        <input
          autoFocus={autoFocus}
          onChange={e => this.onChange(e)}
          value={value}
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
