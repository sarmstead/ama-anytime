import { render } from '@redwoodjs/testing/web'

import { FollowButton } from './FollowButton'

describe('FollowButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<FollowButton />)
    }).not.toThrow()
  })
})
