import type { AvatarColor } from 'src/components/Avatar/Avatar'
import { Link, navigate, routes } from '@redwoodjs/router'
import { FormatKeywords, FormatThousands } from 'src/utils/FormatText'
import { Avatar } from '../../Avatar'
import { AvatarList } from '../../AvatarList'
import { Button } from '../../Button'
import { Icon } from '../../Icon'
import { IconButton } from '../../IconButton'
import { Modal } from 'src/components/Modal'
import { NewQuestion } from 'src/components/Question/NewQuestion/NewQuestion'
import { useState } from 'react'

export interface IProfileDetails {
  avatarColor: AvatarColor
  cover?: string
  coverDescription?: string
  avatar?: string
  fullName: string
  id: number
  isMe?: boolean
  username: string
  bio?: string
  location?: string
  website?: string
  followingCount?: number
  followedByCount?: number
  followedBy?: {
    src: string
    fullName: string
    alt: string
    username: string
  }[]
}

const ProfileDetails = ({
  avatarColor,
  cover = '',
  coverDescription = '',
  avatar,
  fullName,
  username,
  id,
  isMe = false,
  bio = '',
  location = '',
  website = '',
  followingCount = 0,
  followedByCount = 0,
  followedBy = [],
}: IProfileDetails): JSX.Element => {
  const [isModalShowing, setIsModalShowing] = useState(false)

  // show question modal
  const askUserQuestion = () => {
    openQuestionModal()
  }

  const openQuestionModal = () => {
    setIsModalShowing(true)
  }

  const closeQuestionModal = () => {
    setIsModalShowing(false)
  }

  return (
    <>
      <div>
        <Modal isShowing={isModalShowing} closeModal={closeQuestionModal}>
          <NewQuestion
            answeredBy={{
              id,
              username,
              avatarColor,
              avatar,
              fullName,
            }}
            afterCreate={closeQuestionModal}
          />
        </Modal>

        {/* cover */}
        {cover ? (
          <img
            className="w-full object-cover object-center h-[295px] relative z-cover"
            src={cover}
            alt={coverDescription && coverDescription}
            data-testid="cover"
          />
        ) : (
          <div className="w-full block h-24 bg-gray relative z-cover" />
        )}

        {/* content */}
        <div className="pl-12 pr-8 relative">
          {/* avatar */}
          <div className="-mt-20 mb-5 relative z-avatar">
            <Avatar
              avatarColor={avatarColor}
              src={avatar && avatar}
              alt={fullName}
              height={160}
              width={160}
            />
          </div>

          {/* action buttons */}
          <div className="absolute top-24 right-8 flex gap-3 z-actionButtons">
            {isMe ? (
              <div data-testid="editProfile">
                <Button
                  label="Edit Profile"
                  handleClick={() => {
                    navigate(routes.profileSettings())
                  }}
                />
              </div>
            ) : (
              <>
                <IconButton icon={{ name: 'dots' }} />
                <IconButton
                  icon={{ name: 'comment' }}
                  handleClick={askUserQuestion}
                />
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
            {fullName}
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
              {website && (
                <a
                  href={website}
                  data-testid="website"
                  target="_blank"
                  rel="noreferrer"
                  className="flex gap-1 font-bold underline hover:no-underline hover:text-punch"
                >
                  <Icon name="link" /> {website}
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
          {/* followedBy?.length > 1 && (
          <div
            className="flex gap-2 items-center mb-14"
            data-testid="followedBySummary"
          >
            <AvatarList avatars={followedBy} /> Followed by{' '}
            <Link to={routes.profile({ username })} className="hover:underline">
              {followedBy[0].fullName}
            </Link>{' '}
            and {FormatThousands(--followedByCount)} others
          </div>
        ) */}
        </div>
      </div>
    </>
  )
}

export { ProfileDetails }
