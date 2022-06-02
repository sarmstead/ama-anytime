import { Bookmark } from './Bookmark'
import { BookmarkFilled } from './BookmarkFilled'
import { Dots } from './Dots'
import { Comment } from './Comment'
import { CommentFilled } from './CommentFilled'
import { Heart } from './Heart'
import { HeartFilled } from './HeartFilled'
import { Link } from './Link'
import { Map } from './Map'
import { Pin } from './Pin'
import { Reuse } from './Reuse'
import { Share } from './Share'

interface IIcon {
  name:
    | 'bookmark'
    | 'bookmarkFilled'
    | 'dots'
    | 'comment'
    | 'commentFilled'
    | 'heart'
    | 'heartFilled'
    | 'link'
    | 'map'
    | 'pin'
    | 'reuse'
    | 'share'
  className?: string
  width?: string
  height?: string
}

const Icon = ({ name, className = '', width, height }: IIcon): JSX.Element => {
  switch (name.toLowerCase()) {
    case 'bookmark':
      return <Bookmark className={className} width={width} height={height} />
    case 'bookmarkfilled':
      return (
        <BookmarkFilled className={className} width={width} height={height} />
      )
    case 'comment':
      return <Comment className={className} width={width} height={height} />
    case 'commentfilled':
      return (
        <CommentFilled className={className} width={width} height={height} />
      )
    case 'dots':
      return <Dots className={className} width={width} height={height} />
    case 'heart':
      return <Heart className={className} width={width} height={height} />
    case 'heartfilled':
      return <HeartFilled className={className} width={width} height={height} />
    case 'link':
      return <Link className={className} width={width} height={height} />
    case 'map':
      return <Map className={className} width={width} height={height} />
    case 'pin':
      return <Pin className={className} width={width} height={height} />
    case 'reuse':
      return <Reuse className={className} width={width} height={height} />
    case 'share':
      return <Share className={className} width={width} height={height} />
    default:
      return <div />
  }
}

export { Icon }
