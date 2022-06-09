import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  AskAgainResolvers,
} from 'types/graphql'

export const askAgains: QueryResolvers['askAgains'] = () => {
  return db.askAgain.findMany()
}

export const askAgain: QueryResolvers['askAgain'] = ({ id }) => {
  return db.askAgain.findUnique({
    where: { id },
  })
}

export const createAskAgain: MutationResolvers['createAskAgain'] = ({
  input,
}) => {
  return db.askAgain.create({
    data: input,
  })
}

export const updateAskAgain: MutationResolvers['updateAskAgain'] = ({
  id,
  input,
}) => {
  return db.askAgain.update({
    data: input,
    where: { id },
  })
}

export const deleteAskAgain: MutationResolvers['deleteAskAgain'] = ({ id }) => {
  return db.askAgain.delete({
    where: { id },
  })
}

export const AskAgain: AskAgainResolvers = {
  user: (_obj, { root }) =>
    db.askAgain.findUnique({ where: { id: root.id } }).user(),
  question: (_obj, { root }) =>
    db.askAgain.findUnique({ where: { id: root.id } }).question(),
}
