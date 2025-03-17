// frontend/src/graphql/queries/getAllRequests.ts
import { gql } from "@apollo/client";

export const GET_ALL_REQUESTS = gql`
  query GetAllRequests {
    getAllRequests {
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
