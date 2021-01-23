import React from 'react'
import {storiesOf} from '@storybook/react'

import 'src/index.css'

import {Modals} from 'src/components/Modals'
import Loading from '.'

storiesOf('components/Loading', module)
  .add('empty', () => {
    return (
      <Loading />
    )
  })
  .add('invert', () => {
    return (
      <Modals>
        <Loading invert />
      </Modals>
    )
  })
  .add('autosize', () => {
    return (
      <>
        <div style={{fontSize: 10}}><Loading /></div>
        <div style={{fontSize: 20}}><Loading /></div>
        <div style={{fontSize: 30}}><Loading /></div>
        <div style={{fontSize: 40}}><Loading /></div>
        <div style={{fontSize: 50}}><Loading /></div>
      </>
    )
  })
