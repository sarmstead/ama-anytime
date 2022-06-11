import type { User } from 'types/graphql.d'
import { Link, routes } from '@redwoodjs/router'
import { formatRelativeDate } from 'src/utils/DateHelpers'
import { Avatar } from '../../Avatar'
import type { AvatarColor } from 'src/components/Avatar/Avatar'
import { Icon } from '../../Icon'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_QUESTION_MUTATION = gql`
  mutation DeleteQuestionMutation($id: Int!) {
    deleteQuestion(id: $id) {
      id
    }
  }
`

export interface IQuestion {
  answer?: string
  answeredBy: User
  askAgain?: number
  askedBy: User
  askedDate: string
  avatar?: string
  avatarColor?: AvatarColor
  bookmark?: boolean
  className?: string
  favorite?: number
  followUp?: number
  pinned?: boolean
  question: string
  questionId: string
  questionOrder?: number
  showActions?: boolean
  rerouteOnDelete?: () => void
}

const Question = ({
  answer,
  answeredBy,
  askAgain,
  askedBy,
  askedDate,
  avatar,
  avatarColor,
  bookmark,
  className = '',
  favorite,
  followUp,
  pinned = false,
  question,
  questionId,
  showActions = true,
  rerouteOnDelete,
}: IQuestion): JSX.Element => {
  const [deleteQuestion] = useMutation(DELETE_QUESTION_MUTATION, {
    onCompleted: () => {
      toast.success('Question deleted')
      rerouteOnDelete()
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete question ' + id + '?')) {
      deleteQuestion({ variables: { id } })
    }
  }

  const onAskAgainClick = () => {}
  const onBookmarkClick = () => {}
  const onFollowUpClick = () => {}
  const onFavoriteClick = () => {}
  const onShareClick = () => {}

  return (
    <div
      className={`flex gap-5 pt-9 pl-14 pr-10 pb-9 relative border-b-2 border-black ${className}`}
    >
      <div className="absolute right-10 top-7">
        <button>
          <Icon name="dots" />
        </button>
      </div>
      <Avatar
        avatarColor={askedBy.avatarColor}
        className="z-10 relative"
        src={askedBy.avatar}
        alt={askedBy.username}
        height={68}
        width={68}
      />
      <div className="flex-1 relative">
        {pinned && (
          <div
            className="flex gap-1 uppercase font-slab text-xs text-black py-2 font-extrabold absolute -top-9"
            data-testid="pinnedQuestion"
          >
            <Icon name="pin" />
            Pinned Question
          </div>
        )}
        <div data-testid="askedBy">
          <strong className="text-lg">{askedBy.fullName}</strong> @
          {askedBy.username} • {formatRelativeDate(askedDate)}
        </div>
        <div
          className="font-condensed text-[2.5rem] leading-none pt-o pb-8 relative"
          data-testid="question"
        >
          {/* connect question and answer */}
          {answer && (
            <div className="h-full w-0 border-l-2 border-black block absolute -left-14 z-0" />
          )}
          <Link
            to={routes.question({ id: Number(questionId) })}
            className="hover:text-punch"
          >
            {question}
          </Link>
        </div>
        {answer && (
          <div className="large-body mb-8 relative" data-testid="answer">
            <Avatar
              className="absolute -left-20 -top-3 z-20"
              src={answeredBy.avatar}
              alt={answeredBy.username}
              avatarColor={answeredBy.avatarColor}
              height={48}
              width={48}
            />
            {answer}
          </div>
        )}
        {showActions && (
          <div
            className="flex justify-between items-center"
            data-testid="actionButtons"
          >
            {/* Follow-Up */}
            <button
              className="hover:text-punch"
              data-testid="followUpQuestion"
              onClick={onFollowUpClick}
            >
              {followUp ? (
                <span className="selected-action">
                  <Icon name="commentFilled" />
                  {followUp}
                </span>
              ) : (
                <Icon name="comment" />
              )}
            </button>

            {/* Like / Favorite */}
            <button
              className="hover:text-punch"
              data-testid="favoritedQuestion"
              onClick={onFavoriteClick}
            >
              {favorite ? (
                <span className="selected-action">
                  <Icon name="heartFilled" /> {favorite}
                </span>
              ) : (
                <Icon name="heart" />
              )}
            </button>

            {/* Bookmarked */}
            <button className="hover:text-punch" onClick={onBookmarkClick}>
              {bookmark ? (
                <span data-testid="bookmarkFilled">
                  <Icon className="selected-action" name="bookmarkFilled" />
                </span>
              ) : (
                <span data-testid="bookmarkEmpty">
                  <Icon name="bookmark" />
                </span>
              )}
            </button>

            {/* Ask Again? */}
            <button
              className="hover:text-punch"
              data-testid="askAgain"
              onClick={onAskAgainClick}
            >
              {askAgain ? (
                <span className="selected-action">
                  <Icon name="reuse" /> {askAgain}
                </span>
              ) : (
                <Icon name="reuse" />
              )}
            </button>

            {/* Share */}
            <button className="hover:text-punch" onClick={onShareClick}>
              <Icon name="share" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export { Question }
