import { render } from '@redwoodjs/testing/web'

import { SettingLayout } from './SettingLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('SettingLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<SettingLayout />)
    }).not.toThrow()
  })
})
