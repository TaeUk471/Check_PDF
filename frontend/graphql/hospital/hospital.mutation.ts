import { gql } from "@apollo/client";

import { HOSPITAL_FRAGMENT } from "./hospital.fragments";

export const CREATE_HOSPITAL = gql`
  mutation CreateHospital($hospitalId: Int!, $hospitalName: String!) {
    createHospital(hospitalId: $hospitalId, hospitalName: $hospitalName) {
      message
      hospital {
        ...HospitalFields
      }
    }
  }
  ${HOSPITAL_FRAGMENT}
`;

export const DELETE_HOSPITAL = gql`
  mutation DeleteHospital($hospitalId: Int!) {
    deleteHospital(hospitalId: $hospitalId)
  }
`;
