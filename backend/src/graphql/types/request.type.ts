// src/types/request.type.ts
import { ObjectType, Field, ID, Float } from "@nestjs/graphql";

@ObjectType()
export class Vertex {
  @Field(() => Float)
  x: number;

  @Field(() => Float)
  y: number;
}

@ObjectType()
export class BoundingPoly {
  @Field(() => [Vertex])
  vertices: Vertex[];
}

@ObjectType()
export class field {
  @Field()
  valueType: string;

  @Field(() => BoundingPoly)
  boundingPoly: BoundingPoly;

  @Field()
  inferText: string;

  @Field(() => Float)
  inferConfidence: number;

  @Field()
  type: string;

  @Field()
  lineBreak: boolean;
}

@ObjectType()
export class Image {
  @Field(() => ID)
  uid: string;

  @Field()
  name: string;

  @Field()
  inferResult: string;

  @Field()
  message: string;

  @Field(() => [field])
  fields: field[];
}

@ObjectType()
export class Request {
  @Field(() => ID)
  req_id: string;

  @Field()
  timestamp: string;

  @Field(() => [Image])
  images: Image[];
}
