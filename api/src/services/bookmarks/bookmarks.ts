import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  BookmarkResolvers,
} from 'types/graphql'

export const bookmarks: QueryResolvers['bookmarks'] = ({ userId }) => {
  return db.bookmark.findMany({
    where: {
      user: {
        id: userId, // can find all the bookmarks for a given user
      },
    },
    orderBy: [{ createdOn: 'desc' }],
  })
}

export const bookmark: QueryResolvers['bookmark'] = ({ id }) => {
  return db.bookmark.findUnique({
    where: { id },
  })
}

export const specificBookmark = ({ questionId, userId }) => {
  return db.bookmark.findFirst({
    where: {
      questionId,
      userId,
    },
    select: { id: true },
  })
}

export const createBookmark: MutationResolvers['createBookmark'] = ({
  input,
}) => {
  return db.bookmark.create({
    data: input,
  })
}

export const updateBookmark: MutationResolvers['updateBookmark'] = ({
  id,
  input,
}) => {
  return db.bookmark.update({
    data: input,
    where: { id },
  })
}

// deletes a question based on the database id
export const deleteBookmark: MutationResolvers['deleteBookmark'] = ({ id }) => {
  return db.bookmark.delete({
    where: { id },
  })
}

// deletes a question based on the question and user id
export const deleteQuestionBookmark: MutationResolvers['deleteQuestionBookmark'] =
  ({ questionId, userId }) => {
    return db.bookmark.delete({
      where: {
        userId_questionId: {
          questionId,
          userId,
        },
      },
    })
  }

export const Bookmark: BookmarkResolvers = {
  user: (_obj, { root }) =>
    db.bookmark.findUnique({ where: { id: root.id } }).user(),
  question: (_obj, { root }) =>
    db.bookmark.findUnique({ where: { id: root.id } }).question(),
}
