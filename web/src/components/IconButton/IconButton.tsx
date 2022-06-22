import { useState } from 'react'
import { Icon } from '../Icon'
import { IIcon } from '../Icon/Icon'
import { Tooltip } from '../Tooltip'

export interface IIconButton {
  handleClick?: () => void
  icon: IIcon
  showToolTip?: boolean
  status?: 'selected' | 'unselected' | ''
  toolTip?: string
}

const IconButton = ({
  handleClick,
  icon,
  showToolTip,
  status = '',
  toolTip,
}: IIconButton): JSX.Element => {
  const [isToolTipShowing, setIsToolTipShowing] = useState<boolean>(false)

  const toggleToolTip = () => {
    setIsToolTipShowing((prevValue) => !prevValue)
  }

  return (
    <button
      className={`rounded-full h-9 w-9 border-2 flex items-center justify-center hover:bg-black hover:text-blanc hover:border-black relative
        ${status === 'unselected' && `border-black text-black`}
        ${status === 'selected' && `border-punch bg-punch text-white`}
      `}
      data-testid="iconButton"
      onClick={handleClick}
      onMouseEnter={toggleToolTip}
      onMouseLeave={toggleToolTip}
    >
      <Icon {...icon} width="20" height="20" />
      {showToolTip && isToolTipShowing && (
        <Tooltip
          text={toolTip}
          isShowing={showToolTip}
          className="absolute top-10 left-1/2 -translate-x-1/2"
        />
      )}
    </button>
  )
}

export { IconButton }
