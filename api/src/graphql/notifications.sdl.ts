export const schema = gql`
  type Notification {
    id: Int!
    user: User!
    userId: Int!
    notificationsFor: User!
    notificationsForId: Int!
  }

  type Query {
    notifications: [Notification!]! @requireAuth
    notification(id: Int!): Notification @requireAuth
  }

  input CreateNotificationInput {
    userId: Int!
    notificationsForId: Int!
  }

  input UpdateNotificationInput {
    userId: Int
    notificationsForId: Int
  }

  type Mutation {
    createNotification(input: CreateNotificationInput!): Notification!
      @requireAuth
    updateNotification(
      id: Int!
      input: UpdateNotificationInput!
    ): Notification! @requireAuth
    deleteNotification(id: Int!): Notification! @requireAuth
    deleteNotificationByUser(
      userId: Int!
      notificationsForId: Int!
    ): Notification! @requireAuth
  }
`
