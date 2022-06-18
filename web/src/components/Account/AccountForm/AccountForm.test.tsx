import { render } from '@redwoodjs/testing/web'

import AccountForm from './AccountForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('AccountForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AccountForm />)
    }).not.toThrow()
  })
})
