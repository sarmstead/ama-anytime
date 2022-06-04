import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading'

const NotificationsPage = () => {
  return (
    <>
      <MetaTags title="Notifications" description="Notifications page" />
      <PageHeading title="Notifications" isActionsShowing={true} />
    </>
  )
}

export default NotificationsPage
