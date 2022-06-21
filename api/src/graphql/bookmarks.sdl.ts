export const schema = gql`
  type Bookmark {
    id: Int!
    userId: Int!
    user: User!
    questionId: Int!
    question: Question!
  }

  type Query {
    bookmarks(userId: Int): [Bookmark!]! @skipAuth
    bookmark(id: Int, questionId: Int, userId: Int): Bookmark @skipAuth
    specificBookmark(userId: Int!, questionId: Int!): Bookmark @skipAuth
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
    deleteQuestionBookmark(questionId: Int!, userId: Int!): Bookmark! @skipAuth
  }
`
