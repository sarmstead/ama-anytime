export const schema = gql`
  type User {
    id: Int!
    username: String!
    email: String!
    fullName: String!
    hashedPassword: String!
    salt: String!
    joinedDate: DateTime!
    bio: String
    location: String
    website: String
    cover: String
    avatar: String
    lastLogin: DateTime
    clearNotifications: DateTime!
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int!): User @skipAuth
  }

  input CreateUserInput {
    username: String!
    email: String!
    fullName: String!
    hashedPassword: String!
    salt: String!
    joinedDate: DateTime!
    bio: String
    location: String
    website: String
    cover: String
    avatar: String
    lastLogin: DateTime
    clearNotifications: DateTime
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  input UpdateUserInput {
    username: String
    email: String
    fullName: String
    hashedPassword: String
    salt: String
    joinedDate: DateTime
    bio: String
    location: String
    website: String
    cover: String
    avatar: String
    lastLogin: DateTime
    clearNotifications: DateTime
    resetToken: String
    resetTokenExpiresAt: DateTime
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
