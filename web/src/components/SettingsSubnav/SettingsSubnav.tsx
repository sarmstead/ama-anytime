import { NavLink, routes } from '@redwoodjs/router'
import { Icon } from '../Icon'

const SettingsSubnav = () => {
  return (
    <ul className="settings-subnav list-style-none m-0 p-0">
      <li>
        <NavLink
          activeClassName="selected"
          to={routes.settings()}
          data-testid="myAccountNav"
        >
          <span>My Account</span>
          <Icon name="chevronRight" className="icon" />
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="selected"
          to={routes.profileSettings()}
          data-testid="myProfileNav"
        >
          <span>My Profile</span>
          <Icon name="chevronRight" className="icon" />
        </NavLink>
      </li>
      {/* <li>
        <NavLink
          activeClassName="selected"
          to={routes.invites()}
          data-testid="invitationsNav"
        >
          <span>Invitations</span>
          <Icon name="chevronRight" className="icon" />
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="selected"
          to={routes.privacySafety()}
          data-testid="privacySafetyNav"
        >
          <span>Privacy and Safety</span>
          <Icon name="chevronRight" className="icon" />
        </NavLink>
      </li>
      <li>
        <NavLink
          activeClassName="selected"
          to={routes.notificationSettings()}
          data-testid="notificationsNav"
        >
          <span>Notifications</span>
          <Icon name="chevronRight" className="icon" />
        </NavLink>
      </li> */}
    </ul>
  )
}

export { SettingsSubnav }
