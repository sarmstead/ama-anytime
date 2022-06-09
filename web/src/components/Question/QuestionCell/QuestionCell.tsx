import type { FindQuestionById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

// import Question from 'src/components/Question/Question'

// TODO: Write Tests

export const QUERY = gql`
  query FindQuestionById($id: Int!) {
    question: question(id: $id) {
      id
      question
      answer
      order
      pinned
      askedById
      answeredById
      askedOn
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Question not found</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ question }: CellSuccessProps<FindQuestionById>) => {
  return <div>Question</div> //<Question question={question} />
}
