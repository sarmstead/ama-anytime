import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FollowingPage = () => {
  return (
    <>
      <MetaTags title="Following" description="Following page" />

      <h1>FollowingPage</h1>
      <p>
        Find me in <code>./web/src/pages/FollowingPage/FollowingPage.tsx</code>
      </p>
      <p>
        My default route is named <code>following</code>, link to me with `
        <Link to={routes.following()}>Following</Link>`
      </p>
    </>
  )
}

export default FollowingPage
