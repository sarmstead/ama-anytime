import {
  FieldError,
  Form,
  Label,
  Submit,
  TextAreaField,
  TextField,
  UrlField,
} from '@redwoodjs/forms'
import { MetaTags } from '@redwoodjs/web'
import { useEffect, useRef } from 'react'
import { AmaFileUpload } from 'src/components/Form/AmaFileUpload'

const ProfileSettingsPage = () => {
  const fullNameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    fullNameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    console.log(data)
  }

  return (
    <>
      <MetaTags title="ProfileSettings" description="ProfileSettings page" />

      <Form onSubmit={onSubmit}>
        <AmaFileUpload />

        <p>Avatar</p>

        <h1 className="page-title">My Profile</h1>

        <div className="field">
          <Label name="fullName" errorClassName="rw-label rw-label-error">
            Name
          </Label>
          <div className="input-wrapper">
            <TextField
              name="fullName"
              errorClassName="rw-input rw-input-error"
              ref={fullNameRef}
              validation={{
                required: {
                  value: true,
                  message: 'Name is required',
                },
              }}
            />
          </div>
          <FieldError name="fullName" className="rw-field-error" />
        </div>

        <div className="field">
          <Label name="bio" errorClassName="rw-label rw-label-error">
            Bio
          </Label>
          <div className="input-wrapper">
            <TextAreaField
              name="bio"
              errorClassName="rw-input rw-input-error"
              validation={{
                required: {
                  value: true,
                  message: 'Bio is required',
                },
              }}
            />
          </div>
          <FieldError name="bio" className="rw-field-error" />
        </div>

        <div className="field">
          <Label name="location" errorClassName="rw-label rw-label-error">
            Location
          </Label>
          <div className="input-wrapper">
            <TextField
              name="location"
              errorClassName="rw-input rw-input-error"
            />
          </div>
          <FieldError name="location" className="rw-field-error" />
        </div>

        <div className="field">
          <Label name="website" errorClassName="rw-label rw-label-error">
            Website
          </Label>
          <div className="input-wrapper">
            <UrlField name="website" errorClassName="rw-input rw-input-error" />
          </div>
          <FieldError name="website" className="rw-field-error" />
        </div>

        <div className="button-group">
          <Submit className="submit-btn">Update Profile</Submit>
        </div>
      </Form>
    </>
  )
}

export default ProfileSettingsPage
