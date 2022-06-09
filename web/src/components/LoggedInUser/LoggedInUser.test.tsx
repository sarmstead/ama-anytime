import { render, screen } from '@redwoodjs/testing/web'

import { LoggedInUser } from './LoggedInUser'

describe('LoggedInUser', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <LoggedInUser
          avatar={'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
          firstName={'Amy'}
          lastName={'Dutton'}
          username={'selfteachme'}
        />
      )
    }).not.toThrow()
  })

  it("displays the person's name", () => {
    render(
      <LoggedInUser
        avatar={'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
        firstName={'Amy'}
        lastName={'Dutton'}
        username={'selfteachme'}
      />
    )
    expect(screen.getByText('Amy Dutton')).toBeInTheDocument()
  })

  it("displays the person's username", () => {
    render(
      <LoggedInUser
        avatar={'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
        firstName={'Amy'}
        lastName={'Dutton'}
        username={'selfteachme'}
      />
    )
    expect(screen.getByText('@selfteachme')).toBeInTheDocument()
  })
})
