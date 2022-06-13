import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

import { Question } from '../Question/Question'
import { FindQuestions } from 'types/graphql'

// TODO: Write Tests

export const QUERY = gql`
  query FindQuestions(
    $answerIsEmpty: Boolean = false
    $answeredByUsername: String
    $askedByUsername: String
  ) {
    questions(
      answerIsEmpty: $answerIsEmpty
      answeredByUsername: $answeredByUsername
      askedByUsername: $askedByUsername
    ) {
      id
      question
      answer
      pinned
      askedBy {
        avatar
        avatarColor
        fullName
        username
      }
      answeredBy {
        avatar
        avatarColor
        fullName
        username
      }
      askedOn
      updatedOn
      parentQuestionId
      currentUserBookmarks {
        id
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return <div className="rw-text-center">{'No questions yet. '}</div>
}

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ questions }: CellSuccessProps<FindQuestions>) => {
  console.log(questions)
  return questions.map((question, index) => (
    <Question questionId={question.id.toString()} key={index} {...question} />
  ))
}
