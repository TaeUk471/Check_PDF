import { gql } from "@apollo/client";

export const GET_REQUEST_BY_ID = gql`
  query GetRequestById($req_id: String!) {
    getRequestById(req_id: $req_id) {
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
