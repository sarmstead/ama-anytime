export const schema = gql`
  type Question {
    id: Int!
    question: String!
    answer: String
    order: Int
    pinned: Boolean!
    askedBy: User!
    askedById: Int!
    answeredBy: User!
    answeredById: Int!
    askedOn: DateTime
    updatedOn: DateTime
    parentQuestionId: Int
    parentQuestion: Question
    questions: [Question]!
    bookmarks: [Bookmark]!
    likes: [Like]!
    askAgains: [AskAgain]!
    votes: [Vote]!
  }

  type Query {
    questions(
      answeredById: Int
      askedByUsername: String
      askedById: Int
      answerIsEmpty: Boolean
      answeredByUsername: String
    ): [Question!]! @skipAuth
    question(id: Int!): Question @skipAuth
  }

  input CreateQuestionInput {
    question: String!
    answer: String
    order: Int
    pinned: Boolean!
    askedById: Int!
    answeredById: Int!
    askedOn: DateTime
    updatedOn: DateTime
    parentQuestionId: Int
  }

  input UpdateQuestionInput {
    question: String
    answer: String
    order: Int
    pinned: Boolean
    askedById: Int
    answeredById: Int
    askedOn: DateTime
    updatedOn: DateTime
    parentQuestionId: Int
  }

  type Mutation {
    createQuestion(input: CreateQuestionInput!): Question! @requireAuth
    updateQuestion(id: Int!, input: UpdateQuestionInput!): Question!
      @requireAuth
    deleteQuestion(id: Int!): Question! @requireAuth
  }
`
