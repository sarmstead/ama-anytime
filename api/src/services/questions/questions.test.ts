import { bookmark, bookmarks, createBookmark } from '../bookmarks/bookmarks'
import {
  questions,
  question,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from './questions'
import type { StandardScenario } from './questions.scenarios'

describe('questions', () => {
  scenario('returns all questions', async (scenario: StandardScenario) => {
    const result = await questions({
      answeredById: undefined,
      askedByUsername: undefined,
      askedById: undefined,
      answeredByUsername: undefined,
    })
    expect(result.length).toEqual(Object.keys(scenario.question).length)
  })

  scenario(
    'questionWithBookmarks',
    'returns bookmarks for a specific user',
    async (scenario) => {
      mockCurrentUser({
        id: scenario.user.second.id,
        username: 'selfteachme',
        email: 'amy@amaanytime.com',
        fullName: 'Amy Dutton',
        avatar: '',
        avatarColor: 'PUNCH',
      })

      const result = await question({
        id: scenario.question.first.id,
      }).bookmarks({ where: { userId: context.currentUser.id } })

      expect(result.length).toEqual(1)
    }
  )

  // scenario(
  //   'questionsForOrdering',
  //   'return questions sorted for the profile feed (pinned, order, updatedOn, askedOn)',
  //   async (scenario: StandardScenario) => {
  //     const result = await questions({
  //       answeredById: undefined,
  //       askedByUsername: undefined,
  //       askedById: undefined,
  //       answeredByUsername: undefined,
  //     })
  // console.log(result)
  // expect(result[0].question)
  // expect(result[0].question).toEqual(
  //   scenario.questionsForOrdering.unanswered.question
  // )
  //   }
  // )

  scenario(
    'standard',
    'returns a single question',
    async (scenario: StandardScenario) => {
      const result = await question({ id: scenario.question.one.id })

      expect(result).toEqual(scenario.question.one)
    }
  )

  scenario(
    "returns a question with the current user's bookmarks",
    async (scenario: StandardScenario) => {
      const result = await question({ id: scenario.question.one.id })

      expect(result).toEqual(scenario.question.one)
    }
  )

  scenario('creates a question', async (scenario: StandardScenario) => {
    const result = await createQuestion({
      input: {
        pinned: false,
        question: 'String',
        askedById: scenario.question.two.askedById,
        answeredById: scenario.question.two.answeredById,
      },
    })

    expect(result.question).toEqual('String')
    expect(result.askedById).toEqual(scenario.question.two.askedById)
    expect(result.answeredById).toEqual(scenario.question.two.answeredById)
  })

  scenario('updates a question', async (scenario: StandardScenario) => {
    const original = await question({ id: scenario.question.one.id })
    const result = await updateQuestion({
      id: original.id,
      input: { question: 'String2' },
    })

    expect(result.question).toEqual('String2')
  })

  scenario('deletes a question', async (scenario: StandardScenario) => {
    const original = await deleteQuestion({ id: scenario.question.one.id })
    const result = await question({ id: original.id })

    expect(result).toEqual(null)
  })

  // TODO returns all the questions that a specific user has answered
  // TODO returns all the questions that a specific user hasn't answered yet
  // TODO returns all the questions a user has asked
  // TODO returns all the recently asked questions
  // TODO shows more recently asked questions
})
