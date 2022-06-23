import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { useEffect, useState } from 'react'
import ProfileCell from 'src/components/Profile/ProfileCell/ProfileCell'
import QuestionsCell from 'src/components/Question/QuestionsCell/QuestionsCell'
import QuestionsWithoutAnswersCell from 'src/components/Question/QuestionsWithoutAnswersCell/QuestionsWithoutAnswersCell'
import QuestionsWithAnswersCell from 'src/components/Question/QuestionsWithAnswersCell/QuestionsWithAnswersCell'
import { Tabs } from 'src/components/Tabs'
import { useAuth } from '@redwoodjs/auth'

interface IProfilePage {
  username?: string
}

const ProfilePage = ({ username = '' }: IProfilePage) => {
  const [view, setView] = useState<string>('answered')
  const [currentUsername, setCurrentUsername] = useState(username)
  const { currentUser } = useAuth()

  useEffect(() => {
    // if a username is passed in, set the current user to that
    if (username) {
      setCurrentUsername(username)
    } // else if the user is logged in, we're on their profile page
    else if (currentUser?.username) {
      setCurrentUsername(currentUser.username)
    } // otherwise, the user should be redirected to the login page (through routes)
  }, [username, currentUser])

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
      name:
        !username || username === currentUser?.username
          ? "Questions I've Asked"
          : "Questions They've Asked",
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
      <div className="border-b-2 border-black bg-[#E4E2DD]/[.45]">
        <ProfileCell
          isMe={!username || username === currentUser?.username}
          username={currentUsername}
        />
        <div className="pl-12 pr-8 ">
          <Tabs tabs={tabsData} selected={view} switchTab={switchTab} />
        </div>
      </div>

      {/* questions answered */}
      {view === 'answered' && (
        <QuestionsWithAnswersCell answeredByUsername={currentUsername} />
      )}

      {/* unanswered questions */}
      {view === 'unanswered' && (
        <QuestionsWithoutAnswersCell answeredByUsername={currentUsername} />
      )}

      {/* questions asked */}
      {view === 'asked' && <QuestionsCell askedByUsername={currentUsername} />}
    </>
  )
}

export default ProfilePage
