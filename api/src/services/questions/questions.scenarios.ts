import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.QuestionCreateArgs>({
  question: {
    one: {
      data: {
        question: 'String',
        askedBy: {
          create: {
            username: 'String8268133',
            email: 'String1522318',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        answeredBy: {
          create: {
            username: 'String458208',
            email: 'String4522845',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        question: 'String',
        askedBy: {
          create: {
            username: 'String3176366',
            email: 'String2991635',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        answeredBy: {
          create: {
            username: 'String1365417',
            email: 'String4003026',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
