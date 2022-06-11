import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useState } from 'react'
import ProfileCell from 'src/components/Profile/ProfileCell/ProfileCell'
import QuestionsCell from 'src/components/Question/QuestionsCell/QuestionsCell'
import { Tabs } from 'src/components/Tabs'
import { useAuth } from '@redwoodjs/auth'

interface IProfilePage {
  username?: string
}

const ProfilePage = ({ username = '' }: IProfilePage) => {
  const [view, setView] = useState<string>('answered')
  const { currentUser } = useAuth()

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
        <ProfileCell
          isMe={!!username}
          username={username ? username : currentUser.username}
        />
        <div className="pl-12 pr-8 ">
          <Tabs tabs={tabsData} selected={view} switchTab={switchTab} />
        </div>
      </div>

      {/* questions answered */}
      {view === 'answered' && (
        <QuestionsCell
          answeredByUsername={username ? username : currentUser.username}
          answerIsEmpty={false}
        />
      )}

      {/* unanswered questions */}
      {view === 'unanswered' && (
        <QuestionsCell
          answeredByUsername={username ? username : currentUser.username}
          answerIsEmpty={true}
        />
      )}

      {/* questions asked */}
      {view === 'asked' && (
        <QuestionsCell
          askedByUsername={username ? username : currentUser.username}
        />
      )}
    </>
  )
}

export default ProfilePage
