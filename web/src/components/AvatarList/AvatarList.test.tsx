import { render, screen } from '@redwoodjs/testing/web'

import { AvatarList } from './AvatarList'
import { avatars as data } from './AvatarList.mocks'

describe('AvatarList', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<AvatarList avatars={data} />)
    }).not.toThrow()
  })

  it('displays all the avatars', () => {
    render(<AvatarList avatars={data} />)
    expect(screen.getAllByRole('img')).toHaveLength(3)
  })
})
