import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { MightLikeUser } from '../MightLikeUser'

export const QUERY = gql`
  # query FindQuestionById($id: Int!) {
  #   question: question(id: $id) {
  #     id
  #     question
  #     answer
  #     order
  #     pinned
  #     askedById
  #     answeredById
  #     askedOn
  #   }
  # }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Question not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ users }: CellSuccessProps<FindUserById>) => {
  return users.map((user, index) => (
    <MightLikeUser
      key={index}
      avatar={user.avatar}
      name={user.fullName}
      username={user.username}
    />
  ))
}
