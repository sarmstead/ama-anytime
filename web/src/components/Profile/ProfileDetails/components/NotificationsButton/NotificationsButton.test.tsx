import { render, screen, waitFor } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'

import { NotificationsButton } from './NotificationsButton'

describe('NotificationsButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NotificationsButton notificationsOn={false} profileId={0} />)
    }).not.toThrow()
  })

  it('shows the unselected state', () => {
    render(<NotificationsButton notificationsOn={false} profileId={0} />)
    expect(screen.getByTestId('iconButton')).toHaveClass('text-black')
  })

  it('shows the selected state', () => {
    render(<NotificationsButton notificationsOn={true} profileId={0} />)
    expect(screen.getByTestId('iconButton')).toHaveClass('bg-punch')
  })
})
