import { Navigation } from 'src/components/Navigation'
import { Profile } from 'src/components/Profile'

type AppLayoutProps = {
  children?: React.ReactNode
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div className="grid grid-cols-12 gap-5">
      <div className="col-span-3">
        <div className="min-h-screen relative border-r-2 border-black">
          <Navigation notifications={3} />
          <div className="absolute left-0 bottom-0 w-full">
            <Profile
              avatar="https://i.pravatar.cc/150?u=a042581f4e29026704d"
              firstName={'Amy'}
              lastName={'Dutton'}
              screenname={'@selfteachme'}
            />
          </div>
        </div>
      </div>
      <main className="col-span-6">
        <div className="h-screen overflow-y-auto w-full">{children}</div>
      </main>
      <aside className="col-span-3">
        <div className="h-screen overflow-y-auto border-l-2 border-black">
          <div>Search</div>
          <div>You Might Like</div>
          <div>Recently</div>
        </div>
      </aside>
    </div>
  )
}

export default AppLayout
