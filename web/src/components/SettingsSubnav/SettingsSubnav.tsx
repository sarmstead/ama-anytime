import { NavLink, routes } from '@redwoodjs/router'
import { Icon } from '../Icon'

const SettingsSubnav = () => {
  return (
    <ul className="settings-subnav list-style-none m-0 p-0">
      <li>
        <NavLink activeClassName="selected" to={routes.settings()}>
          <span>My Account</span>
          <Icon name="chevronRight" className="icon" />
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to={routes.profileSettings()}>
          <span>My Profile</span>
          <Icon name="chevronRight" className="icon" />
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to={routes.invites()}>
          <span>Invitations</span>
          <Icon name="chevronRight" className="icon" />
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to={routes.privacySafety()}>
          <span>Privacy and Safety</span>
          <Icon name="chevronRight" className="icon" />
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="selected" to={routes.notificationSettings()}>
          <span>Notifications</span>
          <Icon name="chevronRight" className="icon" />
        </NavLink>
      </li>
    </ul>
  )
}

export { SettingsSubnav }
