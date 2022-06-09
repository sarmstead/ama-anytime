import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  BookmarkResolvers,
} from 'types/graphql'

export const bookmarks: QueryResolvers['bookmarks'] = () => {
  return db.bookmark.findMany()
}

export const bookmark: QueryResolvers['bookmark'] = ({ id }) => {
  return db.bookmark.findUnique({
    where: { id },
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

export const deleteBookmark: MutationResolvers['deleteBookmark'] = ({ id }) => {
  return db.bookmark.delete({
    where: { id },
  })
}

export const Bookmark: BookmarkResolvers = {
  user: (_obj, { root }) =>
    db.bookmark.findUnique({ where: { id: root.id } }).user(),
  question: (_obj, { root }) =>
    db.bookmark.findUnique({ where: { id: root.id } }).question(),
}
