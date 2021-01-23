import React, {Component, ReactNode} from 'react'

import './Modal.css'

export interface ModalsProps {
  children: ReactNode
}

export class Modal extends Component<ModalsProps> {
  render () {
    return (
      <div className='modal'>
        {this.props.children}
      </div>
    )
  }
}

export default Modal
