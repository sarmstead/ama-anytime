import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.VoteCreateArgs>({
  vote: {
    one: {
      data: {
        direction: 'UP',
        user: {
          create: {
            username: 'String8449513',
            email: 'String9544655',
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
                username: 'String3633494',
                email: 'String1816446',
                fullName: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            answeredBy: {
              create: {
                username: 'String9504184',
                email: 'String2620796',
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
        direction: 'UP',
        user: {
          create: {
            username: 'String4669661',
            email: 'String903465',
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
                username: 'String4141119',
                email: 'String7944212',
                fullName: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            answeredBy: {
              create: {
                username: 'String938884',
                email: 'String8845176',
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
