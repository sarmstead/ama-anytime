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
    avatarColor: ColorPalette
    lastLogin: DateTime
    clearNotifications: DateTime
    resetToken: String
    resetTokenExpiresAt: DateTime
    invitations: Int
    privateAccount: Boolean
    questionsAsked: [Question]!
    questionsAnswered: [Question]!
    bookmarks: [Bookmark]!
    likes: [Like]!
    askAgains: [AskAgain]!
    votes: [Vote]!
    recruits: [Recruit]!
    followedBy: [User]!
    following: [User]!
    privateUser: AllowedToFollow
    approvedFollowers: [AllowedToFollow]!
  }

  enum ColorPalette {
    PUNCH
    ULCAGOLD
    BLANC
    ONYX
    PESTO
    FIORD
    GREENSHEEN
    VERIDIANGREEN
    HEATWAVE
  }

  type Query {
    users: [User!]! @skipAuth
    user(id: Int, username: String): User @skipAuth
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
    avatarColor: ColorPalette
    lastLogin: DateTime
    clearNotifications: DateTime
    resetToken: String
    resetTokenExpiresAt: DateTime
    invitations: Int
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
    avatarColor: ColorPalette
    lastLogin: DateTime
    clearNotifications: DateTime
    resetToken: String
    resetTokenExpiresAt: DateTime
    invitations: Int
  }

  type Mutation {
    createUser(input: CreateUserInput!): User! @requireAuth
    updateUser(id: Int!, input: UpdateUserInput!): User! @requireAuth
    deleteUser(id: Int!): User! @requireAuth
  }
`
