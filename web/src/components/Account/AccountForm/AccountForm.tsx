import {
  Form,
  Label,
  TextField,
  EmailField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useEffect, useRef } from 'react'

export interface IAccountForm {
  error: string
  loading: boolean
  onSave: () => void
  user: {
    username: string
    email: string
  }
}

const AccountForm = ({
  error,
  loading,
  onSave,
  user,
}: IAccountForm): JSX.Element => {
  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = (data) => {
    console.log(data)
    onSave()
  }

  return (
    <Form onSubmit={onSubmit}>
      <div className="field">
        <Label name="username" errorClassName="rw-label rw-label-error">
          Username
        </Label>
        <div className="input-wrapper input-username">
          <TextField
            defaultValue={user.username}
            name="username"
            errorClassName="rw-input rw-input-error"
            ref={usernameRef}
            validation={{
              required: {
                value: true,
                message: 'Username is required',
              },
            }}
          />
        </div>
        <FieldError name="username" className="rw-field-error" />
      </div>

      <div className="field">
        <Label name="email" errorClassName="rw-label rw-label-error">
          Email
        </Label>
        <div className="input-wrapper">
          <EmailField
            defaultValue={user.email}
            name="email"
            errorClassName="rw-input rw-input-error"
            validation={{
              required: {
                value: true,
                message: 'Email is required',
              },
            }}
          />
        </div>
        <FieldError name="email" className="rw-field-error" />
      </div>
      <div className="button-group">
        <Submit className="submit-btn">Update Account</Submit>
      </div>
    </Form>
  )
}

export { AccountForm }
