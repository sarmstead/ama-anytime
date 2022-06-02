import { render } from '@redwoodjs/testing/web'

import { RecentItem } from './RecentItem'

describe('RecentItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecentItem />)
    }).not.toThrow()
  })
})
