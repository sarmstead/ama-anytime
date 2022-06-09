import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  UserResolvers,
} from 'types/graphql'

export const users: QueryResolvers['users'] = () => {
  return db.user.findMany()
}

export const user: QueryResolvers['user'] = ({ id, username }) => {
  return db.user.findUnique({
    where: { id, username },
  })
}

export const createUser: MutationResolvers['createUser'] = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser: MutationResolvers['updateUser'] = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser: MutationResolvers['deleteUser'] = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User: UserResolvers = {
  questionsAsked: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).questionsAsked(),
  questionsAnswered: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).questionsAnswered(),
  bookmarks: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).bookmarks(),
  likes: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).likes(),
  askAgains: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).askAgains(),
  votes: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).votes(),
  recruits: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).recruits(),
  followedBy: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).followedBy(),
  following: (_obj, { root }) =>
    db.user.findUnique({ where: { id: root.id } }).following(),
}
