import { Field, ID, InputType, Int, ObjectType } from "@nestjs/graphql";

// 1. CoverFile을 먼저 선언
@ObjectType()
export class CoverFile {
  @Field()
  name: string;

  @Field()
  base64: string;
}

// 2. FileSet
@ObjectType()
export class FileSet {
  @Field(() => ID)
  typeId: number;

  @Field()
  group: string;
}

// 3. FolderSet
@ObjectType()
export class FolderSet {
  @Field(() => ID)
  groupId: string;

  @Field()
  folderName: string;

  @Field()
  typeCount: number;
}

// 4. FolderNames
@ObjectType()
export class FolderNames {
  @Field(() => [String])
  keys: string[];

  @Field(() => [String])
  values: string[];
}

// 5. TypesDataType
@ObjectType()
export class TypesDataType {
  @Field(() => ID)
  typeId: string;

  @Field(() => CoverFile)
  coverFile: CoverFile;

  @Field({ nullable: true })
  group?: string;
}

// 6. Type
@ObjectType()
export class Type {
  @Field(() => Int)
  hospitalId: number;

  @Field(() => [FileSet])
  files: FileSet[];

  @Field(() => FolderNames)
  folderNames: FolderNames;
}

// 7. TypeMessage
@ObjectType()
export class TypeMessage {
  @Field()
  status: string;

  @Field()
  message: string;

  @Field(() => [FolderSet])
  mergedFolders: FolderSet[];
}

// 8. TypeFilesOutput
@ObjectType()
export class TypeFilesOutput {
  @Field(() => [TypesDataType])
  typeFiles: TypesDataType[];

  @Field(() => FolderNames)
  folderNames: FolderNames;
}

@InputType()
export class FileInput {
  @Field({ nullable: true })
  fileId?: string;

  @Field({ nullable: true })
  fileName?: string;

  @Field()
  group: string;
}

@InputType()
export class FolderNamesInput {
  @Field(() => [String])
  keys: string[];

  @Field(() => [String])
  values: string[];
}

@InputType()
export class TypeInput {
  @Field()
  hospitalId: number;

  @Field(() => [FileInput])
  files: FileInput[];

  @Field(() => FolderNamesInput)
  folderNames: FolderNamesInput;
}
