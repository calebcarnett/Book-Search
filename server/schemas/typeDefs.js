const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    me: UserData
  }
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(bookData: BookInput!): User
    removeBook((bookId: String!): User)
  }
  type User {
    _id: ID!
    username: String
    email: String
    bookCount: String
    savedBooks: [BookType]
  }
  type Book {
    _id: ID!
    username: String
    description: String
    title: String
    image: String
    link: String
  }
  type Auth {
    token: String
    user: User
  }
`;

module.exports = typeDefs;
