import { Icon } from '../Icon'

export interface IPageHeading {
  isActionsShowing?: boolean
  title: string
}

const PageHeading = ({
  isActionsShowing = false,
  title,
}: IPageHeading): JSX.Element => {
  return (
    <div className="bg-[#E4E2DD]/[.75] mix-blend-multiply grid grid-cols-6 pt-12 pb-4 border-b-2 border-black mb-1 pr-10">
      <div className="flex justify-between col-start-2 col-span-5">
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
