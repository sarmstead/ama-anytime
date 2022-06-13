import { useAuth } from '@redwoodjs/auth'
import { Footer } from 'src/components/Footer/Footer'
import { Navigation } from 'src/components/Navigation'
import { LoggedInUser } from 'src/components/LoggedInUser/LoggedInUser'
import { SearchInput } from 'src/components/SearchInput'
import RecentlyCell from 'src/components/Recently/RecentlyCell'
import { useState } from 'react'
import { Toaster } from '@redwoodjs/web/toast'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { isAuthenticated, currentUser } = useAuth()
  const [recentQuestionsSkip, setRecentQuestionsSkip] = useState(0)

  const RECENT_QUESTIONS_TAKE = 8

  const showNewRecentQuestions = () => {
    setRecentQuestionsSkip((prevValue) => prevValue + RECENT_QUESTIONS_TAKE)
  }

  return (
    <>
      <Toaster toastOptions={{ className: 'rw-toast', duration: 6000 }} />
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
            {isAuthenticated && currentUser ? (
              <>
                <RecentlyCell
                  currentUserId={currentUser?.id}
                  skip={recentQuestionsSkip}
                  take={RECENT_QUESTIONS_TAKE}
                />
              </>
            ) : (
              <p>New to AMA Anytime?</p>
            )}
          </div>
        </aside>
      </div>
    </>
  )
}

export { AppLayout }
