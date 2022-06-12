import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { MightLikeUser } from '../MightLikeUser'

export const QUERY = gql`
  query MyQuery {
    users {
      avatar
      id
      fullName
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ users }: CellSuccessProps) => {
  return users.map((user, index) => (
    <MightLikeUser
      key={index}
      avatar={user.answeredBy.avatar}
      avatarColor={user.answeredBy.avatarColor}
      name={user.answeredBy.fullName}
      username={user.answeredBy.username}
    />
  ))
}
