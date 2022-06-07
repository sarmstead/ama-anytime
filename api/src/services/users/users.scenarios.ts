import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.UserCreateArgs>({
  user: {
    one: {
      data: {
        username: 'String6565034',
        email: 'String9021463',
        fullName: 'String',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
    two: {
      data: {
        username: 'String6266363',
        email: 'String2950393',
        fullName: 'String',
        hashedPassword: 'String',
        salt: 'String',
      },
    },
  },
})

export type StandardScenario = typeof standard
