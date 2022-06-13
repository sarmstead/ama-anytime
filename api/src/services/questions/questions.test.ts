import {
  questions,
  question,
  createQuestion,
  updateQuestion,
  deleteQuestion,
} from './questions'
import type { StandardScenario } from './questions.scenarios'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('questions', () => {
  scenario('returns all questions', async (scenario: StandardScenario) => {
    const result = await questions({
      answeredById: undefined,
      askedByUsername: undefined,
      askedById: undefined,
      answerIsEmpty: undefined,
      answeredByUsername: undefined,
    })
    expect(result.length).toEqual(Object.keys(scenario.question).length)
  })

  scenario(
    'questionWithBookmarks',
    'returns bookmarks for a specific user',
    async (scenario) => {
      const result = await question({ id: scenario.question.first.id })
      console.log(result)
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
  //       answerIsEmpty: undefined,
  //       answeredByUsername: undefined,
  //     })
  // console.log(result)
  // expect(result[0].question)
  // expect(result[0].question).toEqual(
  //   scenario.questionsForOrdering.unanswered.question
  // )
  //   }
  // )

  scenario('returns a single question', async (scenario: StandardScenario) => {
    const result = await question({ id: scenario.question.one.id })

    expect(result).toEqual(scenario.question.one)
  })

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
