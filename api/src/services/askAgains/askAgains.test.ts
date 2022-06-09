import {
  askAgains,
  askAgain,
  createAskAgain,
  updateAskAgain,
  deleteAskAgain,
} from './askAgains'
import type { StandardScenario } from './askAgains.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('askAgains', () => {
  scenario('returns all askAgains', async (scenario: StandardScenario) => {
    const result = await askAgains()

    expect(result.length).toEqual(Object.keys(scenario.askAgain).length)
  })

  scenario('returns a single askAgain', async (scenario: StandardScenario) => {
    const result = await askAgain({ id: scenario.askAgain.one.id })

    expect(result).toEqual(scenario.askAgain.one)
  })

  scenario('creates a askAgain', async (scenario: StandardScenario) => {
    const result = await createAskAgain({
      input: {
        userId: scenario.askAgain.two.userId,
        questionId: scenario.askAgain.two.questionId,
      },
    })

    expect(result.userId).toEqual(scenario.askAgain.two.userId)
    expect(result.questionId).toEqual(scenario.askAgain.two.questionId)
  })

  scenario('updates a askAgain', async (scenario: StandardScenario) => {
    const original = await askAgain({ id: scenario.askAgain.one.id })
    const result = await updateAskAgain({
      id: original.id,
      input: { userId: scenario.askAgain.two.userId },
    })

    expect(result.userId).toEqual(scenario.askAgain.two.userId)
  })

  scenario('deletes a askAgain', async (scenario: StandardScenario) => {
    const original = await deleteAskAgain({ id: scenario.askAgain.one.id })
    const result = await askAgain({ id: original.id })

    expect(result).toEqual(null)
  })
})
