import { render, screen } from '@redwoodjs/testing/web'

import { Navigation } from './Navigation'

describe('Navigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Navigation />)
    }).not.toThrow()
  })

  // TODO: Finish writing test
  it.skip('displays the notification count', () => {
    render(<Navigation notifications={6} />)
  })
})
