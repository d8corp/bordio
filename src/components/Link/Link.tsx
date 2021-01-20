import React, {Component, ReactNode} from 'react'
import classes from 'src/utils/classes'

import './Link.css'

export interface ILinkProps {
  className?: string
  href?: string
  children: ReactNode
}

class Link extends Component <ILinkProps> {
  render () {
    const {className, children, ...props} = this.props
    return (
      <a {...props} className={classes('link', className)}>
        {children}
      </a>
    )
  }
}

export default Link
