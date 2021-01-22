import React, {Component, ReactNode} from 'react'
import classes from 'src/utils/classes'

import './Link.css'

export interface LinkProps {
  className?: string
  href?: string
  children: ReactNode
  onClick?: () => void
}

class Link extends Component <LinkProps> {
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
