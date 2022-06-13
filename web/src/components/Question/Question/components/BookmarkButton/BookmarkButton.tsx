import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { useState } from 'react'
import { Icon } from 'src/components/Icon'

interface IBookmarkButton {
  currentUserId: number
  bookmarked: boolean
  questionId: number
}

// const REMOVE_BOOKMARK_QUESTION_MUTATION = gql`
//   mutation DeleteQuestionMutation($id: Int!) {
//     deleteQuestion(id: $id) {
//       id
//     }
//   }
// `

// const BOOKMARK_QUESTION_MUTATION = gql`
//   mutation BOOKMARK_QUESTION_MUTATION {
//     createBookmark(input: { userId: $userId, questionId: $questionId }) {
//       question {
//         question
//       }
//       user {
//         id
//         fullName
//       }
//     }
//   }
// `

const BookmarkButton = ({
  bookmarked,
  currentUserId,
  questionId,
}: IBookmarkButton) => {
  const [isBookmarked, setIsBookmarked] = useState(bookmarked)

  // const [createBookmark, { loading, error }] = useMutation(
  //   BOOKMARK_QUESTION_MUTATION,
  //   {
  //     onCompleted: () => {
  //       setIsBookmarked(true)
  //     },
  //     onError: (error) => {
  //       toast.error(error.message)
  //     },
  //   }
  // )

  const handleClick = () => {
    // createBookmark({
    //   variables: { userId: currentUserId, questionId: questionId },
    // })
  }

  return (
    <button
      className="col-start-4 col-span-1 hover:text-punch"
      data-testid="bookmarkButton"
      onClick={handleClick}
    >
      {isBookmarked ? (
        <span data-testid="bookmarkFilled">
          <Icon className="selected-action" name="bookmarkFilled" />
        </span>
      ) : (
        <span data-testid="bookmarkEmpty">
          <Icon name="bookmark" />
        </span>
      )}
    </button>
  )
}

export { BookmarkButton }
