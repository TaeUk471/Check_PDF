import { gql } from "@apollo/client";

import { TYPE_CHECK_FRAGMENT, TYPE_FRAGMENT } from "./type.fragment";

// 여기서 지정시 types뒤에 이렇게해서 들어간다
// apolloClient.query({
//   query: GET_TYPES,
//   variables: { hospitalId: 123 },
// });

export const GET_TYPES = gql`
  query GetTypes($hospitalId: Int!) {
    types(hospitalId: $hospitalId) {
      typeFiles {
        ...TypeFields
      }
      folderNames {
        keys
        values
      }
    }
  }
  ${TYPE_FRAGMENT}
`;

export const GET_TYPE_CHECK = gql`
  query GetTypeCheck($hospitalId: Int!) {
    typeCheck {
      ...TypeCheckFields
    }
    description
  }
  ${TYPE_CHECK_FRAGMENT}
`;
