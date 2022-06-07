import { render, screen, waitFor } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'

import { Button } from './Button'

describe('Button', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Button label="follow" />)
    }).not.toThrow()
  })

  it('displays the label', () => {
    render(<Button label="follow" />)
    expect(screen.getByText('follow')).toBeInTheDocument()
  })

  it('handles the click', async () => {
    // mock up the click handler function
    const onButtonClick = jest.fn()

    render(<Button handleClick={onButtonClick} label="follow" />)

    // grab the button
    const newButton = screen.getByText('follow')

    // click on the button
    await waitFor(() => userEvent.click(newButton))
    expect(onButtonClick).toHaveBeenCalledTimes(1)
  })

  it('defaults to the large button', () => {
    render(<Button label="follow" />)
    expect(screen.getByTestId('button')).toHaveClass('large')
  })

  it('shows a small button', () => {
    render(<Button label="follow" size="small" />)
    expect(screen.getByTestId('button')).toHaveClass('small')
  })

  it('displays the icon', () => {
    render(<Button label="follow" icon={{ name: 'bell' }} />)
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })
})
