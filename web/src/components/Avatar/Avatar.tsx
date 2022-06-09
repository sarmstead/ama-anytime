export type AvatarColor =
  | 'PUNCH'
  | 'ULCAGOLD'
  | 'BLANC'
  | 'ONYX'
  | 'PESTO'
  | 'FIORD'
  | 'GREENSHEEN'
  | 'VERIDIANGREEN'
  | 'HEATWAVE'
  | 'GRAY'

export interface IAvatar {
  alt: string
  avatarColor?: AvatarColor
  className?: string
  height?: number
  src?: string
  width?: number
}

const Avatar = ({
  alt,
  avatarColor,
  className = '',
  height = 32,
  src = '',
  width = 32,
}: IAvatar): JSX.Element => {
  return (
    <div>
      {src ? (
        <img
          className={`rounded-full ${className}`}
          src={src}
          alt={alt}
          height={height}
          width={width}
        />
      ) : (
        <div
          className={`rounded-full text-white flex justify-center items-center text-center font-slab ${avatarColor}`}
          style={{ height, width }}
        >
          <svg viewBox="0 0 32 32">
            <text x="50%" y="53%" dominantBaseline="middle" textAnchor="middle">
              {alt.charAt(0).toUpperCase()}
            </text>
          </svg>
        </div>
      )}
    </div>
  )
}

export { Avatar }
