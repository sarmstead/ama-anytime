import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import EditProfileCell from 'src/components/Profile/EditProfileCell/EditProfileCell'

const ProfileSettingsPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="ProfileSettings" description="ProfileSettings page" />
      <EditProfileCell id={currentUser.id} />
    </>
  )
}

export default ProfileSettingsPage
