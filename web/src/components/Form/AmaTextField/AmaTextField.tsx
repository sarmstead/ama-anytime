import {
  FieldError,
  useErrorStyles,
  useRegister,
  RegisterOptions,
} from '@redwoodjs/forms'
import { RefObject } from 'react'

export interface AmaTextFieldProps {
  className?: string
  defaultValue?: string
  inputRef?: RefObject<HTMLInputElement>
  label: string
  name: string
  placeholder?: string
  type?: 'text' | 'tel' | 'url' | 'password' | 'email'
  required?: boolean
  validation?: RegisterOptions
}

const AmaTextField = ({
  className,
  defaultValue = '',
  inputRef,
  label,
  name,
  placeholder = '',
  type = 'text',
  required = false,
  validation,
}: AmaTextFieldProps) => {
  const register = useRegister({
    name,
    validation: { ...validation, required },
  })

  const { className: labelClassName, style: labelStyle } = useErrorStyles({
    className: ``,
    errorClassName: `rw-label rw-label-error`,
    name,
  })

  const { className: inputClassName, style: inputStyle } = useErrorStyles({
    className: ``,
    errorClassName: `rw-input rw-input-error`,
    name,
  })

  return (
    <div className="field">
      <label
        htmlFor={`input-${name}`}
        className={labelClassName}
        style={labelStyle}
      >
        {label}
      </label>
      <div className={`input-wrapper ${className}`} data-testid="inputWrapper">
        <input
          className={inputClassName}
          data-testid="input"
          defaultValue={defaultValue}
          style={inputStyle}
          type={type}
          id={`input-${name}`}
          name={name}
          placeholder={placeholder}
          ref={inputRef}
          {...register}
        />
      </div>
      <FieldError name={name} className="rw-field-error" />
    </div>
  )
}

export { AmaTextField }
