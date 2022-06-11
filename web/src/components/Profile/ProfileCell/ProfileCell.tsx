import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { ProfileDetails } from '../ProfileDetails/ProfileDetails'

export const QUERY = gql`
  query User($username: String!) {
    user: user(username: $username) {
      avatar
      avatarColor
      bio
      cover
      fullName
      location
      username
      website
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div>Empty</div>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ user, isMe }: CellSuccessProps) => {
  return <ProfileDetails {...user} isMe={isMe} />
}
