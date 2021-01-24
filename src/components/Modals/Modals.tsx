import React, {Component, ReactNode} from 'react'

// css imports
import './Modals.css'

// interfaces
export interface ModalsProps {
  children: ReactNode
}

// components
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
