export interface IButton {
  className?: string
  label: string
  handleClick?: () => void
  size?: 'small' | 'large'
  style?: 'solid' | 'inverted' | 'none'
}

const Button = ({
  className = '',
  label,
  handleClick,
  size = 'large',
  style = 'inverted',
}: IButton): JSX.Element => {
  return (
    <button
      className={`rounded-3xl font-slab uppercase ${className} ${size} ${
        style === 'inverted' &&
        `bg-transparent hover:bg-punch text-black hover:text-white border-2 border-black hover:border-punch`
      } ${style === 'solid' && `bg-punch hover:bg-veridianGreen text-white`} ${
        style === 'none' && `bg-transparent text-black hover:text-punch`
      }`}
      data-testid="button"
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export { Button }
