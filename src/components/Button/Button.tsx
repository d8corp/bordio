import React, {PureComponent, ReactNode} from 'react'

// local utils
import classes from 'src/utils/classes'
import Loading from 'src/components/Loading'

// css imports
import './Button.css'

// interfaces
export interface IOnButtonClick {
  (): void
}

export interface ButtonProps {
  children?: ReactNode
  className?: string
  stretch?: boolean
  disabled?: boolean
  loading?: boolean
  onClick?: IOnButtonClick
  invert?: boolean
}

// classes
export class Button extends PureComponent<ButtonProps> {
  get className () {
    const {stretch, disabled, className, invert, loading} = this.props

    return classes(
      className,
      'button',
      loading && 'button_loading',
      stretch && 'button_stretch',
      disabled && 'button_disabled',
      invert && 'button_invert',
    )
  }

  onClick = () => {
    const {onClick} = this.props

    if (onClick) {
      onClick()
    }
  }

  render () {
    const {children, loading, invert} = this.props

    return (
      <button disabled={loading} onClick={this.onClick} className={this.className}>
        {loading ? <Loading className='button__loading' invert={!invert} /> : null}
        <span className='button__content'>
          {children}
        </span>
      </button>
    )
  }
}

export default Button
