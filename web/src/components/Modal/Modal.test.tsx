import { render, screen, waitFor } from '@redwoodjs/testing/web'
import userEvent from '@testing-library/user-event'

import { Modal } from './Modal'

// TODO: Move mocked data into a separate file

describe('Modal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <Modal isShowing={false} closeModal={() => {}}>
          <p>Hello World</p>
        </Modal>
      )
    }).not.toThrow()
  })

  it('displays content inside', () => {
    render(
      <Modal isShowing={true} closeModal={() => {}}>
        <p>Hello World</p>
      </Modal>
    )
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('is visible by default', () => {
    render(
      <Modal isShowing={true} closeModal={() => {}}>
        <p>Hello World</p>
      </Modal>
    )
    expect(screen.getByTestId('modal')).toBeInTheDocument()
  })

  it('is hidden by default', () => {
    render(
      <Modal isShowing={false} closeModal={() => {}}>
        <p>Hello World</p>
      </Modal>
    )
    expect(screen.queryByTestId('modal')).not.toBeInTheDocument()
  })

  it('can close', async () => {
    // mock up the click handler function
    const onButtonClick = jest.fn()

    render(
      <Modal isShowing={true} closeModal={onButtonClick}>
        <p>Hello World</p>
      </Modal>
    )

    // grab the button
    const newButton = screen.getByText('close')

    // click on the button
    await waitFor(() => userEvent.click(newButton))
    expect(onButtonClick).toHaveBeenCalledTimes(1)
  })

  // TODO: Fill in skilled tests
  it('closes when the user hits the escape key', () => {})
  it('disables clicking behind the modal, when open', () => {})
  it('cloes when the user clicks outside the modal', () => {})
})
