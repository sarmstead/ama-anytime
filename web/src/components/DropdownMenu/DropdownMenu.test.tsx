import { render } from '@redwoodjs/testing/web'

import { DropdownMenu } from './DropdownMenu'
import { DropdownMenuOptions } from './DropdownMenu.mocks'

describe('DropdownMenu', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DropdownMenu isShowing={true} options={DropdownMenuOptions} />)
    }).not.toThrow()
  })

  it.skip('shows by default', () => {})
  it.skip('is hidden by default', () => {})
  it.skip('clicking outside hides it', () => {})
  it.skip('lists all the options', () => {})
  it.skip('can click on an option', () => {})
  it.skip('has a tag in the top', () => {})
  it.skip('has a tag in the bottom', () => {})
  it.skip('has a tag in the center', () => {})
  it.skip('has a tag in the right', () => {})
  it.skip('has a tag in the left', () => {})
})
