import {
  recruits,
  recruit,
  createRecruit,
  updateRecruit,
  deleteRecruit,
} from './recruits'
import type { StandardScenario } from './recruits.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('recruits', () => {
  scenario('returns all recruits', async (scenario: StandardScenario) => {
    const result = await recruits()

    expect(result.length).toEqual(Object.keys(scenario.recruit).length)
  })

  scenario('returns a single recruit', async (scenario: StandardScenario) => {
    const result = await recruit({ id: scenario.recruit.one.id })

    expect(result).toEqual(scenario.recruit.one)
  })

  scenario('creates a recruit', async (scenario: StandardScenario) => {
    const result = await createRecruit({
      input: { userId: scenario.recruit.two.userId, email: 'String' },
    })

    expect(result.userId).toEqual(scenario.recruit.two.userId)
    expect(result.email).toEqual('String')
  })

  scenario('updates a recruit', async (scenario: StandardScenario) => {
    const original = await recruit({ id: scenario.recruit.one.id })
    const result = await updateRecruit({
      id: original.id,
      input: { email: 'String2' },
    })

    expect(result.email).toEqual('String2')
  })

  scenario('deletes a recruit', async (scenario: StandardScenario) => {
    const original = await deleteRecruit({ id: scenario.recruit.one.id })
    const result = await recruit({ id: original.id })

    expect(result).toEqual(null)
  })
})
