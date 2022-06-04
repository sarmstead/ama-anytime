import { Link, routes } from '@redwoodjs/router'
import { Avatar } from '../Avatar'
import { Icon } from '../Icon'

export interface IProfile {
  avatar: string
  firstName: string
  lastName: string
  username: string
}

const Profile = ({
  avatar,
  firstName,
  lastName,
  username,
}: IProfile): JSX.Element => {
  return (
    <div className="flex gap-3 bg-profileAside px-5 pb-3 bg-no-repeat bg-cover max-w-2xl">
      <a href="/profile">
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
      <div className="self-center my-auto text-white pt-5 hover:text-ulcaGold">
        <button>
          <Icon name="dots" />
        </button>
      </div>
    </div>
  )
}

export { Profile }
