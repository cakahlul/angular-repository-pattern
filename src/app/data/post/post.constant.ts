import { gql } from 'apollo-angular';

export const GRAPHQL_QUERY = {
  fetchAll: gql`
    {
      posts {
        id
        title
        date
      }
    }
  `,
  fetchOne: gql`
    query FetchOnePost($id: ID!) {
      post(id: $id) {
        id
        title
        date
      }
    }
  `,
  update: gql`
    mutation updatePost($id: ID!, $input: UpdatePostInput!) {
      updatePost(id: $id, input: $input) {
        id
      }
    }
  `,
};
