import { useAuth } from '@redwoodjs/auth'
import { Footer } from 'src/components/Footer/Footer'
import { Navigation } from 'src/components/Navigation'
import { LoggedInUser } from 'src/components/LoggedInUser/LoggedInUser'
import { SearchInput } from 'src/components/SearchInput'
import RecentlyCell from 'src/components/Recently/RecentlyCell'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const { isAuthenticated, currentUser } = useAuth()

  return (
    <div className="grid grid-cols-12">
      {/* NAVIGATION */}
      <div className="col-span-3 z-50 relative">
        <div className="min-h-screen relative border-r-2 border-black">
          {/* write tests for which navigation we're showing  */}
          {isAuthenticated && currentUser ? (
            <>
              <Navigation notifications={3} />
              <div className="absolute left-0 bottom-0 w-full">
                <LoggedInUser
                  avatar={currentUser.avatar}
                  firstName={'Amy'}
                  lastName={'Dutton'}
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
      <main className="col-span-6 relative">
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
            <RecentlyCell currentUserId={currentUser?.id} />
            <div>
              <button className="text-button">Show More</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export { AppLayout }
