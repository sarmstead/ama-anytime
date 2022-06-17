import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import { FindBookmarks } from 'types/graphql'
import { Question } from '../Question/Question'

export const QUERY = gql`
  query FindBookmarks($userId: Int!) {
    bookmarks(userId: $userId) {
      id
      question {
        id
        answer
        askedOn
        question
        answeredBy {
          avatar
          avatarColor
          id
          username
          fullName
        }
        askedBy {
          avatar
          avatarColor
          id
          username
          fullName
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ bookmarks }: CellSuccessProps<FindBookmarks>) =>
  bookmarks.map((bookmark) => (
    <Question
      key={bookmark.id}
      answeredBy={bookmark.question.answeredBy}
      askedBy={bookmark.question.askedBy}
      askedOn={bookmark.question.askedOn}
      question={bookmark.question.question}
      questionId={bookmark.question.id}
    />
  ))
