import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading'

const FeedPage = () => {
  const { isAuthenticated, currentUser, logOut } = useAuth()

  console.log({ currentUser })

  return (
    <>
      {/* TODO: Add Meta Data */}
      <MetaTags title="Feed" description="Feed page" />

      <PageHeading title="My Feed" isActionsShowing={false} />

      {isAuthenticated ? (
        <div>
          <span>Logged in</span>{' '}
          <button type="button" onClick={logOut}>
            Logout
          </button>
        </div>
      ) : (
        <Link to={routes.login()}>Login</Link>
      )}
    </>
  )
}

export default FeedPage
