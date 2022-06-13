import { useAuth } from '@redwoodjs/auth'
import { Footer } from 'src/components/Footer'
import { Navigation } from 'src/components/Navigation'
import { LoggedInUser } from 'src/components/LoggedInUser/LoggedInUser'
import { SettingsSubnav } from 'src/components/SettingsSubnav'

type SettingLayoutProps = {
  children?: React.ReactNode
}

const SettingLayout = ({ children }: SettingLayoutProps) => {
  const { isAuthenticated, currentUser } = useAuth()

  return (
    <div className="grid grid-cols-12">
      {/* NAVIGATION */}
      <div className="col-span-3">
        <div className="min-h-screen relative border-r-2 border-black">
          {/* write tests for which navigation we're showing  */}
          {isAuthenticated ? (
            <>
              <Navigation notifications={3} />
              <div className="absolute left-0 bottom-0 w-full">
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

      <aside className="col-span-3 relative">
        <div className="h-screen overflow-y-auto w-full border-r-2 border-black pt-24">
          <SettingsSubnav />
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="col-span-6 relative">
        <div className="h-screen overflow-y-auto w-full grid grid-cols-6">
          <div className="col-span-5 pl-14">{children}</div>
          <div className="col-span-6">
            <Footer />
          </div>
        </div>
      </main>
    </div>
  )
}

export { SettingLayout }
