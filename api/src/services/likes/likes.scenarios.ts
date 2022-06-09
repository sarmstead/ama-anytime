import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.LikeCreateArgs>({
  like: {
    one: {
      data: {
        user: {
          create: {
            username: 'String4273465',
            email: 'String4129503',
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
                username: 'String1030067',
                email: 'String8170697',
                fullName: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            answeredBy: {
              create: {
                username: 'String4288068',
                email: 'String1597780',
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
            username: 'String3510178',
            email: 'String805940',
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
                username: 'String1376616',
                email: 'String6645215',
                fullName: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            answeredBy: {
              create: {
                username: 'String4586016',
                email: 'String7785950',
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
