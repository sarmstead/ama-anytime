import { Avatar } from '../Avatar'
import { Icon } from '../Icon'

export interface IProfile {
  avatar: string
  firstName: string
  lastName: string
  screenname: string
}

const Profile = ({
  avatar,
  firstName,
  lastName,
  screenname,
}: IProfile): JSX.Element => {
  return (
    <div className="flex gap-3 bg-profileAside px-5 pb-3 bg-no-repeat bg-cover">
      <a href="/profile">
        <Avatar
          src={avatar}
          alt={`{firstName} {lastName}`}
          width={80}
          height={80}
          className="border-punch border-4"
        />
      </a>
      <a
        href="/profile"
        className="flex-1 self-end mt-auto text-3xl font-condensed leading-none pt-5"
      >
        <div className="text-ulcaGold">
          {firstName} {lastName}
        </div>
        <div className="text-white">{screenname}</div>
      </a>
      <div className="self-center my-auto text-white pt-5 hover:text-ulcaGold">
        <button>
          <Icon name="dots" />
        </button>
      </div>
    </div>
  )
}

export { Profile }
