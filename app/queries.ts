import gql from 'graphql-tag';

export default {
  serverInfo: gql`
    query {
      serverInfo {
        rootUrl
      }
    }
  `,
};
