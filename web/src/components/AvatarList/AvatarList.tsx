import { Avatar } from '../Avatar'

interface IAvatarList {
  avatars: {
    src: string
    alt: string
  }[]
}

const AvatarList = ({ avatars }: IAvatarList): JSX.Element => {
  return (
    <ul className="list-none m-0 p-0 flex">
      {avatars &&
        avatars.map((avatar, index) => (
          <li key={index} className="-ml-2 border-blanc border-2 rounded-full">
            <Avatar src={avatar.src} alt={avatar.alt} />
          </li>
        ))}
    </ul>
  )
}

export { AvatarList }
