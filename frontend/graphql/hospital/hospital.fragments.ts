import { gql } from "@apollo/client";

export const HOSPITAL_FRAGMENT = gql`
  fragment HospitalFields on Hospital {
    hospitalId
    hospitalName
  }
`;

// 타입도 같이 관리
// Query Input

export type HospitalDataType = {
  hospitalId: number;
  hospitalName: string;
};

// Mutation Response

export type HospitalMessage = {
  message: string;
};
