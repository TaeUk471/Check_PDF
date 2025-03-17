import { gql } from "@apollo/client";

export const USER_FRAGMENT = gql`
  fragment UserFields on User {
    id
    name
    email
  }`;

처럼 제작하고, 해당 상수를 import 하여 지속적으로 사용하는 데이터 필드에 대해서 처리한다.
