import { gql } from "@apollo/client";

export const USER_FRAGMENT = gql`
  fragment UserFields on User {
    id
    name
    email
  }
`;

// 타입도 같이 관리
// Query Data

export type UserDataType = {
  id: string;
  name: string;
  email: string;
};

// Mutation Response

export type UserMessage = {
  message: string;
};
