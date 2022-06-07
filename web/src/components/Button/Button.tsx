import { Icon } from '../Icon'
import { IIcon } from '../Icon/Icon'

export interface IButton {
  className?: string
  label: string
  handleClick?: () => void
  size?: 'small' | 'large'
  style?: 'solid' | 'inverted' | 'none' | 'underline'
  icon?: IIcon
  iconSide?: 'left' | 'right'
}

const Button = ({
  className = '',
  label,
  handleClick,
  size = 'large',
  style = 'inverted',
  icon,
  iconSide,
}: IButton): JSX.Element => {
  return (
    <button
      className={`rounded-3xl font-slab uppercase cursor-pointer ${className} ${size} ${
        style === 'inverted' &&
        `bg-transparent hover:bg-punch text-black hover:text-white border-2 border-black hover:border-punch`
      } ${style === 'solid' && `bg-punch hover:bg-veridianGreen text-white`} ${
        style === 'none' && `bg-transparent text-black hover:text-punch`
      } ${
        style === 'underline' &&
        `underline hover:no-underline bg-transparent text-black hover:text-punch`
      } ${
        iconSide === 'left' &&
        'flex flex-row-reverse gap-2 items-center justify-center'
      } ${iconSide === 'right' && 'flex gap-2 items-center justify-center'}`}
      data-testid="button"
      onClick={handleClick}
    >
      <span>{label}</span>
      {icon && (
        <span data-testid="icon">
          <Icon name={icon.name} />
        </span>
      )}
    </button>
  )
}

export { Button }
