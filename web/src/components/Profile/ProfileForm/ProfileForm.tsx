import {
  FieldError,
  Form,
  Label,
  Submit,
  TextField,
  UrlField,
} from '@redwoodjs/forms'
import { useEffect, useRef } from 'react'
import { AmaFileUpload } from 'src/components/Form/AmaFileUpload'
import { AmaTextarea } from 'src/components/Form/AmaTextarea'
import { Avatar } from 'src/components/Avatar'

const ProfileForm = ({ error, loading, onSave, user }) => {
  const fullNameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    fullNameRef.current.focus()
  }, [])

  console.log({ user })

  const onSubmit = (data) => {
    console.log(data)
    onSave(data, user.id)
  }

  return (
    <Form onSubmit={onSubmit}>
      <AmaFileUpload
        name="cover"
        value="https://i.picsum.photos/id/237/750/295.jpg?hmac=G-dedeDLqcYUvDe-WUKTnnGIhDo6Kz5rzRwp-y6wgd4"
      />

      <Avatar alt={user.fullName} src={user.avatar} />

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
            defaultValue={user.fullName}
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
        <AmaTextarea
          name="bio"
          label="bio"
          defaultValue={user.bio}
          validation={{
            required: {
              value: true,
              message: 'Bio is required',
            },
          }}
        />
      </div>

      <div className="field">
        <Label name="location" errorClassName="rw-label rw-label-error">
          Location
        </Label>
        <div className="input-wrapper">
          <TextField
            name="location"
            errorClassName="rw-input rw-input-error"
            defaultValue={user.location}
          />
        </div>
        <FieldError name="location" className="rw-field-error" />
      </div>

      <div className="field">
        <Label name="website" errorClassName="rw-label rw-label-error">
          Website
        </Label>
        <div className="input-wrapper">
          <UrlField
            name="website"
            errorClassName="rw-input rw-input-error"
            defaultValue={user.website}
          />
        </div>
        <FieldError name="website" className="rw-field-error" />
      </div>

      <div className="button-group">
        <Submit className="submit-btn">Update Profile</Submit>
      </div>
    </Form>
  )
}

export { ProfileForm }
