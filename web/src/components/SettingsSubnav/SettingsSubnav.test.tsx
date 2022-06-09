import { render } from '@redwoodjs/testing/web'

import { SettingsSubnav } from './SettingsSubnav'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('SettingsSubnav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SettingsSubnav />)
    }).not.toThrow()
  })

  // TODO: Write skipped tests
  it.skip('link to the My Account Settings page', () => {})
  it.skip('link to the My Profile page', () => {})
  it.skip('link to the Invitations page', () => {})
  it.skip('link to the Privacy and Settings page', () => {})
  it.skip('link to the Notifications page', () => {})
})
