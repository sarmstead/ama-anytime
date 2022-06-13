import { render, screen } from '@redwoodjs/testing/web'

import { ProfileDetails } from './ProfileDetails'
import { ProfileDetails as ProfileDetailsData } from './ProfileDetails.mocks'

describe('ProfileDetails', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <ProfileDetails
          avatarColor={ProfileDetailsData.avatarColor}
          fullName={ProfileDetailsData.fullName}
          username={ProfileDetailsData.username}
        />
      )
    }).not.toThrow()
  })

  it('shows the cover', () => {
    render(
      <ProfileDetails
        avatarColor={ProfileDetailsData.avatarColor}
        fullName={ProfileDetailsData.fullName}
        username={ProfileDetailsData.username}
        cover={ProfileDetailsData.cover}
      />
    )
    expect(screen.getByTestId('cover')).toHaveAttribute(
      'src',
      ProfileDetailsData.cover
    )
  })

  it("shows user's full name", () => {
    render(
      <ProfileDetails
        avatarColor={ProfileDetailsData.avatarColor}
        fullName={ProfileDetailsData.fullName}
        username={ProfileDetailsData.username}
      />
    )
    expect(screen.getByTestId('name')).toHaveTextContent(
      ProfileDetailsData.fullName
    )
  })

  it('shows username', () => {
    render(
      <ProfileDetails
        avatarColor={ProfileDetailsData.avatarColor}
        fullName={ProfileDetailsData.fullName}
        username={ProfileDetailsData.username}
      />
    )
    expect(screen.getByTestId('username')).toHaveTextContent(
      ProfileDetailsData.username
    )
  })

  it('shows the bio', () => {
    render(
      <ProfileDetails
        avatarColor={ProfileDetailsData.avatarColor}
        fullName={ProfileDetailsData.fullName}
        username={ProfileDetailsData.username}
        bio={ProfileDetailsData.bio}
      />
    )
    expect(screen.getByTestId('bio')).toHaveTextContent(ProfileDetailsData.bio)
  })

  it('shows the location', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('location')).toHaveTextContent(
      ProfileDetailsData.location
    )
  })

  it("doesn't show the location when blank", () => {
    render(
      <ProfileDetails
        avatarColor={ProfileDetailsData.avatarColor}
        fullName={ProfileDetailsData.fullName}
        username={ProfileDetailsData.username}
      />
    )
    expect(screen.queryByTestId('location')).toHaveTextContent('')
  })

  it('shows the url', () => {
    render(
      <ProfileDetails
        avatarColor={ProfileDetailsData.avatarColor}
        fullName={ProfileDetailsData.fullName}
        username={ProfileDetailsData.username}
        website={ProfileDetailsData.website}
      />
    )
    expect(screen.getByTestId('website')).toHaveTextContent(
      ProfileDetailsData.website
    )
  })

  it("doesn't show the url when blank", () => {
    render(
      <ProfileDetails
        avatarColor={ProfileDetailsData.avatarColor}
        fullName={ProfileDetailsData.fullName}
        username={ProfileDetailsData.username}
      />
    )
    expect(screen.queryByTestId('website')).not.toBeInTheDocument()
  })

  it('shows the following count', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('followingCount')).toHaveTextContent(
      '60 Following'
    )
  })

  it("doesn't show the follower count when zero", () => {
    render(
      <ProfileDetails
        avatarColor={ProfileDetailsData.avatarColor}
        fullName={ProfileDetailsData.fullName}
        username={ProfileDetailsData.username}
      />
    )
    expect(screen.getByTestId('followingCount')).toHaveTextContent('')
  })

  it('shows the followed by count', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('followedByCount')).toHaveTextContent(
      '1,321 Followers'
    )
  })

  it("doesn't show the followers count when zero", () => {
    render(
      <ProfileDetails
        avatarColor={ProfileDetailsData.avatarColor}
        fullName={ProfileDetailsData.fullName}
        username={ProfileDetailsData.username}
      />
    )
    expect(screen.getByTestId('followedByCount')).toHaveTextContent('')
  })

  it.skip('shows a follower summary', () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.getByTestId('followedBySummary')).toHaveTextContent(
      'Followed by Lincoln Thorpe and 1,320 others'
    )
  })

  it("doesn't show the follower summary when zero", () => {
    render(
      <ProfileDetails
        avatarColor={ProfileDetailsData.avatarColor}
        fullName={ProfileDetailsData.fullName}
        username={ProfileDetailsData.username}
      />
    )
    expect(screen.queryByTestId('followedBySummary')).not.toBeInTheDocument()
  })

  it("doesn't show the profile as me", () => {
    render(<ProfileDetails {...ProfileDetailsData} />)
    expect(screen.queryByTestId('editProfile')).not.toBeInTheDocument()
  })

  it('shows the profile as me', () => {
    render(<ProfileDetails {...ProfileDetailsData} isMe={true} />)
    expect(screen.getByTestId('editProfile')).toBeInTheDocument()
  })
})
