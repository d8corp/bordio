import React from 'react'
import classes from 'src/utils/classes'
import './Loading.css'

export function Loading ({className = '', invert = false}) {
  return (
    <svg className={classes('loading', invert && 'loading_invert', className)} viewBox='0 0 50 50'>
      <circle className='loading__path' cx='25' cy='25' r='20' fill='none' strokeWidth='5' />
    </svg>
  )
}

export default Loading
