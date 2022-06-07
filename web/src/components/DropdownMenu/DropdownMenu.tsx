import { Icon, IIcon } from '../Icon/Icon'

export interface IDropdownMenu {
  className?: string
  isShowing: boolean
  options: {
    icon?: IIcon
    label: string
    action?: () => void
  }[]
}

const DropdownMenu = ({ className, isShowing, options }: IDropdownMenu) => {
  if (isShowing)
    return (
      <div
        className={`tooltip-tag bg-ulcaGold text-ulcaGold inline-block ${className}`}
      >
        <ul>
          {options &&
            options.map((option, index) => (
              <li key={index}>
                <button
                  onClick={option.action}
                  className="font-slab uppercase text-sm font-extrabold flex items-center justify-start gap-3 leading-10 pl-4 pr-5 bg-ulcaGold hover:bg-heatWave text-black w-full min-h-[40px]"
                >
                  {option.icon && <Icon name={option.icon.name} />}
                  {option.label}
                </button>
              </li>
            ))}
        </ul>
      </div>
    )
  return <span />
}

export { DropdownMenu }
