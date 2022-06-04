import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading'

const PrivacyPolicyPage = () => {
  return (
    <>
      <MetaTags title="Privacy Policy" description="Privacy Policy page" />
      <PageHeading title="Privacy Policy" isActionsShowing={false} />
      <p>Privacy Policy</p>
    </>
  )
}

export default PrivacyPolicyPage
