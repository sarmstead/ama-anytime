import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef } from 'react'
import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from '@redwoodjs/forms'
import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import { toast, Toaster } from '@redwoodjs/web/toast'
import { useEffect } from 'react'
import { AmaTextField } from 'src/components/Form/AmaTextField'

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth()

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home())
    }
  }, [isAuthenticated])

  const usernameRef = useRef<HTMLInputElement>()
  useEffect(() => {
    usernameRef?.current && usernameRef.current.focus()
  }, [])

  const onSubmit = async (data) => {
    const response = await logIn({ ...data })

    if (response.message) {
      toast(response.message)
    } else if (response.error) {
      toast.error(response.error)
    } else {
      toast.success('Welcome back!')
    }
  }

  return (
    <>
      <MetaTags title="Login" />
      <main>
        <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />

        <h1 className="font-condensed uppercase text-7xl text-eternity">
          Sign In
        </h1>
        <Form onSubmit={onSubmit}>
          <AmaTextField
            name="username"
            label="Username"
            ref={usernameRef}
            validation={{
              required: {
                value: true,
                message: 'Username is required',
              },
            }}
            required={true}
          />

          <AmaTextField
            autoComplete="current-password"
            name="password"
            label="Password"
            type="password"
            validation={{
              required: {
                value: true,
                message: 'Password is required',
              },
            }}
            required={true}
          />

          <div className="rw-forgot-link">
            <Link to={routes.forgotPassword()} className="rw-forgot-link">
              Forgot Password?
            </Link>
          </div>

          <FieldError name="password" className="rw-field-error" />

          <div className="rw-button-group">
            <Submit className="rw-button rw-button-blue">Login</Submit>
          </div>
        </Form>
      </main>
    </>
  )
}

export default LoginPage
