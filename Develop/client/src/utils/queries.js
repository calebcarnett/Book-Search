export const QUERY_USERS = gql`
  query users($_id: String) {
    users(_id: $_id) {
      _id
      username
      email
      bookCount
      savedBooks
    }
  }
`;
