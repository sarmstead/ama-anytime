import {
  bookmarks,
  bookmark,
  createBookmark,
  updateBookmark,
  deleteBookmark,
} from './bookmarks'
import type { StandardScenario } from './bookmarks.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('bookmarks', () => {
  scenario('returns all bookmarks', async (scenario: StandardScenario) => {
    const result = await bookmarks()

    expect(result.length).toEqual(Object.keys(scenario.bookmark).length)
  })

  scenario('returns a single bookmark', async (scenario: StandardScenario) => {
    const result = await bookmark({ id: scenario.bookmark.one.id })

    expect(result).toEqual(scenario.bookmark.one)
  })

  // scenario('creates a bookmark', async (scenario: StandardScenario) => {
  //   const result = await createBookmark({
  //     input: {
  //       userId: scenario.bookmark.two.userId,
  //       questionId: scenario.bookmark.two.questionId,
  //     },
  //   })

  //   expect(result.userId).toEqual(scenario.bookmark.two.userId)
  //   expect(result.questionId).toEqual(scenario.bookmark.two.questionId)
  // })

  scenario('updates a bookmark', async (scenario: StandardScenario) => {
    const original = await bookmark({ id: scenario.bookmark.one.id })
    const result = await updateBookmark({
      id: original.id,
      input: { userId: scenario.bookmark.two.userId },
    })

    expect(result.userId).toEqual(scenario.bookmark.two.userId)
  })

  scenario('deletes a bookmark', async (scenario: StandardScenario) => {
    const original = await deleteBookmark({ id: scenario.bookmark.one.id })
    const result = await bookmark({ id: original.id })

    expect(result).toEqual(null)
  })
})
