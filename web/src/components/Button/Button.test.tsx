import { render } from '@redwoodjs/testing/web'

import { Button } from './Button'

describe('Button', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Button label="follow" />)
    }).not.toThrow()
  })

  // TODO: Add tests
})
