import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.RecruitCreateArgs>({
  recruit: {
    one: {
      data: {
        email: 'String',
        user: {
          create: {
            username: 'String2014645',
            email: 'String4431423',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        email: 'String',
        user: {
          create: {
            username: 'String9968897',
            email: 'String1995245',
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
