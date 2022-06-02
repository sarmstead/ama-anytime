import { render } from '@redwoodjs/testing/web'

import { SearchInput } from './SearchInput'

describe('SearchInput', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SearchInput />)
    }).not.toThrow()
  })
})
