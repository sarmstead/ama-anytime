import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { AccountForm } from '../AccountForm/AccountForm'

export const QUERY = gql`
  query QueryEditUserAccount($username: String!) {
    user: user(username: $username) {
      id
      username
      email
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ user }: CellSuccessProps) => {
  const onSave = () => {}

  return <AccountForm onSave={onSave} user={user} />
}
