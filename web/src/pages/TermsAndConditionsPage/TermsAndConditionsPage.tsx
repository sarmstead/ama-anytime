import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading'

const TermsAndConditionsPage = () => {
  return (
    <>
      <MetaTags
        title="TermsAndConditions"
        description="TermsAndConditions page"
      />
      <PageHeading title="Terms and Conditions" isActionsShowing={false} />
      <p>Terms and Conditions</p>
    </>
  )
}

export default TermsAndConditionsPage
