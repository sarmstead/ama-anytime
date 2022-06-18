import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.AllowedToFollowCreateArgs>({
  allowedToFollow: {
    one: {
      data: {
        privateUser: {
          create: {
            username: 'String3903214',
            email: 'String1116664',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        approvedFollowers: {
          create: {
            username: 'String3736500',
            email: 'String5774416',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        privateUser: {
          create: {
            username: 'String3069334',
            email: 'String3237612',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        approvedFollowers: {
          create: {
            username: 'String8945920',
            email: 'String2108731',
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
