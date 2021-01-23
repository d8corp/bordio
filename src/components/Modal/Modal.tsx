import React, {Component, ReactNode} from 'react'

import './Modal.css'

export interface ModalsProps {
  children?: ReactNode
  title?: ReactNode
}

export class Modal extends Component<ModalsProps> {
  render () {
    const {title, children} = this.props
    return (
      <div className='modal'>
        {title ? (
          <h1 className='modal__title'>{title}</h1>
        ) : null}
        {children}
      </div>
    )
  }
}

export default Modal
