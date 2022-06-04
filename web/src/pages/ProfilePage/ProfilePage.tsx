import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import { ProfileDetails } from 'src/components/ProfileDetails'
import { ProfileDetails as ProfileDetailsData } from 'src/components/ProfileDetails/ProfileDetails.mocks'
import { Tabs } from 'src/components/Tabs'

interface IProfilePage {
  username?: string
}

const ProfilePage = ({ username = '' }: IProfilePage): JSX.Element => {
  const [view, setView] = useState<string>('answered')

  const tabsData = [
    {
      id: 'answered',
      name: 'Answered Questions',
    },
    {
      id: 'unanswered',
      name: 'Unanswered Questions',
    },
    {
      id: 'asked',
      name: "Questions They've Asked",
    },
  ]

  const switchTab = (updatedView: string) => {
    // update state
    setView(updatedView)

    // update router
    navigate(routes.profile({ username: username, tab: updatedView }))
  }

  return (
    <>
      <MetaTags title="Profile" description="Profile page" />
      {/* profile details */}
      <div className="border-b-2 border-black bg-[#E4E2DD]/[.45] mix-blend-multiply">
        <ProfileDetails
          {...ProfileDetailsData}
          isMe={username ? false : true}
        />
        <div className="pl-12 pr-8 ">
          <Tabs tabs={tabsData} selected={view} switchTab={switchTab} />
        </div>
      </div>

      {/* questions answered */}
      {view === 'answered' && <div>questions answered</div>}

      {/* unanswered questions */}
      {view === 'unanswered' && <div>unanswered questions</div>}

      {/* questions asked */}
      {view === 'asked' && <div>questions asked</div>}
    </>
  )
}

export default ProfilePage
