import { render, screen } from '@redwoodjs/testing/web'

import { ProfileDetails } from './ProfileDetails'
import { ProfileDetails as ProfileDetailsData } from './ProfileDetails.mocks'

describe('ProfileDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ProfileDetails {...ProfileDetailsData} />)
    }).not.toThrow()
  })

  it('shows the cover', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('cover')).toHaveAttribute(
      'src',
      ProfileDetailsData.cover
    )
  })

  it("shows user's full name", () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('name')).toHaveTextContent(
      `${ProfileDetailsData.firstName} ${ProfileDetailsData.lastName}`
    )
  })

  it('shows username', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('username')).toHaveTextContent(
      ProfileDetailsData.username
    )
  })

  it('shows the bio', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('bio')).toHaveTextContent(
      '#DirectorOfDesign at @codingzeal I love teaching #designers how to #code and #developers how to #design.'
    )
  })

  it('shows the location', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('location')).toHaveTextContent(
      ProfileDetailsData.location
    )
  })

  it.skip("doesn't show the location when blank", () => {})

  it('shows the url', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('link')).toHaveTextContent(
      ProfileDetailsData.link
    )
  })

  it.skip("doesn't show the url when blank", () => {})

  it('shows the following count', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('followingCount')).toHaveTextContent(
      '60 Following'
    )
  })

  it.skip("doesn't show the follower count when zero", () => {})
  it('shows the followed by count', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('followedByCount')).toHaveTextContent(
      '1,321 Followers'
    )
  })

  it.skip("doesn't show the followers count when zero", () => {
    render(
      <ProfileDetails
        avatar="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        firstName="Amy"
        lastName="Dutton"
        username="selfteachme"
      />
    )
    expect(screen.getByTestId('followedByCount')).not.toBeInTheDocument()
  })

  it('shows a follower summary', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('followedBySummary')).toHaveTextContent(
      'Followed by Lincoln Thorpe and 1,320 others'
    )
  })

  it("doesn't show the follower summary when zero", () => {
    render(
      <ProfileDetails
        avatar="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        firstName="Amy"
        lastName="Dutton"
        username="selfteachme"
      />
    )
    expect(screen.getByTestId('followedBySummary')).not.toBeInTheDocument()
  })
})
