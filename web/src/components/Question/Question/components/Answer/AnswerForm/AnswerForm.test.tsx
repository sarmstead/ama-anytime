import { render } from '@redwoodjs/testing/web'

import AnswerForm from './AnswerForm'
import { PinnedQuestion as data } from '../../../Question.mocks'

describe('AnswerForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AnswerForm answeredBy={data.answeredBy} />)
    }).not.toThrow()
  })
})
