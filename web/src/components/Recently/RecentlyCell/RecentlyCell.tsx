import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { RecentItem } from '../RecentItem'

export const QUERY = gql`
  query RecentItems($currentUserId: Int!) {
    recentQuestions(currentUsersId: $currentUserId) {
      id
      question
      answeredBy {
        avatar
        avatarColor
        username
        fullName
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ recentQuestions }: CellSuccessProps) => {
  return recentQuestions.map((question, index) => (
    <RecentItem
      key={index}
      fullName={question.answeredBy.fullName}
      question={question.question}
      questionId={question.id}
      username={question.answeredBy.username}
      avatar={question.answeredBy.avatar}
      avatarColor={question.answeredBy.avatarColor}
    />
  ))
}
