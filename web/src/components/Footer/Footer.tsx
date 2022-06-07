import { Link, routes } from '@redwoodjs/router'
import { getYear } from 'date-fns'
import { useAuth } from '@redwoodjs/auth'

export const GetYear = () => {
  const date = new Date(Date.now())
  return getYear(date)
}

const Footer = () => {
  const { isAuthenticated } = useAuth()
  return (
    <footer className="border-t-2 border-black">
      <nav className="footer-nav py-5 text-center font-semibold w-full">
        <ul className="flex justify-center flex-wrap">
          {/* TODO: Write tests for showing invites or waiting list */}
          {isAuthenticated ? (
            <li>
              <Link to={routes.invites()}>Invites</Link>
            </li>
          ) : (
            <li>
              <Link to={routes.waitingList()}>Waiting List</Link>
            </li>
          )}
          <li>
            <a href="mailto:amy@amaanytime.com">Contact</a>
          </li>
          <li>
            <Link to={routes.privacyPolicy()}>Privacy Policy</Link>
          </li>
          <li>
            <Link to={routes.termsAndConditions()}>Terms and Conditions</Link>
          </li>
          <li>
            <Link to={routes.disclaimers()}>Disclaimers</Link>
          </li>
        </ul>
      </nav>
      <div className="font-condensed uppercase text-2xl flex gap-2 items-center justify-center pt-5 pb-6 border-t-2 border-black">
        <img src="/images/uneven-lines--left.svg" alt="Double Lines" />
        COPYRIGHT &copy; {GetYear()}.
        <img src="/images/double-lines.svg" alt="Double Lines" />
        <div className="mx-3">
          {/* TODO: turn Ah Ha Creative logo into SVG (instead of an img) so I can change the hover color */}
          <a href="http://ahhacreative.com" target="_blank" rel="noreferrer">
            <img src="/images/ah-ha-creative.svg" alt="Ah Ha Creative, LLC" />
          </a>
        </div>
        <img src="/images/double-lines.svg" alt="Double Lines" />
        ALL RIGHTS RESERVED.
        <img src="/images/uneven-lines--right.svg" alt="Double Lines" />
      </div>
    </footer>
  )
}

export { Footer }
