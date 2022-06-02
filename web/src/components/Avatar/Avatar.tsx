export interface IAvatar {
  alt: string
  className?: string
  height?: number
  src: string
  width?: number
}

const Avatar = ({
  alt,
  className = '',
  height = 32,
  src,
  width = 32,
}: IAvatar): JSX.Element => {
  return (
    <div>
      <img
        className={`rounded-full ${className}`}
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    </div>
  )
}

export { Avatar }
