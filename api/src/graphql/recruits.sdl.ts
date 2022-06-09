export const schema = gql`
  type Recruit {
    id: Int!
    userId: Int!
    user: User!
    email: String!
  }

  type Query {
    recruits: [Recruit!]! @requireAuth
    recruit(id: Int!): Recruit @requireAuth
  }

  input CreateRecruitInput {
    userId: Int!
    email: String!
  }

  input UpdateRecruitInput {
    userId: Int
    email: String
  }

  type Mutation {
    createRecruit(input: CreateRecruitInput!): Recruit! @requireAuth
    updateRecruit(id: Int!, input: UpdateRecruitInput!): Recruit! @requireAuth
    deleteRecruit(id: Int!): Recruit! @requireAuth
  }
`
