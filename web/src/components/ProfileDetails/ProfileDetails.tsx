import { Link, navigate, routes } from '@redwoodjs/router'
import { FormatKeywords, FormatThousands } from 'src/utils/FormatText'
import { Avatar } from '../Avatar'
import { AvatarList } from '../AvatarList'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { IconButton } from '../IconButton'

export interface IProfileDetails {
  cover?: string
  coverDescription?: string
  avatar?: string
  firstName: string
  lastName: string
  isMe?: boolean
  username: string
  bio?: string
  location?: string
  link?: string
  followingCount?: number
  followedByCount?: number
  followedBy?: {
    src: string
    firstName: string
    lastName: string
    alt: string
    username: string
  }[]
}

const ProfileDetails = ({
  cover = '',
  coverDescription = '',
  avatar,
  firstName,
  lastName,
  username,
  isMe = false,
  bio = '',
  location = '',
  link = '',
  followingCount = 0,
  followedByCount = 0,
  followedBy = [],
}: IProfileDetails): JSX.Element => {
  return (
    <div>
      {/* cover */}
      {/* TODO: Default Cover */}
      {cover && (
        <img
          className="w-full object-cover object-center max-h-[295px]"
          src={cover}
          alt={coverDescription && coverDescription}
          data-testid="cover"
        />
      )}

      {/* content */}
      <div className="pl-12 pr-8 relative">
        {/* avatar */}
        <div className="-mt-20 mb-5">
          <Avatar
            src={avatar && avatar}
            alt={`${firstName} ${lastName}`}
            height={160}
            width={160}
          />
        </div>

        {/* action buttons */}
        <div className="absolute top-24 right-8 flex gap-3">
          {isMe ? (
            <Button
              label="Edit Profile"
              handleClick={() => {
                navigate(routes.settings())
              }}
            />
          ) : (
            <>
              <IconButton icon={{ name: 'dots' }} />
              <IconButton icon={{ name: 'comment' }} />
              <IconButton icon={{ name: 'bell' }} />
              <Button label="Follow" />
            </>
          )}
        </div>

        {/* details */}
        <h1
          className="font-condensed text-punch text-[3.25rem] leading-none p-0 m-0 mb-1"
          data-testid="name"
        >
          {firstName} {lastName}
        </h1>
        <div
          className="text-sans font-extrabold text-xl mb-2"
          data-testid="username"
        >
          @{username}
        </div>
        {bio && (
          <div
            className="body-copy mb-6"
            data-testid="bio"
            dangerouslySetInnerHTML={{ __html: FormatKeywords(bio) }}
          />
        )}
        <div className="grid grid-cols-2 gap-3 mb-5">
          <div className="flex gap-1" data-testid="location">
            {location && (
              <>
                <Icon name="map" /> {location}
              </>
            )}
          </div>
          <div>
            {link && (
              <a
                href={link}
                data-testid="link"
                target="_blank"
                rel="noreferrer"
                className="flex gap-1 font-bold underline hover:no-underline hover:text-punch"
              >
                <Icon name="link" /> {link}
              </a>
            )}
          </div>
          <div data-testid="followingCount">
            {followingCount > 0 && (
              <>
                <strong>{FormatThousands(followingCount)}</strong> Following
              </>
            )}
          </div>
          <div data-testid="followedByCount">
            {followedByCount > 0 && (
              <>
                <strong>{FormatThousands(followedByCount)}</strong> Followers
              </>
            )}
          </div>
        </div>
        {followedBy?.length > 1 && (
          <div
            className="flex gap-2 items-center mb-14"
            data-testid="followedBySummary"
          >
            <AvatarList avatars={followedBy} /> Followed by{' '}
            <Link to={routes.profile({ username })} className="hover:underline">
              {followedBy[0].firstName} {followedBy[0].lastName}
            </Link>{' '}
            and {FormatThousands(--followedByCount)} others
          </div>
        )}
      </div>
    </div>
  )
}

export { ProfileDetails }
