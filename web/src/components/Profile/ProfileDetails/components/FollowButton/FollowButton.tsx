import { useAuth } from '@redwoodjs/auth'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import { useEffect, useState } from 'react'
import { Button } from 'src/components/Button'

export interface IFollowButton {
  followOn?: boolean
  profileId: number
}

// const FOLLOW_MUTATION = gql``

// const UNFOLLOW_MUTATION = gql``

const FollowButton = ({
  followOn = false,
  profileId,
}: IFollowButton): JSX.Element => {
  const [isFollowOn, setIsFollowOn] = useState<boolean>(followOn)
  const { currentUser } = useAuth()

  useEffect(() => {
    setIsFollowOn(followOn)
  }, [followOn])

  // const [followUser] = useMutation(FOLLOW_MUTATION, {
  //   onCompleted: () => {
  //     setIsFollowOn(true)
  //   },
  //   onError: (error) => {
  //     toast.error(error.message)
  //   },
  // })

  // const [unfollowUser] = useMutation(UNFOLLOW_MUTATION, {
  //   onCompleted: () => {
  //     setIsFollowOn(false)
  //   },
  //   onError: (error) => {
  //     toast.error(error.message)
  //   },
  // })

  const handleFollowUser = () => {
    // followUser({
    //   variables: { profileId },
    // })
  }

  const handleUnfollowUser = () => {
    // unfollowUser({
    //   variables: { profileId },
    // })
  }

  if (isFollowOn)
    return (
      <Button style="solid" label="Follow" handleClick={handleFollowUser} />
    )

  return (
    <Button style="inverted" label="Follow" handleClick={handleUnfollowUser} />
  )
}

export { FollowButton }
