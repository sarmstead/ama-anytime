import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading'

const WaitingListPage = () => {
  return (
    <>
      <MetaTags title="WaitingList" description="WaitingList page" />
      <PageHeading title="Waiting List" isActionsShowing={false} />
    </>
  )
}

export default WaitingListPage
