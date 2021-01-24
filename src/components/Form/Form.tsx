import React, {Component, ReactEventHandler, ReactNode} from 'react'

// local utils
import fieldValidator from 'src/utils/fieldValidator'

// components
import Field, {FieldProps, TFieldType, TFieldValue} from 'src/components/Field'
import Button from 'src/components/Button'

// style imports
import './Form.css'

// interfaces
export interface FormField <T extends TFieldType, R> extends FieldProps <T, R>{
  defaultValue?: TFieldValue<T>
}
export interface FormProps <T extends TFieldType, R> {
  fields: FormField<T, R>[]
  children?: never
  action?: (data: Record<string, any>) => Promise<any>
  actionName?: ReactNode
  autoFocus?: boolean
}
export interface FormState {
  values: any[],
  loading: boolean,
  errors: any[],
  disabled: boolean,
}

// classes
class Form <T extends TFieldType, R> extends Component<FormProps<T, R>, FormState> {
  constructor (props: FormProps<T, R>, context: any) {
    super(props, context)

    const values = this.props.fields.map(field => field.defaultValue)
    const disabled = this.isDisabled(values)

    this.state = {
      values,
      loading: false,
      errors: [],
      disabled,
    }
  }

  // events
  onSubmit: ReactEventHandler = e => {
    e.preventDefault()

    const {disabled, loading, values} = this.state
    const {action, fields} = this.props

    if (loading) {
      return
    }

    this.validation()

    if (!disabled && action) {
      const data: Record<string, any> = {}

      for (let i = 0; i < fields.length; i++) {
        data[fields[i].name] = values[i]
      }

      action(data).then(() => this.clear(), () => {}).finally(() => {
        this.setState({loading: false})
      })

      this.setState({loading: true})
    }
  }
  onChange = (value: boolean | string, name: string) => {
    const {errors, values} = this.state
    const {fields} = this.props
    const newErrors: string[] = []
    const newValues: any[] = []
    let disabled = false


    for (let i = 0; i < fields.length; i++) {
      const field = fields[i]
      let error

      if (field.name === name) {
        error = fieldValidator(value, field)
        newErrors.push(error)
        newValues.push(value)
      } else {
        error = fieldValidator(values[i], field)
        newErrors.push(errors[i])
        newValues.push(values[i])
      }

      if (error) {
        disabled = true
      }
    }

    this.setState({disabled, values: newValues, errors: newErrors})
  }


  // methods
  clear () {
    const {fields} = this.props
    const values = []

    for (let i = 0; i < fields.length; i++) {
      values.push(fields[i].defaultValue)
    }

    this.setState({disabled: this.isDisabled(values), errors: [], values})
  }
  validation () {
    const {fields} = this.props
    const {values} = this.state
    const errors = []

    for (let i = 0; i < fields.length; i++) {
      errors.push(fieldValidator(values[i], fields[i]))
    }

    this.setState({errors})
  }
  isDisabled (values: any[]): boolean {
    const {fields} = this.props

    for (let i = 0; i < fields.length; i++) {
      if (fieldValidator(values[i], fields[i])) {
        return true
      }
    }
    return false
  }

  render () {
    const {disabled, loading, errors, values} = this.state
    const {fields, actionName = 'Confirm', autoFocus} = this.props

    return (
      <form className='form' onSubmit={this.onSubmit}>
        {fields.map((field, id) => (
          <Field
            stretch
            autoFocus={autoFocus && !id}
            {...field}
            value={values[id]}
            error={errors[id]}
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
