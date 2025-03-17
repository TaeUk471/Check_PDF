import { gql } from "@apollo/client";

import { HOSPITAL_FRAGMENT } from "./hospital.fragments";

export const GET_HOSPITALS = gql`
  query GetHospitals {
    hospitals {
      ...HospitalFields
    }
  }
  ${HOSPITAL_FRAGMENT}
`;
