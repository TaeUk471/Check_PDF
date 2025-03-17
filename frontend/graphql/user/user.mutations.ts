import { gql } from "@apollo/client";

import { USER_FRAGMENT } from "./user.fragments";

export const CREATE_USER = gql`
  mutation CreateUser($name: String!, $email: String!) {
    createUser(name: $name, email: $email) {
      ...UserFields
    }
  }
  ${USER_FRAGMENT}
`;

export const UPDATE_USER = gql`
  mutation UpdateUser($id: String!, $name: String!, $email: String!) {
    updateUser(id: $id, name: $name, email: $email) {
      ...UserFields
    }
  }
  ${USER_FRAGMENT}
`;

export const DELETE_USER = gql`
  mutation DeleteUser($id: String!) {
    deleteUser(id: $id) {
      success
    }
  }
`;
