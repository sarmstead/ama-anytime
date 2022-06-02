import { render } from '@redwoodjs/testing/web'

import { Question } from './Question'
import { PinnedQuestion } from './Question.mocks'

describe('Question', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Question {...PinnedQuestion} />)
    }).not.toThrow()
  })

  it.skip('shows the question', () => {})
  it.skip('shows the answer', () => {})
  it.skip('shows the details from the person asking the question', () => {})
  it.skip('shows the action buttons', () => {})
  it.skip('shows follow-up questions', () => {})
  it.skip('shows how many people have favorited', () => {})
  it.skip('shows whether a user has bookmarked', () => {})
  it.skip('shows how many people have reused the question', () => {})
})
