import React, {Component, ReactNode} from 'react'

// local utils
import classes from 'src/utils/classes'

// css imports
import './Link.css'

// interfaces
export interface LinkProps {
  className?: string
  href?: string
  children: ReactNode
  onClick?: () => void
}

// components
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
