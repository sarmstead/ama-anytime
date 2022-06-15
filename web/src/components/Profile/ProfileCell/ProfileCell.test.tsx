import { render, screen } from '@redwoodjs/testing/web'
import { Loading, Empty, Failure, Success } from './ProfileCell'
import { standard } from './ProfileCell.mock'

describe('ProfileCell', () => {
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

  it('renders a generic profile successfully', () => {
    expect(() => {
      render(<Success user={standard().profile} />)
    }).not.toThrow()
  })

  it('renders my profile successfully', () => {
    expect(() => {
      render(<Success user={standard().myProfile} />)
    }).not.toThrow()
  })
})
