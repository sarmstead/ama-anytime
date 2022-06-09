import { db } from 'src/lib/db'
import type {
  QueryResolvers,
  MutationResolvers,
  RecruitResolvers,
} from 'types/graphql'

export const recruits: QueryResolvers['recruits'] = () => {
  return db.recruit.findMany()
}

export const recruit: QueryResolvers['recruit'] = ({ id }) => {
  return db.recruit.findUnique({
    where: { id },
  })
}

export const createRecruit: MutationResolvers['createRecruit'] = ({
  input,
}) => {
  return db.recruit.create({
    data: input,
  })
}

export const updateRecruit: MutationResolvers['updateRecruit'] = ({
  id,
  input,
}) => {
  return db.recruit.update({
    data: input,
    where: { id },
  })
}

export const deleteRecruit: MutationResolvers['deleteRecruit'] = ({ id }) => {
  return db.recruit.delete({
    where: { id },
  })
}

export const Recruit: RecruitResolvers = {
  user: (_obj, { root }) =>
    db.recruit.findUnique({ where: { id: root.id } }).user(),
}
