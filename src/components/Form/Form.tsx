import React, {BaseSyntheticEvent, PureComponent, ReactNode} from 'react'

export type TSubmitEvent = BaseSyntheticEvent<any, any, HTMLFormElement>

export type TFormData = Record<string, string>

export interface IFormProps {
  children: ReactNode
  onSubmit: (data: TFormData) => void
  className?: string
}

class Form extends PureComponent<IFormProps> {
  onSubmit = (e: TSubmitEvent) => {
    e.preventDefault()

    const formData = new FormData(e.target)
    const data: TFormData = {}

    formData.forEach((value, key) => {
      data[key] = value + ''
    })

    this.props.onSubmit(data)
  }

  render () {
    const {children, className} = this.props

    return (
      <form className={className} onSubmit={this.onSubmit}>
        {children}
      </form>
    )
  }
}

export default Form

