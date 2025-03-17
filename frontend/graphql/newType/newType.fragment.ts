import { gql } from "@apollo/client";

import { FolderNames } from "graphql/merge/type.fragment";

export const GROUP_FRAGMENT = gql`
  fragment OldTypeFields on OldTypesDataType {
    groupName
    typeIds
    coverPdf
  }
`;

export const NEW_TYPE_FRAGMENT = gql`
  fragment NewTypeFields on NewTypesDataType {
    typeId
    typeName
    group
  }
`;

export type OldTypesDataType = {
  groupName: string;
  typeIds: number[];
  coverPdf: string;
};

export type NewTypesDataType = {
  typeId: number;
  typeName: string;
  group?: string;
};

export type NewTypeDataType = {
  group: OldTypesDataType[];
  newHospitalTypeFiles: NewTypesDataType[];
  folderNames: FolderNames;
};
