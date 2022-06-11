import { formatRelativeDate } from 'src/utils/DateHelpers'
import type { IUser } from '../../Question'

interface IByline {
  person: IUser
  displayDate: string
}

const Byline = ({ person, displayDate }: IByline) => {
  return (
    <p data-testid="byline">
      <strong>{person.fullName}</strong> @{person.username}
      {displayDate && ` • ${formatRelativeDate(displayDate)}`}
    </p>
  )
}

export { Byline }
