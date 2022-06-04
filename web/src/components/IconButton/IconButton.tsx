import { Icon, IIcon } from '../Icon'

export interface IIconButton {
  handleClick?: () => void
  icon: IIcon
}

// TODO: Add label / tooltip on rollover
const IconButton = ({ handleClick, icon }: IIconButton): JSX.Element => {
  return (
    <button
      className="rounded-full h-9 w-9 border-2 border-black text-black flex items-center justify-center hover:bg-black hover:text-blanc"
      data-testid="iconButton"
      onClick={handleClick}
    >
      <Icon {...icon} width="20" height="20" />
    </button>
  )
}

export { IconButton }
