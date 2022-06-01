import { render, screen } from '@redwoodjs/testing/web'

import { Avatar } from './Avatar'

describe('Avatar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Avatar
          alt="First Name Last Name"
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      )
    }).not.toThrow()
  })

  it('Displays the correct image', () => {
    render(
      <Avatar
        alt="Name"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
      />
    )
    expect(screen.getByAltText('Name')).toHaveAttribute(
      'src',
      'https://i.pravatar.cc/150?u=a042581f4e29026704d'
    )
  })

  it('Uses the correct alt text', () => {
    render(
      <Avatar
        alt="Name"
        src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
      />
    )
    expect(screen.getByAltText('Name')).toBeInTheDocument()
  })
})
