import { render, screen } from '@redwoodjs/testing/web'

import { Tabs } from './Tabs'
import { tabs as data } from './Tabs.mocks'

describe('Tabs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Tabs tabs={data} selected="Answered Questions" />)
    }).not.toThrow()
  })

  it('shows the default selected tab', () => {
    render(<Tabs tabs={data} selected="Answered Questions" />)
    expect(screen.getByTestId('tab-1')).toHaveClass('text-punch')
    expect(screen.getByTestId('tab-2')).not.toHaveClass('text-punch')
  })
})
