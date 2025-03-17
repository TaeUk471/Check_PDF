import { Field, Int, ObjectType } from "@nestjs/graphql";

import { FolderNames } from "../merge/type.type";

@ObjectType()
export class OldTypesData {
  @Field(() => String)
  groupName: string;

  @Field(() => [Int])
  typeIds: number[];

  @Field()
  coverPdf: string;
}

@ObjectType()
export class NewTypesDataType {
  @Field(() => Int)
  typeId: number;

  @Field()
  typeName: string;

  @Field()
  group?: string;
}

@ObjectType()
export class NewType {
  @Field(() => [OldTypesData])
  group: OldTypesData[];

  @Field(() => [NewTypesDataType])
  newHospitalTypeFiles: NewTypesDataType[];

  @Field(() => FolderNames)
  folderNames: FolderNames;
}
