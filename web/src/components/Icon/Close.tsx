interface IClose {
  className?: string
  height?: string
  width?: string
}

const Close = ({
  className = '',
  height = '24',
  width = '24',
}: IClose): JSX.Element => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.3 5.71022C17.91 5.32022 17.28 5.32022 16.89 5.71022L12 10.5902L7.10997 5.70021C6.71997 5.31021 6.08997 5.31021 5.69997 5.70021C5.30997 6.09021 5.30997 6.72022 5.69997 7.11022L10.59 12.0002L5.69997 16.8902C5.30997 17.2802 5.30997 17.9102 5.69997 18.3002C6.08997 18.6902 6.71997 18.6902 7.10997 18.3002L12 13.4102L16.89 18.3002C17.28 18.6902 17.91 18.6902 18.3 18.3002C18.69 17.9102 18.69 17.2802 18.3 16.8902L13.41 12.0002L18.3 7.11022C18.68 6.73022 18.68 6.09022 18.3 5.71022Z" />
    </svg>
  )
}

export { Close }
