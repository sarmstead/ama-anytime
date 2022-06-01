import { AvatarList } from './AvatarList'
import { avatars as data } from './AvatarList.mocks'

export const generated = () => {
  return <AvatarList avatars={data} />
}

export default { title: 'Components/AvatarList' }
