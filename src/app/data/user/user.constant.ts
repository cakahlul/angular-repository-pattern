import { gql } from 'apollo-angular';

export const GRAPHQL_QUERY = {
  fetchAll: gql`
    {
      users {
        id
        firstName
        age
      }
    }
  `,
  fetchOne: gql`
    query FetchOneUser($id: ID!) {
      user(id: $id) {
        id
        firstName
        age
      }
    }
  `,
};
