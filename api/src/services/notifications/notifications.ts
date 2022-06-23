import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  NotificationResolvers,
} from 'types/graphql'

export const notifications: QueryResolvers['notifications'] = () => {
  return db.notification.findMany()
}

export const notification: QueryResolvers['notification'] = ({ id }) => {
  return db.notification.findUnique({
    where: { id },
  })
}

export const createNotification: MutationResolvers['createNotification'] = ({
  input,
}) => {
  return db.notification.create({
    data: input,
  })
}

export const updateNotification: MutationResolvers['updateNotification'] = ({
  id,
  input,
}) => {
  return db.notification.update({
    data: input,
    where: { id },
  })
}

export const deleteNotification: MutationResolvers['deleteNotification'] = ({
  id,
}) => {
  return db.notification.delete({
    where: { id },
  })
}

export const deleteNotificationByUser: MutationResolvers['deleteNotificationByUser'] =
  ({ userId, notificationsForId }) => {
    return db.notification.delete({
      where: {
        userId_notificationsForId: {
          userId,
          notificationsForId,
        },
      },
    })
  }

export const Notification: NotificationResolvers = {
  user: (_obj, { root }) =>
    db.notification.findUnique({ where: { id: root.id } }).user(),
  notificationsFor: (_obj, { root }) =>
    db.notification.findUnique({ where: { id: root.id } }).notificationsFor(),
}
