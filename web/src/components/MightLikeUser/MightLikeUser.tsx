import { Avatar } from '../Avatar'
import { Button } from '../Button'

const MightLikeUser = ({ avatar, handleClick, name, username }) => {
  return (
    <div className="flex gap-3">
      <Avatar src={avatar} alt={name} />
      <div>
        {name}
        {username}
        <Button handleClick={handleClick} label="Follow" />
      </div>
    </div>
  )
}

export { MightLikeUser }
