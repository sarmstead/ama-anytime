import { render, screen } from '@redwoodjs/testing/web'
import { Loading, Empty, Failure, Success } from './QuestionsCell'
import { standard } from './QuestionsCell.mock'

describe('Questions Cell', () => {
  it('renders Loading successfully', () => {
    expect(() => {
      render(<Loading />)
    }).not.toThrow()
  })

  it('renders Empty successfully', async () => {
    expect(() => {
      render(<Empty />)
    }).not.toThrow()
  })

  it('renders Failure successfully', async () => {
    expect(() => {
      render(<Failure error={new Error('Oh no')} />)
    }).not.toThrow()
  })

  it('renders Success successfully', async () => {
    expect(() => {
      render(<Success questions={standard().questions} />)
    }).not.toThrow()
  })

  it("shows the questions that haven't been answered", () => {
    render(
      <Success
        questions={standard().questions}
        answeredByUsername={standard().questions[0].answeredBy.username}
        answerIsEmpty={true}
      />
    )
    expect(screen.queryAllByTestId('questionWrapper').length).toBe(1)
  })
})
