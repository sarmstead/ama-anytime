import { render, screen } from '@redwoodjs/testing/web'
import { formatRelativeDate } from 'src/utils/DateHelpers'

// TODO: Fix failing tests (I think it's related to the mocked data)

import { Question } from './Question'
import {
  PinnedQuestion,
  QuestionOrder,
  QuestionNoActions,
} from './Question.mocks'

describe('Question', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Question {...PinnedQuestion} />)
    }).not.toThrow()
  })
  it('is pinned', () => {
    render(<Question {...PinnedQuestion} />)
    expect(screen.getByTestId('pinnedQuestion')).toBeInTheDocument()
    expect(screen.queryByTestId('questionOrder')).not.toBeInTheDocument()
  })

  it('is not pinned', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.queryByTestId('pinnedQuestion')).not.toBeInTheDocument()
  })

  it('does not show the question order, when the question order is not passed in', () => {
    render(<Question {...QuestionNoActions} />)
    expect(screen.queryByTestId('questionOrder')).not.toBeInTheDocument()
    expect(screen.queryByTestId('pinnedQuestion')).not.toBeInTheDocument()
  })

  it('does not show the question order, when the question order is 0', () => {
    render(<Question {...QuestionOrder} questionOrder={0} />)
    expect(screen.queryByTestId('questionOrder')).not.toBeInTheDocument()
    expect(screen.queryByTestId('pinnedQuestion')).not.toBeInTheDocument()
  })

  it('shows the question', () => {
    render(<Question {...QuestionNoActions} />)
    expect(screen.getByTestId('question')).toHaveTextContent(
      QuestionNoActions.question
    )
  })

  it('shows the answer', () => {
    render(<Question {...QuestionNoActions} />)
    expect(screen.getByTestId('answer')).toHaveTextContent(
      QuestionNoActions.answer
    )
  })

  it('shows the details from the person asking the question', () => {
    render(<Question {...QuestionNoActions} />)
    expect(screen.getByTestId('askedBy')).toHaveTextContent(
      `${QuestionNoActions.askedByName} @${
        QuestionNoActions.askedByUsername
      } • ${formatRelativeDate(QuestionNoActions.askedDate)}`
    )
  })

  it('hides the action buttons', () => {
    render(<Question {...QuestionNoActions} />)
    expect(screen.queryByTestId('actionButtons')).not.toBeInTheDocument()
  })

  it('shows the action buttons', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.getByTestId('actionButtons')).toBeInTheDocument()
  })

  it('shows follow-up question count', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.getByTestId('followUpQuestion')).toHaveTextContent(
      QuestionOrder.followUp.toString()
    )
  })

  it.skip('can ask a follow-up question', () => {})

  it('hides follow-up question count if less than 0', () => {
    render(<Question {...QuestionOrder} followUp={0} />)
    expect(screen.getByTestId('followUpQuestion')).toHaveTextContent('')
  })

  it('shows how many people have favorited', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.getByTestId('favoritedQuestion')).toHaveTextContent(
      QuestionOrder.favorite.toString()
    )
  })

  it('hides how many people have favorited if less than 0', () => {
    render(<Question {...QuestionOrder} favorite={0} />)
    expect(screen.getByTestId('favoritedQuestion')).toHaveTextContent('')
  })

  it.skip('can favorite the question', () => {})

  it('has bookmarked this question', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.queryByTestId('bookmarkFilled')).toBeInTheDocument()
    expect(screen.queryByTestId('bookmarkEmpty')).not.toBeInTheDocument()
  })

  it('has not bookmarked this question', () => {
    render(<Question {...QuestionOrder} bookmark={false} />)
    expect(screen.getByTestId('bookmarkEmpty')).toBeInTheDocument()
    expect(screen.queryByTestId('bookmarkFilled')).not.toBeInTheDocument()
  })

  it.skip('can toggle the bookmark', () => {})

  it('shows how many people have reused the question', () => {
    render(<Question {...QuestionOrder} />)
    expect(screen.queryByTestId('askAgain')).toHaveTextContent(
      QuestionOrder.askAgain.toString()
    )
  })

  it('hides how many people have reused the question, if less than 0', () => {
    render(<Question {...QuestionOrder} askAgain={0} />)
    expect(screen.queryByTestId('askAgain')).toHaveTextContent('')
  })

  it.skip('can reuse the question', () => {})
  it.skip('can share the question', () => {})
})
