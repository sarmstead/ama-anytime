import { Avatar } from '../Avatar'
import { Button } from '../Button'

export interface IMightLikeUser {
  avatar: string
  handleClick?: () => void
  name: string
  username: string
}

const MightLikeUser = ({
  avatar,
  handleClick,
  name,
  username,
}: IMightLikeUser): JSX.Element => {
  return (
    <div className="flex gap-3">
      <Avatar src={avatar} alt={name} width={72} height={72} />
      <div className="text-sm">
        <div className="font-bold">{name}</div>
        <div className="mb-1">{username}</div>
        <Button handleClick={handleClick} label="Follow" size="small" />
      </div>
    </div>
  )
}

export { MightLikeUser }
