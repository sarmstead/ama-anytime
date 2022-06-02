import { Navigation } from 'src/components/Navigation'
import { Profile } from 'src/components/Profile'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      {/* NAVIGATION */}
      <div className="col-span-3">
        <div className="min-h-screen relative border-r-2 border-black">
          <Navigation notifications={3} />
          <div className="absolute left-0 bottom-0 w-full">
            <Profile
              avatar="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              firstName={'Amy'}
              lastName={'Dutton'}
              username={'selfteachme'}
            />
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <main className="col-span-6">
        <div className="h-screen overflow-y-auto w-full">{children}</div>
      </main>

      {/* ASIDE */}
      <aside className="col-span-3">
        <div className="h-screen pl-8 py-4 overflow-y-auto border-l-2 border-black">
          {/* SEARCH */}
          <div className="mb-9">Search</div>

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
            <div>
              <button className="text-button">Show More</button>
            </div>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default AppLayout
