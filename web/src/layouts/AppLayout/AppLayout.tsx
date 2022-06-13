import { useAuth } from '@redwoodjs/auth'
import { Footer } from 'src/components/Footer/Footer'
import { Navigation } from 'src/components/Navigation'
import { LoggedInUser } from 'src/components/LoggedInUser/LoggedInUser'
import { SearchInput } from 'src/components/SearchInput'
import RecentlyCell from 'src/components/Recently/RecentlyCell'
import { useState } from 'react'
import { Modal } from 'src/components/Modal'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { isAuthenticated, currentUser } = useAuth()
  const [recentQuestionsSkip, setRecentQuestionsSkip] = useState(0)

  const RECENT_QUESTIONS_TAKE = 4

  const showNewRecentQuestions = () => {
    setRecentQuestionsSkip((prevValue) => prevValue + RECENT_QUESTIONS_TAKE)
  }

  return (
    <div className="grid grid-cols-12">
      {/* NAVIGATION */}
      <div className="col-span-3 relative">
        <div className="min-h-screen relative border-r-2 border-black">
          {/* write tests for which navigation we're showing  */}
          {isAuthenticated && currentUser ? (
            <>
              <Navigation notifications={3} />
              <div className="absolute left-0 bottom-0 w-full">
                {/* TODO: Make "Amy Dutton" dynamic" */}
                <LoggedInUser
                  avatar={currentUser.avatar}
                  fullName={currentUser.fullName}
                  username={currentUser.username}
                />
              </div>
            </>
          ) : (
            <div>Figure it out</div>
          )}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="col-span-6">
        <div className="h-screen overflow-y-auto w-full">
          {children}
          <Footer />
        </div>
      </main>

      {/* ASIDE */}
      <aside className="col-span-3">
        <div className="h-screen pl-8 py-4 overflow-y-auto border-l-2 border-black">
          {/* SEARCH */}
          <div className="mb-9">
            <SearchInput />
          </div>

          {isAuthenticated && currentUser ? (
            <>
              {/* YOU MIGHT LIKE */}
              <div className="mb-24 flex flex-col gap-7">
                <h3 className="aside-heading">You might like</h3>
                <div>
                  <button className="text-button">Show More</button>
                </div>
              </div>

              {/* RECENTLY */}
              <div className="mb-24 flex flex-col gap-7">
                <h3 className="aside-heading">Recently</h3>
                <RecentlyCell
                  currentUserId={currentUser?.id}
                  skip={recentQuestionsSkip}
                  take={RECENT_QUESTIONS_TAKE}
                />
                <div>
                  {/* TODO: DISABLE BUTTON WHEN I'VE LOADED IN ALL THE QUESTIONS */}
                  <button
                    className="text-button"
                    onClick={showNewRecentQuestions}
                  >
                    Show More
                  </button>
                </div>
              </div>
            </>
          ) : (
            <p>New to AMA Anytime?</p>
          )}
          {/* TODO: Style New to AMA Anytime */}
        </div>
      </aside>
    </div>
  )
}

export { AppLayout }
