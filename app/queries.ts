import gql from 'graphql-tag';

export default {
  serverInfo: gql`
    query {
      serverInfo {
        rootUrl
      }
    }
  `,
  signIn: gql`
    mutation signIn($email: String!, $password: String!) {
      signIn(input: {email: $email, password: $password}) {
        success
        authenticationToken
      }
    }
  `,
};
