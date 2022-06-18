import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  AllowedToFollowResolvers,
} from 'types/graphql'

export const allowedToFollows: QueryResolvers['allowedToFollows'] = () => {
  return db.allowedToFollow.findMany()
}

export const allowedToFollow: QueryResolvers['allowedToFollow'] = ({ id }) => {
  return db.allowedToFollow.findUnique({
    where: { id },
  })
}

export const createAllowedToFollow: MutationResolvers['createAllowedToFollow'] =
  ({ input }) => {
    return db.allowedToFollow.create({
      data: input,
    })
  }

export const updateAllowedToFollow: MutationResolvers['updateAllowedToFollow'] =
  ({ id, input }) => {
    return db.allowedToFollow.update({
      data: input,
      where: { id },
    })
  }

export const deleteAllowedToFollow: MutationResolvers['deleteAllowedToFollow'] =
  ({ id }) => {
    return db.allowedToFollow.delete({
      where: { id },
    })
  }

export const AllowedToFollow: AllowedToFollowResolvers = {
  privateUser: (_obj, { root }) =>
    db.allowedToFollow.findUnique({ where: { id: root.id } }).privateUser(),
  approvedFollowers: (_obj, { root }) =>
    db.allowedToFollow
      .findUnique({ where: { id: root.id } })
      .approvedFollowers(),
}
