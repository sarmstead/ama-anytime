import { back } from '@redwoodjs/router'
import { Icon } from '../Icon'

export interface IPageHeading {
  isActionsShowing?: boolean
  isBackShowing?: boolean
  title: string
}

const PageHeading = ({
  isActionsShowing = false,
  isBackShowing = false,
  title,
}: IPageHeading): JSX.Element => {
  return (
    <div className="bg-[#E4E2DD]/[.75] mix-blend-multiply grid grid-cols-6 pt-12 pb-4 border-b-2 border-black mb-1 pr-10">
      <div className="flex justify-between col-start-2 col-span-5 relative">
        {isBackShowing && (
          <div className="absolute -bottom-2 -left-14">
            <button
              onClick={() => back()}
              className="hover:text-punch translate-x-0 hover:-translate-x-2 transition-transform"
            >
              <Icon name="arrow" />
            </button>
          </div>
        )}
        <h1 className="font-slab uppercase text-base tracking-wider font-extrabold">
          {title}
        </h1>
        {isActionsShowing && (
          <button data-testid="actonButtons">
            <Icon name="dots" />
          </button>
        )}
      </div>
    </div>
  )
}

export { PageHeading }
