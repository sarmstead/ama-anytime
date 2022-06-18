import {
  FieldError,
  Form,
  Label,
  PasswordField,
  Submit,
} from '@redwoodjs/forms'
import { useRef } from 'react'

const PasswordForm = ({ error, loading, onSave, user }) => {
  const newPasswordRef = useRef<HTMLInputElement>()

  const onSubmit = (data) => {
    console.log(data)
    onSave()
  }

  return (
    <Form onSubmit={onSubmit}>
      <div className="field">
        <Label name="currentPassword" errorClassName="rw-label rw-label-error">
          Current Password
        </Label>
        <div className="input-wrapper">
          <PasswordField
            name="currentPassword"
            errorClassName="rw-input rw-input-error"
            validation={{
              required: {
                value: true,
                message: 'Current Password is required',
              },
            }}
          />
        </div>
        <FieldError name="currentPassword" className="rw-field-error" />
      </div>

      <div className="field">
        <Label name="newPassword" errorClassName="rw-label rw-label-error">
          New Password
        </Label>
        <div className="input-wrapper">
          <PasswordField
            name="newPassword"
            errorClassName="rw-input rw-input-error"
            ref={newPasswordRef}
            validation={{
              required: {
                value: true,
                message: 'New Password is required',
              },
              minLength: {
                value: 8,
                message: 'Password must have at least 8 characters',
              },
            }}
          />
        </div>
        <FieldError name="newPassword" className="rw-field-error" />
      </div>

      <div className="field">
        <Label
          name="confirmNewPassword"
          errorClassName="rw-label rw-label-error"
        >
          Confirm New Password
        </Label>
        <div className="input-wrapper">
          <PasswordField
            name="confirmNewPassword"
            errorClassName="rw-input rw-input-error"
            validation={{
              required: {
                value: true,
                message: 'Confirm New Password is required',
              },
              validate: (value) =>
                value === newPasswordRef.current ||
                'The passwords do not match',
            }}
          />
        </div>
        <FieldError name="confirmNewPassword" className="rw-field-error" />
      </div>

      <div className="button-group">
        <Submit className="submit-btn">Change Password</Submit>
      </div>
    </Form>
  )
}

export { PasswordForm }
