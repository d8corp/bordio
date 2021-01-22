import React, {
  PureComponent,
  ReactNode,
  createRef,
  RefObject,
  ChangeEvent, KeyboardEvent
} from 'react'

// local utils
import {IValidatorField} from 'src/utils/fieldValidator'
import classes from 'src/utils/classes'

// file imports
import selectorArrow from './selectorArrow.svg'
import checkboxArrow from './checkboxArrow.svg'

// style imports
import './Field.css'

// types
export type TOnChangeEvent = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>

// interfaces
export interface IOnChangeFieldProps {
  (value: boolean, name: 'checkbox'): void
  (value: string, name: string): void
}
export interface IFieldProps extends IValidatorField {
  onChange?: IOnChangeFieldProps
  before?: ReactNode
}

// classes
export class Field extends PureComponent <IFieldProps> {
  static defaultProps = {
    type: 'text',
  }

  // methods
  onChange (e: TOnChangeEvent) {
    this.onSelect(e.target.value)
  }
  onSelect (newValue?: string | boolean) {
    const {onChange, name, value} = this.props

    if (onChange && newValue !== value) {
      onChange(newValue as string, name)
    }
  }
  onSelectKeyDown (e: KeyboardEvent<HTMLSelectElement>, ul: RefObject<HTMLUListElement>) {
    const isUp = e.key === 'ArrowUp'
    const isDown = e.key === 'ArrowDown'

    if (isDown || isUp) {
      const {value, values} = this.props

      if (values) {
        const id = values.indexOf(value as string)
        const max = values.length - 1
        const newId = isDown ? (
          id >= max ? 0 : id + 1
        ) : (
          id <= 0 ? max : id - 1
        )

        this.onSelect(values[newId])

        ul.current?.children[newId].scrollIntoView({behavior: 'smooth', block: "center"})
      }
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
    const ul = createRef<HTMLUListElement>()

    return (
      <label className='field'>
        <select
          onKeyDown={e => this.onSelectKeyDown(e, ul)}
          value={value as string}
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
          {(override ? override(value as string) : value) || placeholder}
        </span>
        <ul ref={ul} className='field__menu'>
          {values?.map(val => (
            <li
              className={classes('field__menu-item', val === value && 'field__menu-item_select')}
              value={val}
              key={val}
              onMouseDown={() => this.onSelect(val)}>
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
          onChange={e => this.onChange(e)}
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
