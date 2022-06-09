export const schema = gql`
  type Bookmark {
    id: Int!
    userId: Int!
    user: User!
    questionId: Int!
    question: Question!
  }

  type Query {
    bookmarks: [Bookmark!]! @requireAuth
    bookmark(id: Int!): Bookmark @requireAuth
  }

  input CreateBookmarkInput {
    userId: Int!
    questionId: Int!
  }

  input UpdateBookmarkInput {
    userId: Int
    questionId: Int
  }

  type Mutation {
    createBookmark(input: CreateBookmarkInput!): Bookmark! @requireAuth
    updateBookmark(id: Int!, input: UpdateBookmarkInput!): Bookmark!
      @requireAuth
    deleteBookmark(id: Int!): Bookmark! @requireAuth
  }
`
