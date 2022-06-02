import { render, screen } from '@redwoodjs/testing/web'

import { Profile } from './Profile'

describe('Profile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Profile
          avatar={'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
          firstName={'Amy'}
          lastName={'Dutton'}
          screenname={'@selfteachme'}
        />
      )
    }).not.toThrow()
  })

  it("displays the person's name", () => {
    render(
      <Profile
        avatar={'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
        firstName={'Amy'}
        lastName={'Dutton'}
        screenname={'@selfteachme'}
      />
    )
    expect(screen.getByText('Amy Dutton')).toBeInTheDocument()
  })

  it("displays the person's screenname", () => {
    render(
      <Profile
        avatar={'https://i.pravatar.cc/150?u=a042581f4e29026704d'}
        firstName={'Amy'}
        lastName={'Dutton'}
        screenname={'@selfteachme'}
      />
    )
    expect(screen.getByText('@selfteachme')).toBeInTheDocument()
  })
})