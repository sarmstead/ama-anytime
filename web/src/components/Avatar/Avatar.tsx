interface IAvatar {
  alt: string
  height?: number
  src: string
  width?: number
}

const Avatar = ({
  alt,
  height = 32,
  src,
  width = 32,
}: IAvatar): JSX.Element => {
  return (
    <div>
      <img
        className="rounded-full"
        src={src}
        alt={alt}
        height={height}
        width={width}
      />
    </div>
  )
}

export { Avatar }
