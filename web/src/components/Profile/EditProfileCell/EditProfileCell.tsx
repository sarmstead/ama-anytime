import { toast } from '@redwoodjs/web/toast'

import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'
import { ProfileForm } from '../ProfileForm'

export const QUERY = gql`
  query FindEditProfileQuery($id: Int!) {
    user(id: $id) {
      id
      avatar
      bio
      cover
      fullName
      location
      website
    }
  }
`

const UPDATE_USER_MUTATION = gql`
  mutation UpdateUserMutation($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
      avatar
      bio
      cover
      fullName
      location
      website
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ user }: CellSuccessProps) => {
  const [updateUser, { loading, error }] = useMutation(UPDATE_USER_MUTATION, {
    onCompleted: () => {
      toast.success('Profile updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateUser({ variables: { id, input } })
  }

  return (
    <ProfileForm loading={loading} error={error} onSave={onSave} user={user} />
  )
}
