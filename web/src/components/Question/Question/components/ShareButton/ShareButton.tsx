import { useState } from 'react'
import { Icon } from 'src/components/Icon'
import Tooltip from 'src/components/Tooltip/Tooltip'

const ShareButton = () => {
  const [showTooltip, setShowTooltip] = useState<boolean>(false)

  const toggleTooltip = () => {
    setShowTooltip((prevValue) => !prevValue)
  }

  // TODO: Connect Modal for Sharing
  const handleClick = () => {}

  return (
    <button
      className="col-start-5 col-span-1 hover:text-punch relative"
      onClick={handleClick}
      onMouseEnter={toggleTooltip}
      onMouseLeave={toggleTooltip}
    >
      <div className="inline-block">
        <Icon name="share" />
        <Tooltip
          text="Share"
          isShowing={showTooltip}
          className="absolute mt-1 left-1/2 -translate-x-1/2"
        />
      </div>
    </button>
  )
}

export { ShareButton }
