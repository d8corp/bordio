import React, {Component, ReactNode} from 'react'

import './Modals.css'

export interface ModalsProps {
  children: ReactNode
}

export class Modals extends Component<ModalsProps> {
  render () {
    return (
      <div className='modals'>
        {this.props.children}
      </div>
    )
  }
}

export default Modals
