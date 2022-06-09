import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        username: 'String5283847',
        email: 'String5956873',
        fullName: 'String',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        username: 'String9658225',
        email: 'String3878672',
        fullName: 'String',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
