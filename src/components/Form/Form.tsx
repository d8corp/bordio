import React, {Component, ReactEventHandler, ReactNode} from 'react'

// local utils
import fieldValidator from 'src/utils/fieldValidator'

// components
import Field, {IFieldStringProps, IFieldBooleanProps} from 'src/components/Field'
import Button from 'src/components/Button'

// style imports
import './Form.css'

// types
export type FormField = (IFieldStringProps & FormFieldMixer<string>) | (IFieldBooleanProps & FormFieldMixer<boolean>)

// interfaces
export interface FormProps {
  fields: FormField[]
  children?: never
  onChange?: (fields: FormField[]) => any
  action?: (data: Record<string, any>) => Promise<any>
  actionName?: ReactNode
}
export interface FormFieldMixer <T> {
  defaultValue?: T
}

// classes
class Form extends Component<FormProps> {
  state = {
    disabled: this.disabled,
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
    const fields: FormField[] = []
    let disabled = false

    function addField (field: FormField) {
      fields.push(field)

      const invalidRequired = field.required && !field.value

      if (invalidRequired || field.error) {
        disabled = true
      }
    }

    for (const field of this.props.fields) {
      if (field.name === name) {
        const newField: FormField = {
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

  get disabled () {
    for (const field of this.props.fields) {
      if (fieldValidator(field)) {
        return true
      }
    }
    return false
  }

  // methods
  clear () {
    const newFields: FormField[] = []

    for (const field of this.props.fields) {
      newFields.push({...field, value: field.defaultValue, error: ''} as FormField)
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
  updateFields (fields: FormField[]) {
    const {onChange} = this.props
    if (onChange) {
      onChange(fields)
    }
  }

  render () {
    const {disabled, loading} = this.state
    const {fields, actionName = 'Confirm'} = this.props

    return (
      <form className='form' onSubmit={this.onSubmit}>
        {fields.map(field => (
          <Field
            stretch
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
