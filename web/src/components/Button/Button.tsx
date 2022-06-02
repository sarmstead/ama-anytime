interface IButton {
  className?: string
  label: string
  handleClick?: () => void
  size?: 'small' | 'large'
}

const Button = ({
  className = '',
  label,
  handleClick,
  size = 'large',
}: IButton): JSX.Element => {
  return (
    <button
      className={`rounded-3xl bg-transparent hover:bg-black text-black hover:text-white border-2 border-black font-slab uppercase ${className} ${size}`}
      data-testid="button"
      onClick={handleClick}
    >
      {label}
    </button>
  )
}

export { Button }
