import { render, screen, waitFor } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'

import { Tabs } from './Tabs'
import { tabs as data } from './Tabs.mocks'

describe('Tabs', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Tabs tabs={data} selected="Answered Questions" switchTab={() => {}} />
      )
    }).not.toThrow()
  })

  it('shows the default selected tab', () => {
    render(<Tabs tabs={data} selected={data[0].id} switchTab={() => {}} />)
    expect(screen.getByTestId(`tab-${data[0].id}`)).toHaveClass('text-punch')
    expect(screen.getByTestId(`tab-${data[1].id}`)).not.toHaveClass(
      'text-punch'
    )
  })

  it('allows user to click on tab', async () => {
    const onTabClick = jest.fn() // mock up the click handler function

    render(
      <Tabs tabs={data} selected="Answered Questions" switchTab={onTabClick} />
    )

    const tabClick = screen.getByText('Unanswered Questions') // grab the button
    await waitFor(() => userEvent.click(tabClick)) // click on the button
    expect(onTabClick).toHaveBeenCalledTimes(1)
  })
})
