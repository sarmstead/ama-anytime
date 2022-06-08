import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const FollowersPage = () => {
  return (
    <>
      <MetaTags title="Followers" description="Followers page" />

      <h1>FollowersPage</h1>
      <p>
        Find me in <code>./web/src/pages/FollowersPage/FollowersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>followers</code>, link to me with `
        <Link to={routes.followers()}>Followers</Link>`
      </p>
    </>
  )
}

export default FollowersPage
