import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  LikeResolvers,
} from 'types/graphql'

export const likes: QueryResolvers['likes'] = () => {
  return db.like.findMany()
}

export const like: QueryResolvers['like'] = ({ id }) => {
  return db.like.findUnique({
    where: { id },
  })
}

export const createLike: MutationResolvers['createLike'] = ({ input }) => {
  return db.like.create({
    data: input,
  })
}

export const updateLike: MutationResolvers['updateLike'] = ({ id, input }) => {
  return db.like.update({
    data: input,
    where: { id },
  })
}

export const deleteLike: MutationResolvers['deleteLike'] = ({ id }) => {
  return db.like.delete({
    where: { id },
  })
}

export const Like: LikeResolvers = {
  user: (_obj, { root }) =>
    db.like.findUnique({ where: { id: root.id } }).user(),
  question: (_obj, { root }) =>
    db.like.findUnique({ where: { id: root.id } }).question(),
}
