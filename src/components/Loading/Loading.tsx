import React from 'react'

// local utils
import classes from 'src/utils/classes'

// css imports
import './Loading.css'

// components
export function Loading ({className = '', invert = false}) {
  return (
    <svg className={classes('loading', invert && 'loading_invert', className)} viewBox='0 0 50 50'>
      <circle className='loading__path' cx='25' cy='25' r='20' fill='none' strokeWidth='5' />
    </svg>
  )
}

export default Loading
