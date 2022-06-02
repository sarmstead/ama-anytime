import { render, screen } from '@redwoodjs/testing/web'

import { Navigation } from './Navigation'

describe('Navigation', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Navigation />)
    }).not.toThrow()
  })

  it('displays the notification count', () => {
    render(<Navigation notifications={6} />)
    expect(screen.getByTestId('notificationCount')).toHaveTextContent('6')
  })
})
