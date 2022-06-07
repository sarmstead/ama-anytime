import { render } from '@redwoodjs/testing/web'

import SettingsSubnav from './SettingsSubnav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SettingsSubnav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SettingsSubnav />)
    }).not.toThrow()
  })
})
