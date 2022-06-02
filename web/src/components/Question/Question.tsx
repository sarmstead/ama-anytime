import { formatRelativeDate } from 'src/utils/DateHelpers'
import { Avatar } from '../Avatar'
import { Icon } from '../Icon'

export interface IQuestion {
  answer: string
  askAgain: number
  askedByName: string
  askedByUsername: string
  askedDate: Date
  avatar: string
  bookmark: boolean
  className?: string
  favorite: number
  followUp: number
  pinned?: boolean
  onAskAgainClick?: () => void
  onBookmarkClick?: () => void
  onCommentClick?: () => void
  onFavoriteClick?: () => void
  onShareClick?: () => void
  question: string
  questionOrder?: number
  showActions?: boolean
}

const Question = ({
  answer,
  askAgain,
  askedByName,
  askedByUsername,
  askedDate,
  avatar,
  bookmark,
  className = '',
  favorite,
  followUp,
  pinned = false,
  question,
  questionOrder = null,
  showActions = true,
}) => {
  return (
    <div className={`flex gap-5 pt-9 pl-14 pr-10 pb-9 ${className}`}>
      {pinned && (
        <div className="absolute right-0 top-0 flex gap-1 uppercase font-slab text-xs bg-black text-blanc px-5 py-2 items-center font-extrabold">
          <Icon name="pin" />
          Pinned Question
        </div>
      )}
      {questionOrder && !pinned && (
        <div className="absolute right-0 top-0 flex gap-1 uppercase font-slab text-xs bg-blanc px-5 py-2 items-center font-extrabold">
          Question #{questionOrder}
        </div>
      )}
      <Avatar src={avatar} alt={askedByUsername} height={68} width={68} />
      <div className="flex-1">
        <div>
          <strong className="text-lg">{askedByName}</strong> @{askedByUsername}{' '}
          • {formatRelativeDate(askedDate)}
        </div>
        <div className="font-condensed  text-[2.5rem] pt-o pb-2">
          {question}
        </div>
        <div className="large-body mb-8">{answer}</div>
        {showActions && (
          <div className="flex justify-between items-center">
            {/* Follow-Up */}
            <button className="hover:text-punch">
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
            <button className="hover:text-punch">
              {favorite ? (
                <span className="selected-action">
                  <Icon name="heartFilled" /> {favorite}
                </span>
              ) : (
                <Icon name="heart" />
              )}
            </button>

            {/* Bookmarked */}
            <button className="hover:text-punch">
              {bookmark ? (
                <Icon className="selected-action" name="bookmarkFilled" />
              ) : (
                <Icon name="bookmark" />
              )}
            </button>

            {/* Ask Again? */}
            <button className="hover:text-punch">
              {askAgain ? (
                <span className="selected-action">
                  <Icon name="reuse" /> {askAgain}
                </span>
              ) : (
                <Icon name="reuse" />
              )}
            </button>

            {/* Share */}
            <button className="hover:text-punch">
              <Icon name="share" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export { Question }
