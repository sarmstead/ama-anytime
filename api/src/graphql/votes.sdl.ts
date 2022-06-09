export const schema = gql`
  type Vote {
    id: Int!
    user: User!
    userId: Int!
    direction: VoteDirection!
    question: Question!
    questionId: Int!
  }

  enum VoteDirection {
    UP
    DOWN
  }

  type Query {
    votes: [Vote!]! @requireAuth
    vote(id: Int!): Vote @requireAuth
  }

  input CreateVoteInput {
    userId: Int!
    direction: VoteDirection!
    questionId: Int!
  }

  input UpdateVoteInput {
    userId: Int
    direction: VoteDirection
    questionId: Int
  }

  type Mutation {
    createVote(input: CreateVoteInput!): Vote! @requireAuth
    updateVote(id: Int!, input: UpdateVoteInput!): Vote! @requireAuth
    deleteVote(id: Int!): Vote! @requireAuth
  }
`
