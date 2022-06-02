import { render, screen } from '@redwoodjs/testing/web'

import { RecentItem } from './RecentItem'
import { RecentItem as RecentItemData } from './RecentItem.mocks'

describe('RecentItem', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<RecentItem {...RecentItemData} />)
    }).not.toThrow()
  })

  it('displays the question', () => {
    render(<RecentItem {...RecentItemData} />)
    expect(screen.getByText(RecentItemData.question)).toBeInTheDocument()
  })

  it('displays the  name of the person that asked the question', () => {
    render(<RecentItem {...RecentItemData} />)
    expect(
      screen.getByText(`${RecentItemData.firstName} ${RecentItemData.lastName}`)
    ).toBeInTheDocument()
  })
})
