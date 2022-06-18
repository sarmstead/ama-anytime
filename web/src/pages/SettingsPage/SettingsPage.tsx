import { useAuth } from '@redwoodjs/auth'
import { MetaTags } from '@redwoodjs/web'
import EditAccountCell from 'src/components/Account/EditAccountCell/EditAccountCell'
import { PasswordForm } from 'src/components/Account/PasswordForm/PasswordForm'

const SettingsPage = () => {
  const { currentUser } = useAuth()

  return (
    <>
      <MetaTags title="Settings" description="Settings page" />
      <h1 className="page-title settings-page-top">My Account</h1>
      <EditAccountCell username={currentUser.username} />
      <h1 className="page-title settings-page-top">Update Password</h1>
      <PasswordForm username={currentUser.username} />
    </>
  )
}

export default SettingsPage
