import React, {PureComponent, ReactNode} from 'react'

import './Button.css'

export interface IOnButtonClick {
  (): void
}

export interface IButtonProps {
  children?: ReactNode
  className?: string
  stretch?: boolean
  disabled?: boolean
  onClick?: IOnButtonClick
}

class Button extends PureComponent<IButtonProps> {
  get className () {
    const {stretch, disabled, className} = this.props

    return [
      className,
      'button',
      stretch && 'button_stretch',
      disabled && 'button_disabled',
    ].filter(e => e).join(' ')
  }

  onClick = () => {
    const {onClick} = this.props

    if (onClick) {
      onClick()
    }
  }

  render () {
    const {children} = this.props

    return (
      <button onClick={this.onClick} className={this.className}>
        {children}
      </button>
    )
  }
}

export default Button
