export const schema = gql`
  type AskAgain {
    id: Int!
    user: User!
    userId: Int!
    question: Question!
    questionId: Int!
  }

  type Query {
    askAgains: [AskAgain!]! @requireAuth
    askAgain(id: Int!): AskAgain @requireAuth
  }

  input CreateAskAgainInput {
    userId: Int!
    questionId: Int!
  }

  input UpdateAskAgainInput {
    userId: Int
    questionId: Int
  }

  type Mutation {
    createAskAgain(input: CreateAskAgainInput!): AskAgain! @requireAuth
    updateAskAgain(id: Int!, input: UpdateAskAgainInput!): AskAgain!
      @requireAuth
    deleteAskAgain(id: Int!): AskAgain! @requireAuth
  }
`
