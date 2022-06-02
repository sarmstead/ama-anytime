import { render, screen, waitFor } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'

import { MightLikeUser } from './MightLikeUser'
import { MightLikeUser as MightLikeUserData } from './MightLikeUser.mocks'

describe('MightLikeUser', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MightLikeUser {...MightLikeUserData} />)
    }).not.toThrow()
  })

  it('displays the name', () => {
    render(<MightLikeUser {...MightLikeUserData} />)
    expect(screen.getByText(MightLikeUserData.name)).toBeInTheDocument()
  })

  it('displays the username', () => {
    render(<MightLikeUser {...MightLikeUserData} />)
    expect(
      screen.getByText(`@${MightLikeUserData.username}`)
    ).toBeInTheDocument()
  })

  it('handles the click', async () => {
    // mock up the click handler function
    const onButtonClick = jest.fn()

    render(<MightLikeUser {...MightLikeUserData} handleClick={onButtonClick} />)

    // grab the button
    const newButton = screen.getByText('Follow')

    // click on the button
    await waitFor(() => userEvent.click(newButton))
    expect(onButtonClick).toHaveBeenCalledTimes(1)
  })
})
