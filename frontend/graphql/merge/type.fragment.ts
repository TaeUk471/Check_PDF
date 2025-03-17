import { gql } from "@apollo/client";

// 여기서 on 뒷부분은 잘봐야함!
// 여기의 fragment는 typeId coverFile, group을 인자로 가지는 타입인데,
// 이는 백엔드측 스키마에서 TypesDataType으로 분류됨. 그거에 따라서 넣어야함!

export const TYPE_FRAGMENT = gql`
  fragment TypeFields on TypesDataType {
    typeId
    coverFile {
      name
      base64
    }
    group
  }
`;

export const TYPE_CHECK_FRAGMENT = gql`
  fragment TypeCheckFields on TypeCheck {
    id
    pdf
  }
`;

export type TypesDataType = {
  typeId: string;
  coverFile: {
    name: string;
    base64: string;
  };
  group?: string;
};

// Mutation Input Type
export type TypeDataType = {
  hospitalId: string;
  files: FileSet;
  folderNames: FolderNames;
};

export type FileSet = {
  typeId: number;
  group: string;
};

export type FolderNames = Record<string, string>;

// Mutation Response
export type TypeMessage = {
  status: string;
  message: string;
  mergedFolders: FolderSet;
};

export type FolderSet = {
  groupId: string;
  folderName: string;
  typeCount: number;
};
