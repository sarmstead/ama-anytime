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
      <Icon name="share" />
      <Tooltip
        text="Share"
        isShowing={showTooltip}
        className="absolute -left-1/2 mt-1"
      />
    </button>
  )
}

export { ShareButton }
