import { Prisma } from '@prisma/client'

const selfteachmeUser = {
  username: 'selfteachme',
  email: 'ama@selfteach.me',
  fullName: 'SelfTeach.me',
  hashedPassword: 'String',
  salt: 'String',
}

const ahhacreativeUser = {
  username: 'ahhacreative',
  email: 'ama@ahhacreative.com',
  fullName: 'Ah Ha Creative',
  hashedPassword: 'String',
  salt: 'String',
}

const amyduttonUser = {
  username: 'amydutton',
  email: 'ama@amydutton.me',
  fullName: 'Amy Dutton',
  hashedPassword: 'String',
  salt: 'String',
}

const compressedfmUser = {
  username: 'compressedfm',
  email: 'ama@compressed.fm',
  fullName: 'Compressed.fm',
  hashedPassword: 'String',
  salt: 'String',
}

export const standard = defineScenario<Prisma.QuestionCreateArgs>({
  question: {
    one: {
      data: {
        question: 'Is this question 1?',
        askedBy: {
          create: { ...selfteachmeUser },
        },
        answeredBy: {
          create: {
            ...ahhacreativeUser,
          },
        },
        askedOn: '2022-06-01T13:21:02.631Z',
      },
    },
    two: {
      data: {
        question: 'Is this question 2?',
        askedBy: {
          create: { ...amyduttonUser },
        },
        answeredBy: {
          create: { ...compressedfmUser },
        },
        answer: 'Yes it is',
        pinned: true,
        askedOn: '2022-05-15T13:21:02.631Z',
        updatedOn: '2022-05-17T13:21:02.631Z',
      },
    },
  },
})

export const questionWithBookmarks = defineScenario({
  user: {
    first: {
      data: {
        username: 'ahhacreative',
        email: 'ama@ahhacreative.com',
        fullName: 'Ah Ha Creative',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    second: {
      data: {
        username: 'selfteachme',
        email: 'ama@selfteach.me',
        fullName: 'SelfTeach.me',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
  question: {
    first: (scenario) => ({
      data: {
        question: 'Is this question 1?',
        askedById: scenario.user.first.id,
        answeredById: scenario.user.second.id,
        askedOn: '2022-06-01T13:21:02.631Z',
        bookmarks: {
          create: [
            {
              userId: scenario.user.first.id,
            },
            {
              userId: scenario.user.second.id,
            },
          ],
        },
      },
    }),
  },
})

export const questionsForOrdering = defineScenario<Prisma.QuestionCreateArgs>({
  question: {
    one: {
      data: {
        question: 'Is this question 1?',
        askedBy: {
          create: { ...selfteachmeUser },
        },
        answeredBy: {
          create: {
            ...ahhacreativeUser,
          },
        },
        askedOn: '2022-06-01T13:21:02.631Z',
      },
    },
    mostRecent: {
      data: {
        question: 'Is this the most recent question?',
        askedBy: {
          data: { ...selfteachmeUser },
        },
      },
    },
  },
})

// mostRecent: {
//   data: {
//     question: 'Is this the most recent question?',
//     askedBy: {
//       data: { ...selfteachme },
//     },
//     answeredBy: {
//       data: { ...ahhacreative },
//     },
//     answer: 'By date, yes',
//     askedOn: '2022-05-15T13:21:02.631Z',
//     updatedOn: '2022-06-09T13:21:02.631Z',
//   },
// },
// pinned: {
//   data: {
//     question: 'Is this question 2?',
//     askedBy: {
//       create: { ...amyduttonUser },
//     },
//     answeredBy: {
//       create: { ...compressedfmUser },
//     },
//     answer: 'No it is not',
//     pinned: true,
//     askedOn: '2022-05-15T13:21:02.631Z',
//     updatedOn: '2022-05-17T13:21:02.631Z',
//   },
// },
// answered: {
//   data: {
//     question: 'Should I answer this question?',
//     askedBy: {
//       create: { ...amyduttonUser },
//     },
//     answeredBy: {
//       create: { ...compressedfmUser },
//     },
//     answer: 'Yes you should',
//     pinned: false,
//     askedOn: '2022-05-15T13:21:02.631Z',
//     updatedOn: '2022-05-17T13:21:02.631Z',
//   },
// },
// },
// })

export const askedBySelfTeachme = defineScenario<Prisma.QuestionCreateArgs>({
  question: {
    one: {
      data: {
        question: 'String',
        askedBy: {
          create: { ...selfteachmeUser },
        },
        answeredBy: {
          create: { ...ahhacreativeUser },
        },
      },
    },
  },
})

export const answeredBySelfTeachme = defineScenario<Prisma.QuestionCreateArgs>({
  question: {
    one: {
      data: {
        question: 'String',
        askedBy: {
          create: { ...ahhacreativeUser },
        },
        answeredBy: {
          create: { ...selfteachmeUser },
        },
      },
    },
  },
})

export const unansweredBySelfTeachme =
  defineScenario<Prisma.QuestionCreateArgs>({
    question: {
      one: {
        data: {
          question: 'String',
          askedBy: {
            create: { ...ahhacreativeUser },
          },
          answeredBy: {
            create: { ...selfteachmeUser },
          },
        },
      },
    },
  })

export type StandardScenario = typeof standard
