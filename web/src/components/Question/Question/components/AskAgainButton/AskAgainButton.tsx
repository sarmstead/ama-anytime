import { useAuth } from '@redwoodjs/auth'
import { Icon } from 'src/components/Icon'

const AskAgainButton = ({ askAgain, onAskAgainClick }) => {
  const { currentUser } = useAuth()

  if (currentUser || askAgain > 0)
    return (
      <button
        className={`col-start-3 col-span-1 flex justify-center ${
          currentUser && `hover:text-punch`
        }`}
        data-testid="askAgain"
        onClick={onAskAgainClick}
        disabled={!currentUser}
      >
        {askAgain ? (
          <span className="selected-action action">
            <Icon name="reuse" /> {askAgain}
          </span>
        ) : (
          <Icon name="reuse" />
        )}
      </button>
    )

  return <span />
}

export { AskAgainButton }
