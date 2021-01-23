import React, {Component, ReactEventHandler, ReactNode} from 'react'

// local utils
import fieldValidator from 'src/utils/fieldValidator'

// components
import Field, {FieldProps} from 'src/components/Field'
import Button from 'src/components/Button'

// style imports
import './Form.css'

// interfaces
export interface FormState {
  disabled: boolean
  loading: boolean
}
export interface FormProps {
  fields: FieldProps[]
  children?: never
  onChange?: (fields: FieldProps[]) => any
  onSuccess?: (fields: FieldProps[]) => any
  action?: (data: Record<string, any>) => Promise<any>
  title?: ReactNode
  actionName?: ReactNode
}

// classes
class Form extends Component<FormProps, FormState> {
  state = {
    disabled: true,
    loading: false,
  }

  // events
  onSubmit: ReactEventHandler = e => {
    e.preventDefault()

    const {disabled, loading} = this.state

    if (loading) {
      return
    }

    this.validation()

    if (!disabled) {
      const data: Record<string, any> = {}

      for (const field of this.props.fields) {
        data[field.name] = field.value
      }

      const {action} = this.props

      if (action) {
        action(data).then(() => this.clear(), error => alert(error.message)).finally(() => {
          this.setState({loading: false})
        })

        this.setState({loading: true})
      }
    }
  }
  onChange = (value: boolean | string, name: string) => {
    const fields: FieldProps[] = []
    let disabled = false

    function addField (field: FieldProps) {
      fields.push(field)

      const invalidRequired = field.required && !field.value

      if (invalidRequired || field.error) {
        disabled = true
      }
    }

    for (const field of this.props.fields) {
      if (field.name === name) {
        const newField: FieldProps = {
          ...field,
          value: value as any,
        }

        newField.error = fieldValidator(newField)

        addField(newField)
      } else {
        addField(field)
      }
    }

    if (this.state.disabled !== disabled) {
      this.setState({disabled})
    }

    this.updateFields(fields)
  }

  // methods
  clear () {
    const newFields = []

    for (const field of this.props.fields) {
      newFields.push({...field, value: undefined, error: ''})
    }

    this.setState({disabled: true})
    this.updateFields(newFields)
  }
  validation () {
    const newFields = []
    const {fields} = this.props

    for (const field of fields) {
      newFields.push({...field, error: fieldValidator(field)})
    }

    this.updateFields(newFields)
  }
  updateFields (fields: FieldProps[]) {
    const {onChange} = this.props
    if (onChange) {
      onChange(fields)
    }
  }

  render () {
    const {disabled, loading} = this.state
    const {fields, title, actionName = 'Confirm'} = this.props

    return (
      <form className='form' onSubmit={this.onSubmit}>
        <h1 className='form__title'>{title}</h1>
        {fields.map(field => (
          <Field
            {...field}
            key={field.name}
            onChange={this.onChange}
          />
        ))}
        <Button stretch disabled={disabled} loading={loading}>{actionName}</Button>
      </form>
    )
  }
}

export default Form
