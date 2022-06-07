import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const ProfileSettingsPage = () => {
  return (
    <>
      <MetaTags title="ProfileSettings" description="ProfileSettings page" />

      <h1>ProfileSettingsPage</h1>
      <p>
        Find me in <code>./web/src/pages/ProfileSettingsPage/ProfileSettingsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>profileSettings</code>, link to me with `
        <Link to={routes.profileSettings()}>ProfileSettings</Link>`
      </p>
    </>
  )
}

export default ProfileSettingsPage
