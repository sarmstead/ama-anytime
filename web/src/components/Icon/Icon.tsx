import { Arrow } from './Arrow'
import { Bell } from './Bell'
import { Block } from './Block'
import { Bookmark } from './Bookmark'
import { BookmarkFilled } from './BookmarkFilled'
import { Close } from './Close'
import { Dots } from './Dots'
import { Comment } from './Comment'
import { CommentFilled } from './CommentFilled'
import { Flag } from './Flag'
import { Follow } from './Follow'
import { Heart } from './Heart'
import { HeartFilled } from './HeartFilled'
import { Hide } from './Hide'
import { Link } from './Link'
import { Logout } from './Logout'
import { Map } from './Map'
import { Mute } from './Mute'
import { Pin } from './Pin'
import { Reuse } from './Reuse'
import { Settings } from './Settings'
import { Share } from './Share'
import { Show } from './Show'
import { Unfollow } from './Unfollow'
import { Unmute } from './Unmute'
import { VoteDown } from './VoteDown'
import { VoteUp } from './VoteUp'

export interface IIcon {
  name:
    | 'arrow'
    | 'bell'
    | 'block'
    | 'bookmark'
    | 'bookmarkFilled'
    | 'close'
    | 'dots'
    | 'comment'
    | 'commentFilled'
    | 'flag'
    | 'follow'
    | 'hide'
    | 'heart'
    | 'heartFilled'
    | 'link'
    | 'logout'
    | 'map'
    | 'mute'
    | 'pin'
    | 'reuse'
    | 'settings'
    | 'share'
    | 'show'
    | 'unfollow'
    | 'unmute'
    | 'voteDown'
    | 'voteUp'
  className?: string
  width?: string
  height?: string
}

const Icon = ({ name, className = '', width, height }: IIcon): JSX.Element => {
  switch (name.toLowerCase()) {
    case 'arrow':
      return <Arrow className={className} width={width} height={height} />
    case 'bell':
      return <Bell className={className} width={width} height={height} />
    case 'block':
      return <Block className={className} width={width} height={height} />
    case 'bookmark':
      return <Bookmark className={className} width={width} height={height} />
    case 'bookmarkfilled':
      return (
        <BookmarkFilled className={className} width={width} height={height} />
      )
    case 'close':
      return <Close className={className} width={width} height={height} />
    case 'comment':
      return <Comment className={className} width={width} height={height} />
    case 'commentfilled':
      return (
        <CommentFilled className={className} width={width} height={height} />
      )
    case 'dots':
      return <Dots className={className} width={width} height={height} />
    case 'flag':
      return <Flag className={className} width={width} height={height} />
    case 'follow':
      return <Follow className={className} width={width} height={height} />
    case 'hide':
      return <Hide className={className} width={width} height={height} />
    case 'heart':
      return <Heart className={className} width={width} height={height} />
    case 'heartfilled':
      return <HeartFilled className={className} width={width} height={height} />
    case 'link':
      return <Link className={className} width={width} height={height} />
    case 'logout':
      return <Logout className={className} width={width} height={height} />
    case 'map':
      return <Map className={className} width={width} height={height} />
    case 'mute':
      return <Mute className={className} width={width} height={height} />
    case 'pin':
      return <Pin className={className} width={width} height={height} />
    case 'reuse':
      return <Reuse className={className} width={width} height={height} />
    case 'settings':
      return <Settings className={className} width={width} height={height} />
    case 'share':
      return <Share className={className} width={width} height={height} />
    case 'show':
      return <Show className={className} width={width} height={height} />
    case 'unfollow':
      return <Unfollow className={className} width={width} height={height} />
    case 'unmute':
      return <Unmute className={className} width={width} height={height} />
    case 'votedown':
      return <VoteDown className={className} width={width} height={height} />
    case 'voteup':
      return <VoteUp className={className} width={width} height={height} />
    default:
      return <div />
  }
}

export { Icon }
