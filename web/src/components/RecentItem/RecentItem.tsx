import { Link, routes } from '@redwoodjs/router'
import { Avatar } from '../Avatar'

export interface IRecentItem {
  avatar: string
  firstName: string
  lastName: string
  question: string
  username: string
}

const RecentItem = ({
  avatar,
  firstName,
  lastName,
  question,
  username,
}: IRecentItem): JSX.Element => {
  return (
    <div className="mb-7">
      <div className="font-bold text-base font-sans leading-5 mb-1">
        {question}
      </div>
      <div className="flex gap-2 items-center">
        <Link to={routes.profile({ username: username })}>
          <Avatar
            alt={`${firstName} ${lastName}`}
            src={avatar}
            width={32}
            height={32}
          />
        </Link>
        <div className="text-sm">
          Answered by{' '}
          <Link
            className="hover:underline"
            to={routes.profile({ username: username })}
          >
            {firstName} {lastName}
          </Link>
        </div>
      </div>
    </div>
  )
}

export { RecentItem }
