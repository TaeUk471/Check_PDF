import { Field, ID, ObjectType, registerEnumType } from "@nestjs/graphql";

@ObjectType()
export class FilePath {
  @Field()
  filePath: string;
}

export enum Severity {
  DANGER = "danger",
  WARNING = "warning",
  WAITING = "waiting",
}

registerEnumType(Severity, {
  name: "Severity",
  description: "Notification severity levels",
});

@ObjectType()
export class Notification {
  @Field(() => ID)
  hospitalId: number;

  @Field()
  title: string;

  @Field(() => Severity)
  severity: Severity;

  @Field()
  hospitalName: string;

  @Field(() => FilePath)
  fileName: FilePath;

  @Field()
  createdAt: string;
}
