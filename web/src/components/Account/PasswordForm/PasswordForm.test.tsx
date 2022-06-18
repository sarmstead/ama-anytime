import { render } from '@redwoodjs/testing/web'

import { PasswordForm } from './PasswordForm'

describe('PasswordForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PasswordForm />)
    }).not.toThrow()
  })
})
