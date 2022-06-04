import { render, screen, waitFor } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'

import { IconButton } from './IconButton'

describe('IconButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<IconButton icon={{ name: 'comment' }} />)
    }).not.toThrow()
  })

  it('handles the click', async () => {
    // mock up the click handler function
    const onButtonClick = jest.fn()

    render(
      <IconButton icon={{ name: 'comment' }} handleClick={onButtonClick} />
    )

    // grab the button
    const newButton = screen.getByTestId('iconButton')

    // click on the button
    await waitFor(() => userEvent.click(newButton))
    expect(onButtonClick).toHaveBeenCalledTimes(1)
  })
})
