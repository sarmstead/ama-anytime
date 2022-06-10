import { routes } from '@redwoodjs/router'
import { render, screen } from '@redwoodjs/testing/web'

import { SettingsSubnav } from './SettingsSubnav'

describe('SettingsSubnav', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SettingsSubnav />)
    }).not.toThrow()
  })

  it('link to the My Account Settings page', () => {
    render(<SettingsSubnav />)
    expect(screen.getByTestId('myAccountNav')).toHaveAttribute(
      'href',
      routes.settings()
    )
  })

  it('link to the My Profile page', () => {
    render(<SettingsSubnav />)
    expect(screen.getByTestId('myProfileNav')).toHaveAttribute(
      'href',
      routes.profileSettings()
    )
  })

  it('link to the Invitations page', () => {
    render(<SettingsSubnav />)
    expect(screen.getByTestId('invitationsNav')).toHaveAttribute(
      'href',
      routes.invites()
    )
  })

  it('link to the Privacy and Settings page', () => {
    render(<SettingsSubnav />)
    expect(screen.getByTestId('privacySafetyNav')).toHaveAttribute(
      'href',
      routes.privacySafety()
    )
  })

  it('link to the Notifications page', () => {
    render(<SettingsSubnav />)
    expect(screen.getByTestId('notificationsNav')).toHaveAttribute(
      'href',
      routes.notificationSettings()
    )
  })
})
