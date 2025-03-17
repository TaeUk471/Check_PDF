import { gql } from "@apollo/client";

import { GROUP_FRAGMENT, NEW_TYPE_FRAGMENT } from "./newType.fragment";

export const GET_NEW_TYPES = gql`
  query GetNewTypes($hospitalId: Int!) {
    newTypes(hospitalId: $hospitalId) {
      group {
        ...OldTypeFields
      }
      newHospitalTypeFiles {
        ...NewTypeFields
      }
      folderNames {
        keys
        values
      }
    }
  }
  ${GROUP_FRAGMENT}
  ${NEW_TYPE_FRAGMENT}
`;
