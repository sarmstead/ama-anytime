import { render } from '@redwoodjs/testing/web'

import { MightLikeUser } from './MightLikeUser'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MightLikeUser', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MightLikeUser />)
    }).not.toThrow()
  })
})
