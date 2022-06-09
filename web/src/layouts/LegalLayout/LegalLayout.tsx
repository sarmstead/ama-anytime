import { Footer } from 'src/components/Footer'
import { Navigation } from 'src/components/Navigation'
import { Profile } from 'src/components/Profile/Profile'

type LegalLayoutProps = {
  children?: React.ReactNode
}

const LegalLayout = ({ children }: LegalLayoutProps) => {
  return (
    <div className="grid grid-cols-12">
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
        <div className="h-screen overflow-y-auto w-full">
          {children}
          <Footer />
        </div>
      </main>

      {/* ASIDE */}
      <aside className="col-span-3">
        <div className="h-screen pl-8 py-4 overflow-y-auto border-l-2 border-black">
          &nbsp;
        </div>
      </aside>
    </div>
  )
}

export { LegalLayout }
