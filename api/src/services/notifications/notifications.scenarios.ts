import type { Prisma } from '@prisma/client'

export const standard = defineScenario<Prisma.NotificationCreateArgs>({
  notification: {
    one: {
      data: {
        user: {
          create: {
            username: 'String6935190',
            email: 'String4338252',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        notificationsFor: {
          create: {
            username: 'String6112914',
            email: 'String2378990',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
    two: {
      data: {
        user: {
          create: {
            username: 'String7460362',
            email: 'String4775873',
            fullName: 'String',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
        notificationsFor: {
          create: {
            username: 'String6342254',
            email: 'String7415102',
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
