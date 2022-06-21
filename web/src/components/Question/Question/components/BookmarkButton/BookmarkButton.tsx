import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { useState } from 'react'
import { Icon } from 'src/components/Icon'

interface IBookmarkButton {
  bookmarked: boolean
  questionId: number
}

const DELETE_BOOKMARK_QUESTION_MUTATION = gql`
  mutation deleteBookmarkQuestionMutation($questionId: Int!, $userId: Int!) {
    deleteQuestionBookmark(questionId: $questionId, userId: $userId) {
      id
    }
  }
`

const BOOKMARK_QUESTION_MUTATION = gql`
  mutation bookmarkQuestionMutation($questionId: Int!, $userId: Int!) {
    createBookmark(input: { userId: $userId, questionId: $questionId }) {
      id
    }
  }
`

const BookmarkButton = ({ bookmarked, questionId }: IBookmarkButton) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmarked)
  const { currentUser } = useAuth()

  // TODO: Add loading animation
  const [createBookmark] = useMutation(BOOKMARK_QUESTION_MUTATION, {
    onCompleted: () => {
      setIsBookmarked(true)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const [removeBookmark] = useMutation(DELETE_BOOKMARK_QUESTION_MUTATION, {
    onCompleted: () => {
      setIsBookmarked(false)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const handleAddBookmark = () => {
    createBookmark({
      variables: {
        userId: Number(currentUser.id),
        questionId: Number(questionId),
      },
    })
  }

  const handleRemoveBookmark = () => {
    removeBookmark({
      variables: {
        userId: Number(currentUser.id),
        questionId: Number(questionId),
      },
    })
  }

  // if no one is logged in, don't display the button
  if (!currentUser) {
    return <span />
  }

  // if the user bookmarked this question
  if (isBookmarked)
    return (
      <button
        className="col-start-4 col-span-1 hover:text-punch"
        data-testid="bookmarkButton"
        onClick={handleRemoveBookmark}
      >
        <span data-testid="bookmarkFilled">
          <Icon className="selected-action action" name="bookmarkFilled" />
        </span>
      </button>
    )

  // otherwise...
  return (
    <button
      className="col-start-4 col-span-1 hover:text-punch"
      data-testid="bookmarkButton"
      onClick={handleAddBookmark}
    >
      <span data-testid="bookmarkEmpty">
        <Icon name="bookmark" />
      </span>
    </button>
  )
}

export { BookmarkButton }
