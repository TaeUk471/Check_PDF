import { gql } from "@apollo/client";

import { USER_FRAGMENT } from "./user.fragments";

// 여기서 취급하는 UserFields 같은 경우는 User_Fragment 내부에 정의되어잇음. 빌려오는 작업
// 만약에 두가지 이상의 Fragment를 공동사용시 해당 로직 내부에 같은 방식으로 취급하면됨
// 어차피 병렬적으로 가져와서 처리를 하는 것이기때문에 우선권의 개념이 없음

export const GET_USERS = gql`
  query GetUsers {
    users {
      ...UserFields
    }
  }
  ${USER_FRAGMENT}
`;

export const GET_USER = gql`
  query GetUser($id: String!) {
    getUser(id: $id) {
      ...UserFields
    }
  }
  ${USER_FRAGMENT}
`;
