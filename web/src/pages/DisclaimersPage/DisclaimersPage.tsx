import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading'

const DisclaimersPage = () => {
  return (
    <>
      <MetaTags title="Disclaimers" description="Disclaimers page" />
      <PageHeading title="Disclaimers" isActionsShowing={false} />
      <p>Disclaimers</p>
    </>
  )
}

export default DisclaimersPage
