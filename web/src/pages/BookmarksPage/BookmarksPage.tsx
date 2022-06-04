import { MetaTags } from '@redwoodjs/web'
import { PageHeading } from 'src/components/PageHeading/PageHeading'

const BookmarksPage = () => {
  return (
    <>
      <MetaTags title="Bookmarks" description="Bookmarks page" />
      <PageHeading title="My Bookmarks" isActionsShowing={true} />
      <div className="border-t-2 border-black">Questions</div>
    </>
  )
}

export default BookmarksPage
