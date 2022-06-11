import { render, waitFor } from '@redwoodjs/testing/web'

import ProfilePage from './ProfilePage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('ProfilePage', () => {
  it('renders successfully when a username is passed in', () => {
    expect(() => {
      render(<ProfilePage username="selfteachme" />)
    }).not.toThrow()
  })

  it('renders successfully when a username is NOT passed in', async () => {
    mockCurrentUser({
      username: 'selfteachme',
      fullName: 'Amy Dutton',
      id: 1,
      email: 'amy@amaanything.com',
      avatar: '',
      avatarColor: 'PUNCH',
    })

    await waitFor(() =>
      expect(() => {
        render(<ProfilePage />)
      }).not.toThrow()
    )
  })
})
