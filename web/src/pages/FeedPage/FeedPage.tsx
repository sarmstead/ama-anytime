import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading'

const FeedPage = () => {
  return (
    <>
      <MetaTags title="Feed" description="Feed page" />

      <PageHeading title="My Feed" isActionsShowing={false} />
    </>
  )
}

export default FeedPage
