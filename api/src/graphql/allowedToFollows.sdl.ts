export const schema = gql`
  type AllowedToFollow {
    id: Int!
    approved: Boolean!
    privateUserId: Int!
    privateUser: User!
    approvedFollowersId: Int!
    approvedFollowers: User!
  }

  type Query {
    allowedToFollows: [AllowedToFollow!]! @requireAuth
    allowedToFollow(id: Int!): AllowedToFollow @requireAuth
  }

  input CreateAllowedToFollowInput {
    approved: Boolean!
    privateUserId: Int!
    approvedFollowersId: Int!
  }

  input UpdateAllowedToFollowInput {
    approved: Boolean
    privateUserId: Int
    approvedFollowersId: Int
  }

  type Mutation {
    createAllowedToFollow(input: CreateAllowedToFollowInput!): AllowedToFollow!
      @requireAuth
    updateAllowedToFollow(
      id: Int!
      input: UpdateAllowedToFollowInput!
    ): AllowedToFollow! @requireAuth
    deleteAllowedToFollow(id: Int!): AllowedToFollow! @requireAuth
  }
`
