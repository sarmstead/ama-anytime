import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading'
import QuestionsCell from 'src/components/Question/QuestionsCell/QuestionsCell'

interface ITagPage {
  tag: string
}

const TagPage = ({ tag }: ITagPage) => {
  return (
    <>
      <MetaTags title="Tag" description="Tag page" />

      <PageHeading title={`Tagged #${tag}`} />

      {/* TODO: Limit Questions to items tagged with */}
      <QuestionsCell />
    </>
  )
}

export default TagPage
