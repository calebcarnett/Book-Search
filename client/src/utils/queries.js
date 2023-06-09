import { gql } from "@apollo/client";

export const GET_ME = gql`
  query users {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        description
        bookId
        image
        link
        title
      }
    }
  }
`;
