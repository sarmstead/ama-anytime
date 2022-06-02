import { Dots } from './Dots'
import { Comment } from './Comment'
import { Heart } from './Heart'
import { Link } from './Link'
import { Map } from './Map'
import { Pin } from './Pin'
import { Reuse } from './Reuse'
import { Share } from './Share'

interface IIcon {
  name: string
  className?: string
  width?: string
  height?: string
}

const Icon = ({ name, className = '', width, height }: IIcon): JSX.Element => {
  switch (name.toLowerCase()) {
    case 'comment':
      return <Comment className={className} width={width} height={height} />
    case 'dots':
      return <Dots className={className} width={width} height={height} />
    case 'heart':
      return <Heart className={className} width={width} height={height} />
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
