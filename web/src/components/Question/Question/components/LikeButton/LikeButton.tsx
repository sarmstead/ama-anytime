import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { useState } from 'react'
import { Icon } from 'src/components/Icon'

// mutations
export const LIKE_QUESTION_MUTATION = gql`
  mutation LikeQuestionMutation($questionId: Int!, $userId: Int!) {
    createLike(input: { questionId: $questionId, userId: $userId }) {
      id
    }
  }
`

export const REMOVE_LIKE_QUESTION_MUTATION = gql`
  mutation RemoveLikeQuestionMutation($questionId: Int!, $userId: Int!) {
    deleteQuestionLike(questionId: $questionId, userId: $userId) {
      id
    }
  }
`

// types
interface ILikeButton {
  favorite: boolean
  numberOfFavorites: number
  questionId: number
}

const LikeButton = ({
  favorite = false,
  numberOfFavorites = 0,
  questionId,
}: ILikeButton): JSX.Element => {
  const { currentUser } = useAuth()
  const [isFavorite, setIsFavorite] = useState<boolean>(favorite)
  const [countFavorites, setCountFavorites] =
    useState<number>(numberOfFavorites)

  // set up mutations
  const [likeQuestion] = useMutation(LIKE_QUESTION_MUTATION, {
    onCompleted: () => {
      setIsFavorite(true) // update the state
      setCountFavorites((prevValue) => prevValue + 1)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const [removeLikeQuestion] = useMutation(REMOVE_LIKE_QUESTION_MUTATION, {
    onCompleted: () => {
      setIsFavorite(false) // update the state
      setCountFavorites((prevValue) => prevValue - 1)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onFavoriteClick = () => {
    likeQuestion({
      variables: {
        userId: Number(currentUser.id),
        questionId: Number(questionId),
      },
    })
  }

  const onRemoveFavoriteClick = () => {
    removeLikeQuestion({
      variables: {
        questionId: Number(questionId),
        userId: Number(currentUser.id),
      },
    })
  }

  if (currentUser || numberOfFavorites > 0) {
    // if this is a favorite
    if (isFavorite)
      return (
        <button
          className={`col-start-2 col-span-1 action selected-action ${
            currentUser && `hover:text-punch`
          }`}
          data-testid="removeFavoritedQuestion"
          onClick={onRemoveFavoriteClick}
          disabled={!currentUser}
        >
          <Icon name="heartFilled" /> {countFavorites > 0 && countFavorites}
        </button>
      )

    // otherwise, it's not a favorite
    return (
      <button
        className={`col-start-2 col-span-1 action ${
          currentUser && `hover:text-punch`
        }`}
        data-testid="favoritedQuestion"
        onClick={onFavoriteClick}
        disabled={!currentUser}
      >
        <Icon name="heart" /> {countFavorites > 0 && countFavorites}
      </button>
    )
  }

  return <span />
}

export { LikeButton }
