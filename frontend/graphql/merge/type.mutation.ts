import { gql } from "@apollo/client";

export const CREATE_TYPE = gql`
  mutation CreateType($hospitalId: Int!, $files: [FileSet!]!, $folderNames: FolderNamesInput!) {
    createType(hospitalId: $hospitalId, files: $files, folderNames: $folderNames) {
      status
      message
      mergedFolders {
        groupId
        folderName
        typeCount
      }
    }
  }
`;
