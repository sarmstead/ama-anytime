import {
  allowedToFollows,
  allowedToFollow,
  createAllowedToFollow,
  updateAllowedToFollow,
  deleteAllowedToFollow,
} from './allowedToFollows'
import type { StandardScenario } from './allowedToFollows.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('allowedToFollows', () => {
  scenario(
    'returns all allowedToFollows',
    async (scenario: StandardScenario) => {
      const result = await allowedToFollows()

      expect(result.length).toEqual(
        Object.keys(scenario.allowedToFollow).length
      )
    }
  )

  scenario(
    'returns a single allowedToFollow',
    async (scenario: StandardScenario) => {
      const result = await allowedToFollow({
        id: scenario.allowedToFollow.one.id,
      })

      expect(result).toEqual(scenario.allowedToFollow.one)
    }
  )

  scenario('creates a allowedToFollow', async (scenario: StandardScenario) => {
    const result = await createAllowedToFollow({
      input: {
        privateUserId: scenario.allowedToFollow.two.privateUserId,
        approvedFollowersId: scenario.allowedToFollow.two.approvedFollowersId,
      },
    })

    expect(result.privateUserId).toEqual(
      scenario.allowedToFollow.two.privateUserId
    )
    expect(result.approvedFollowersId).toEqual(
      scenario.allowedToFollow.two.approvedFollowersId
    )
  })

  scenario('updates a allowedToFollow', async (scenario: StandardScenario) => {
    const original = await allowedToFollow({
      id: scenario.allowedToFollow.one.id,
    })
    const result = await updateAllowedToFollow({
      id: original.id,
      input: { privateUserId: scenario.allowedToFollow.two.privateUserId },
    })

    expect(result.privateUserId).toEqual(
      scenario.allowedToFollow.two.privateUserId
    )
  })

  scenario('deletes a allowedToFollow', async (scenario: StandardScenario) => {
    const original = await deleteAllowedToFollow({
      id: scenario.allowedToFollow.one.id,
    })
    const result = await allowedToFollow({ id: original.id })

    expect(result).toEqual(null)
  })
})
