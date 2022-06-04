import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading'
import { Question } from 'src/components/Question'
import { QuestionOrder as data } from 'src/components/Question/Question.mocks'

interface IQuestionPage {
  id: string
}

const QuestionPage = ({ id }: IQuestionPage) => {
  return (
    <>
      <MetaTags title="Question" description="Question page" />
      <PageHeading isBackShowing={true} title="Thread" />
      <Question {...data} questionId={id} questionOrder={0} />
    </>
  )
}

export default QuestionPage
