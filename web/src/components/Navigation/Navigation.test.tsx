import { routes } from '@redwoodjs/router'
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

  it("doesn't display the notification count when its zero", () => {
    render(<Navigation />)
    expect(screen.queryByTestId('notificationCount')).not.toBeInTheDocument()
  })

  it('links the logo to the feed page', () => {
    render(<Navigation />)
    expect(screen.getByTestId('logoLink')).toHaveAttribute(
      'href',
      routes.feed()
    )
  })

  it('links the home nav item to the feed page', () => {
    render(<Navigation />)
    expect(screen.getByTestId('home')).toHaveAttribute('href', routes.feed())
  })

  it('links to the notifications page', () => {
    render(<Navigation />)
    expect(screen.getByTestId('notifications')).toHaveAttribute(
      'href',
      routes.notifications()
    )
  })

  it('links to the bookmarks page', () => {
    render(<Navigation />)
    expect(screen.getByTestId('bookmarks')).toHaveAttribute(
      'href',
      routes.bookmarks()
    )
  })

  it('links to the profile page', () => {
    render(<Navigation />)
    expect(screen.getByTestId('profile')).toHaveAttribute('href', routes.me())
  })
})
