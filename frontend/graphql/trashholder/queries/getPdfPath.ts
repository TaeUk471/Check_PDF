import { gql } from "@apollo/client";

export const GET_PDF_PATHS = gql`
  query GetPdfPaths($folderKey: String!) {
    getPdfPaths(folderKey: $folderKey) {
      key
      path
    }
  }
`;

// pdf Path에 대한 처리.
