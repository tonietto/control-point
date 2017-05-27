import gql from 'graphql-tag';

export default gql `
  mutation changePassword($token: String!, $email: String!, $password: String!, $confirmation: String!) {
    changePassword(token: $token, email: $email, password: $password, confirmation: $confirmation) {
      email
    }
  }
`;
