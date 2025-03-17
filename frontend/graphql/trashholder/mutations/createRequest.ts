import { gql } from "@apollo/client";

export const CREATE_REQUEST = gql`
  mutation CreateRequest($createRequestInput: CreateRequestInput!) {
    createRequest(createRequestInput: $createRequestInput) {
      req_id
      timestamp
      images {
        uid
        name
        inferResult
        message
        fields {
          valueType
          boundingPoly {
            vertices {
              x
              y
            }
          }
          inferText
          inferConfidence
          type
          lineBreak
        }
      }
    }
  }
`;
