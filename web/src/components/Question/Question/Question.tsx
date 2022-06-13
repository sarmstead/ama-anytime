import { Link, routes } from '@redwoodjs/router'
import { Avatar } from '../../Avatar'
import type { AvatarColor } from 'src/components/Avatar/Avatar'
import { Icon } from '../../Icon'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { useAuth } from '@redwoodjs/auth'
import { Answer } from './components/Answer/Answer'
import { Byline } from './components/Byline'
import { useState } from 'react'
import { DropdownMenu } from 'src/components/DropdownMenu'
import { ShareButton } from './components/ShareButton'
import { BookmarkButton } from './components/BookmarkButton'
import AnswerForm from './components/Answer/AnswerForm/AnswerForm'
import { LikeButton } from './components/LikeButton/LikeButton'

const DELETE_QUESTION_MUTATION = gql`
  mutation DeleteQuestionMutation($id: Int!) {
    deleteQuestion(id: $id) {
      id
    }
  }
`

export interface IUser {
  id: number
  fullName: string
  username: string
  avatar?: string
  avatarColor: AvatarColor
}

export interface IQuestion {
  answer?: string
  answeredBy: IUser
  askAgain?: number
  askedBy: IUser
  askedOn: string
  bookmark?: boolean
  className?: string
  favorite?: number
  followUp?: number
  pinned?: boolean
  question: string
  questionId: string
  questionOrder?: number
  showActions?: boolean
  updatedOn?: string
  rerouteOnDelete?: () => void
}

const Question = ({
  answer,
  answeredBy,
  askAgain,
  askedBy,
  askedOn,
  bookmark,
  className = '',
  favorite,
  followUp,
  pinned = false,
  question,
  questionId,
  showActions = true,
  rerouteOnDelete,
  updatedOn,
}: IQuestion): JSX.Element => {
  const { currentUser } = useAuth()
  const [isQuestionOptionsShowing, setIsQuestionOptionsShow] = useState(false)

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

  const toggleQuestionOptions = () => {
    setIsQuestionOptionsShow((prevValue) => !prevValue)
  }

  const onAskAgainClick = () => {}
  const onFollowUpClick = () => {}
  const onFavoriteClick = () => {}

  return (
    <div
      className={`flex gap-5 pt-9 pl-14 pr-10 pb-9 relative border-b-2 border-black z-question ${className}`}
    >
      <div className="absolute right-10 top-7 z-optionsMenu">
        {/* TODO: Display different options based on who is logged in */}
        {isQuestionOptionsShowing && (
          <DropdownMenu
            isShowing={true}
            onClickOutside={() => toggleQuestionOptions()}
            options={[
              {
                label: 'Hide',
                icon: { name: 'hide' },
                action: () => {},
              },
              {
                label: 'Report',
                icon: { name: 'flag' },
                action: () => {},
              },
              {
                label: 'Delete',
                icon: { name: 'delete' },
                action: () => {},
              },
            ]}
            className="absolute -right-2 top-8"
            direction="top right"
            // triggerRef={triggerRef}
          />
        )}
        <button onClick={() => toggleQuestionOptions()}>
          <Icon name="dots" />
        </button>
      </div>
      <Avatar
        avatarColor={askedBy.avatarColor}
        className="z-avatar relative"
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
        <div data-testid="askedBy" className="z-byline">
          <Byline person={askedBy} displayDate={askedOn} />
        </div>
        <div
          className="font-condensed text-[2.5rem] leading-none pt-o pb-8 relative"
          data-testid="question"
        >
          {/* connect question and answer */}
          {answer && (
            <div className="h-full w-0 border-l-2 border-black block absolute -left-14 z-avatarConnector" />
          )}
          <Link
            to={routes.question({ id: questionId })}
            className="hover:text-punch"
          >
            {question}
          </Link>
        </div>
        {/* display the answer */}
        {answer && (
          <Answer
            answer={answer}
            answeredBy={answeredBy}
            updatedOn={updatedOn}
          />
        )}
        {!answer && answeredBy.id === currentUser.id && (
          <AnswerForm answeredBy={currentUser} className="-ml-[5.25rem]" />
        )}
      </div>
    </div>
  )
}

export { Question }
