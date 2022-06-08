import { MetaTags } from '@redwoodjs/web'
import {
  Form,
  Label,
  TextField,
  EmailField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useEffect, useRef } from 'react'

const SettingsPage = () => {
  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    console.log(data)

    // if (response.message) {
    //   toast(response.message)
    // } else if (response.error) {
    //   toast.error(response.error)
    // } else {
    //   toast.success('Welcome back!')
    // }
  }

  return (
    <>
      <MetaTags title="Settings" description="Settings page" />

      <h1 className="page-title">My Account</h1>

      <Form onSubmit={onSubmit}>
        <div className="field">
          <Label name="username" errorClassName="rw-label rw-label-error">
            Username
          </Label>
          <div className="input-wrapper input-username">
            <TextField
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

        <div className="field">
          <Label
            name="currentPassword"
            errorClassName="rw-label rw-label-error"
          >
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
              validation={{
                required: {
                  value: true,
                  message: 'New Password is required',
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
              }}
            />
          </div>
          <FieldError name="confirmNewPassword" className="rw-field-error" />
        </div>

        <div className="button-group">
          <Submit className="submit-btn">Update Account</Submit>
        </div>
      </Form>
    </>
  )
}

export default SettingsPage
