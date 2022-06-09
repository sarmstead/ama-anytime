import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.BookmarkCreateArgs>({
  bookmark: {
    one: {
      data: {
        user: {
          create: {
            username: 'String3156270',
            email: 'String9314962',
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
                username: 'String3264526',
                email: 'String5626272',
                fullName: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            answeredBy: {
              create: {
                username: 'String9431653',
                email: 'String9111161',
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
            username: 'String7413685',
            email: 'String6710310',
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
                username: 'String1170469',
                email: 'String1942504',
                fullName: 'String',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
            answeredBy: {
              create: {
                username: 'String5211318',
                email: 'String1137068',
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
