import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading'
import QuestionCell from 'src/components/Question/QuestionCell'

type QuestionPageProps = {
  id: number
}

const QuestionPage = ({ id }: QuestionPageProps) => {
  return (
    <>
      {/* TODO: Add Meta Data */}
      <MetaTags title="Question" description="Question page" />

      <PageHeading title="Question" isActionsShowing={false} />

      <QuestionCell id={Number(id)} />
    </>
  )
}

export default QuestionPage
