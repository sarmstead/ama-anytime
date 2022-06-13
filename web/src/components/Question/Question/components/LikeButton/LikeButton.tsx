import { useAuth } from '@redwoodjs/auth'
import { Icon } from 'src/components/Icon'

const LikeButton = ({ favorite, onFavoriteClick }) => {
  const { currentUser } = useAuth()

  if (currentUser || favorite > 0) {
    return (
      <button
        className={`col-start-2 col-span-1 ${
          currentUser && `hover:text-punch`
        }`}
        data-testid="favoritedQuestion"
        onClick={onFavoriteClick}
        disabled={!currentUser}
      >
        {favorite ? (
          <span className="selected-action">
            <Icon name="heartFilled" /> {favorite}
          </span>
        ) : (
          <Icon name="heart" />
        )}
      </button>
    )
  }

  return <span />
}

export { LikeButton }
