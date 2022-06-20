export const schema = gql`
  type Like {
    id: Int!
    user: User!
    userId: Int!
    question: Question!
    questionId: Int!
  }

  type Query {
    likes: [Like!]! @requireAuth
    like(id: Int!): Like @requireAuth
  }

  input CreateLikeInput {
    userId: Int!
    questionId: Int!
  }

  input UpdateLikeInput {
    userId: Int
    questionId: Int
  }

  type Mutation {
    createLike(input: CreateLikeInput!): Like! @skipAuth
    updateLike(id: Int!, input: UpdateLikeInput!): Like! @requireAuth
    deleteLike(id: Int!): Like! @requireAuth
    deleteQuestionLike(questionId: Int!, userId: Int!): Like! @skipAuth
  }
`
