import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AskAgainCreateArgs>({
  askAgain: {
    one: {
      data: {
        user: {
          create: {
            username: 'String8695241',
            email: 'String3717240',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        question: {
          create: {
            question: 'String',
            askedBy: {
              create: {
                username: 'String322496',
                email: 'String9121433',
                fullName: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            answeredBy: {
              create: {
                username: 'String1433816',
                email: 'String9018023',
                fullName: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
    two: {
      data: {
        user: {
          create: {
            username: 'String504441',
            email: 'String2166663',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        question: {
          create: {
            question: 'String',
            askedBy: {
              create: {
                username: 'String7937835',
                email: 'String5237974',
                fullName: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            answeredBy: {
              create: {
                username: 'String1402186',
                email: 'String8088057',
                fullName: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})

export type StandardScenario = typeof standard
