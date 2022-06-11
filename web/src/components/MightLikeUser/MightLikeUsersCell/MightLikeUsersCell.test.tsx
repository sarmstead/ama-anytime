import { render } from '@redwoodjs/testing/web'

import MightLikeUsersCell from './MightLikeUsersCell'

describe('MightLikeUser', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MightLikeUsersCell />)
    }).not.toThrow()
  })
})

// TODO: Write remaining tests
