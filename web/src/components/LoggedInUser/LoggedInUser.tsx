import { useAuth } from '@redwoodjs/auth'
import { Link, navigate, routes } from '@redwoodjs/router'
import { useRef, useState } from 'react'
import { Avatar } from '../Avatar'
import { DropdownMenu } from '../DropdownMenu'
import { Icon } from '../Icon'

export interface ILoggedInUser {
  avatar: string
  firstName: string
  lastName: string
  username: string
}

const LoggedInUser = ({
  avatar,
  firstName,
  lastName,
  username,
}: ILoggedInUser): JSX.Element => {
  const [isDropdownShowing, setIsDropdownShowing] = useState<boolean>(false)
  const triggerRef = useRef()
  const { logOut } = useAuth()

  const toggleDropdown = (): void => {
    setIsDropdownShowing((prevValue) => !prevValue)
  }

  return (
    <div className="flex gap-3 bg-loggedInUserAside px-5 pb-3 bg-no-repeat bg-cover max-w-2xl">
      <a href="/LoggedInUser">
        <Avatar
          src={avatar}
          alt={`{firstName} {lastName}`}
          width={80}
          height={80}
          className="border-punch border-4"
        />
      </a>
      <Link
        to={routes.me()}
        className="flex-1 self-end mt-auto text-3xl font-condensed leading-none pt-5"
      >
        <div className="text-ulcaGold">
          {firstName} {lastName}
        </div>
        <div className="text-white">@{username}</div>
      </Link>
      <div className="self-center my-auto text-white pt-5 hover:text-ulcaGold relative">
        {isDropdownShowing && (
          <DropdownMenu
            isShowing={true}
            onClickOutside={() => toggleDropdown()}
            options={[
              {
                label: 'Settings',
                icon: { name: 'settings' },
                action: () => navigate(routes.settings()),
              },
              { label: 'Logout', icon: { name: 'logout' }, action: logOut },
            ]}
            className="bottom right absolute -right-2 bottom-9"
            triggerRef={triggerRef}
          />
        )}
        {/* TODO: Write tests for trigger dropdown menu & clicking outside */}
        <button
          onClick={() => toggleDropdown()}
          className={`${isDropdownShowing && `text-punch`}`}
          ref={triggerRef}
        >
          <Icon name="dots" />
        </button>
      </div>
    </div>
  )
}

export { LoggedInUser }
