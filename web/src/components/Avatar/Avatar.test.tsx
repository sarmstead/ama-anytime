import { render, screen } from '@redwoodjs/testing/web'

import { Avatar } from './Avatar'

// TODO: Move mocked data into a separate file

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

  // TODO: Write tests for the first initial avatar
  it.skip('creates an avatar when no avatar is provided', () => {})
  it.skip('displays the correct background color for the avatar', () => {})
  it.skip('displays a default background color for the avatar', () => {})
})
