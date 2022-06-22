import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { useEffect, useState } from 'react'
import { IconButton } from 'src/components/IconButton'

export interface INotificationsButton {
  notificationsOn: boolean
  profileId: number
}

// mutations
const CREATE_NOTIFICATION_MUTATION = gql`
  mutation CreateNotificationMutation($notificationsForId: Int, $userId: Int) {
    createNotification(
      input: { notificationsForId: $notificationsForId, userId: $userId }
    ) {
      id
    }
  }
`

const NotificationsButton = ({
  notificationsOn = false,
  profileId,
}: INotificationsButton): JSX.Element => {
  const [isNotificationsOn, setIsNotificationsOn] =
    useState<boolean>(notificationsOn)
  const { currentUser } = useAuth()

  useEffect(() => {
    setIsNotificationsOn(notificationsOn)
  }, [notificationsOn])

  const [createNotification] = useMutation(CREATE_NOTIFICATION_MUTATION, {
    onCompleted: () => {
      setIsNotificationsOn(true)
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const turnOnNotifications = () => {
    console.log('turn on notifications')
    console.log({ currentUser: currentUser.id, profileId })
    createNotification({
      variables: {
        userId: Number(currentUser.id),
        notificationsForId: profileId,
      },
    })
  }

  const turnOffNotifications = () => {
    console.log('turn off notifications')
    setIsNotificationsOn(false)
  }

  if (isNotificationsOn)
    return (
      <IconButton
        handleClick={turnOffNotifications}
        icon={{ name: 'bell' }}
        toolTip="Notifications"
        showToolTip={true}
        status="selected"
      />
    )

  return (
    <IconButton
      handleClick={turnOnNotifications}
      icon={{ name: 'bell' }}
      toolTip="Notifications"
      showToolTip={true}
      status="unselected"
    />
  )
}

export { NotificationsButton }
