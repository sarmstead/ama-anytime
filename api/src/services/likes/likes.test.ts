import { likes, like, createLike, updateLike, deleteLike } from './likes'
import {
  StandardScenario,
  user,
  question,
  createALike,
} from './likes.scenarios'

describe('likes', () => {
  scenario('returns all likes', async (scenario: StandardScenario) => {
    const result = await likes()

    expect(result.length).toEqual(Object.keys(scenario.like).length)
  })

  scenario('returns a single like', async (scenario: StandardScenario) => {
    const result = await like({ id: scenario.like.one.id })

    expect(result).toEqual(scenario.like.one)
  })

  scenario(
    'createALike',
    'creates a like',
    async (scenario: StandardScenario) => {
      const result = await createLike({
        input: {
          userId: scenario.user.one.id,
          questionId: scenario.question.one.id,
        },
      })

      expect(result.userId).toEqual(scenario.user.one.id)
      expect(result.questionId).toEqual(scenario.question.one.id)
    }
  )

  scenario('updates a like', async (scenario: StandardScenario) => {
    const original = await like({ id: scenario.like.one.id })
    const result = await updateLike({
      id: original.id,
      input: { userId: scenario.like.two.userId },
    })

    expect(result.userId).toEqual(scenario.like.two.userId)
  })

  scenario('deletes a like', async (scenario: StandardScenario) => {
    const original = await deleteLike({ id: scenario.like.one.id })
    const result = await like({ id: original.id })

    expect(result).toEqual(null)
  })
})
