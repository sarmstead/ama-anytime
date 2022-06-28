import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  QuestionResolvers,
} from 'types/graphql'

export const questions: QueryResolvers['questions'] = ({
  answeredById,
  answeredByUsername,
  askedById,
  askedByUsername,
}) => {
  return db.question.findMany({
    where: {
      askedById,
      askedBy: { username: askedByUsername },
      answeredById,
      answeredBy: { username: answeredByUsername },
      notGoingToAnswer: false,
    },
    orderBy: [
      { pinned: 'asc' },
      { order: 'asc' },
      { updatedOn: 'asc' },
      { askedOn: 'asc' },
    ],
  })
}

export const questionsWithAnswers: QueryResolvers['questions'] = ({
  answeredById,
  answeredByUsername,
  askedById,
  askedByUsername,
}) => {
  return db.question.findMany({
    where: {
      askedById,
      askedBy: { username: askedByUsername },
      answeredById,
      answeredBy: { username: answeredByUsername },
      notGoingToAnswer: false,
      NOT: {
        OR: [
          {
            answer: null,
          },
          {
            answer: '',
          },
        ],
      },
    },
    orderBy: [
      { pinned: 'asc' },
      { order: 'asc' },
      { updatedOn: 'asc' },
      { askedOn: 'asc' },
    ],
  })
}

export const questionsWithoutAnswers: QueryResolvers['questions'] = ({
  answeredById,
  answeredByUsername,
  askedById,
  askedByUsername,
}) => {
  return db.question.findMany({
    where: {
      askedById,
      askedBy: { username: askedByUsername },
      answeredById,
      answeredBy: { username: answeredByUsername },
      notGoingToAnswer: false,
      OR: [
        {
          answer: null,
        },
        {
          answer: '',
        },
      ],
    },
    orderBy: [
      { pinned: 'asc' },
      { order: 'asc' },
      { updatedOn: 'asc' },
      { askedOn: 'asc' },
    ],
  })
}

export const recentQuestions: QueryResolvers['recentQuestions'] = ({
  currentUsersId,
  skip,
  take,
}) => {
  return db.question.findMany({
    where: {
      answeredById: {
        not: currentUsersId,
      },
    },
    orderBy: { updatedOn: 'desc' },
    skip,
    take,
  })
}

export const question: QueryResolvers['question'] = ({ id }) => {
  return db.question.findUnique({
    where: { id },
  })
}

export const createQuestion: MutationResolvers['createQuestion'] = ({
  input,
}) => {
  return db.question.create({
    data: input,
  })
}

export const updateQuestion: MutationResolvers['updateQuestion'] = ({
  id,
  input,
}) => {
  return db.question.update({
    data: input,
    where: { id },
  })
}

export const deleteQuestion: MutationResolvers['deleteQuestion'] = ({ id }) => {
  return db.question.delete({
    where: { id },
  })
}

export const Question: QuestionResolvers = {
  askedBy: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).askedBy(),
  answeredBy: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).answeredBy(),
  parentQuestion: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).parentQuestion(),
  questions: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).questions(),
  bookmarks: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).bookmarks(),
  countBookmarks: async (_obj, { root }) => {
    const numBookmarks = await db.question
      .findUnique({ where: { id: root.id } })
      .bookmarks()
    return numBookmarks.length
  },
  currentUserBookmarked: async (_obj, { root }) => {
    const curBookmarks = await db.question
      .findUnique({ where: { id: root.id } })
      .bookmarks({
        where: {
          userId: context?.currentUser?.id ? context.currentUser.id : undefined,
        },
      })
    return curBookmarks.length > 0
  },
  likes: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).likes(),
  countLikes: async (_obj, { root }) => {
    const Likes = await db.question
      .findUnique({ where: { id: root.id } })
      .likes()
    return Likes.length
  },
  currentUserLikes: async (_obj, { root }) => {
    const Likes = await db.question
      .findUnique({ where: { id: root.id } })
      .likes({
        where: {
          userId: context?.currentUser?.id ? context.currentUser.id : undefined,
        },
      })
    return Likes.length > 0
  },
  askAgains: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).askAgains(),
  votes: (_obj, { root }) =>
    db.question.findUnique({ where: { id: root.id } }).votes(),
}
