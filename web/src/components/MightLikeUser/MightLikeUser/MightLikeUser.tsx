import { Link, routes } from '@redwoodjs/router'
import { AvatarColor } from 'src/components/Avatar/Avatar'
import { Avatar } from '../../Avatar'
import { Button } from '../../Button'

export interface IMightLikeUser {
  avatar: string
  avatarColor: AvatarColor
  handleClick?: () => void
  name: string
  username: string
}

const MightLikeUser = ({
  avatar,
  avatarColor,
  handleClick,
  name,
  username,
}: IMightLikeUser): JSX.Element => {
  return (
    <div className="flex gap-3">
      <Link
        to={routes.profile({ username: username })}
        className="might-like-user__link"
      >
        <Avatar
          src={avatar}
          avatarColor={avatarColor}
          alt={name}
          width={72}
          height={72}
        />
      </Link>
      <div className="text-sm">
        <Link
          to={routes.profile({ username: username })}
          className="might-like-user__link"
        >
          <div className="font-bold name">{name}</div>
          <div className="mb-1 username">@{username}</div>
        </Link>
        <Button handleClick={handleClick} label="Follow" size="small" />
      </div>
    </div>
  )
}

export { MightLikeUser }
