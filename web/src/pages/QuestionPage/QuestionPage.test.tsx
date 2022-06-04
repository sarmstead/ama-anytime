import { render } from '@redwoodjs/testing/web'

import QuestionPage from './QuestionPage'

describe('QuestionPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<QuestionPage id="1" />)
    }).not.toThrow()
  })
})
