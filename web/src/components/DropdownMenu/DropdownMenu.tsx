import { useEffect, useRef, RefObject } from 'react'
import { Icon, IIcon } from '../Icon/Icon'

export interface IDropdownMenu {
  className?: string
  isShowing: boolean
  options: {
    icon?: IIcon
    label: string
    action?: () => void
  }[]
  triggerRef?: RefObject<HTMLButtonElement>
  onClickOutside: () => void
}

const DropdownMenu = ({
  className,
  isShowing,
  onClickOutside,
  triggerRef,
  options,
}: IDropdownMenu) => {
  const dropdownRef = useRef(null)

  // REFERENCE: https://blog.logrocket.com/detect-click-outside-react-component-how-to/
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        triggerRef &&
        !triggerRef.current.contains(event.target)
      ) {
        onClickOutside && onClickOutside()
      }
    }
    document.addEventListener('click', handleClickOutside, true)
    return () => {
      document.removeEventListener('click', handleClickOutside, true)
    }
  }, [onClickOutside, triggerRef])

  if (isShowing)
    return (
      <div
        className={`tooltip-tag bg-ulcaGold text-ulcaGold inline-block ${className}`}
        ref={dropdownRef}
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
