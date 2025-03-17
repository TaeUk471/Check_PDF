// src/resolvers/request.resolver.ts
import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";

import { CreateRequestInput } from "../dto/create-request.input";
import { RequestService } from "../services/request.service";
import { Request } from "../types/request.type";

@Resolver(of => Request)
export class RequestResolver {
  constructor(private readonly requestService: RequestService) {}

  /**
   * 모든 요청 데이터를 조회하는 쿼리
   * @returns Request 배열
   */
  @Query(() => [Request], { name: "getAllRequests" })
  getAllRequests(): Request[] {
    return this.requestService.getAllRequests();
  }

  /**
   * 특정 요청 ID로 요청 데이터를 조회하는 쿼리
   * @param req_id 요청 ID
   * @returns Request 객체 또는 null
   */
  @Query(() => Request, { name: "getRequestById", nullable: true })
  getRequestById(@Args("req_id") req_id: string): Request | null {
    const request = this.requestService.getRequestById(req_id);
    return request || null;
  }

  /**
   * 새로운 요청 데이터를 생성하는 뮤테이션
   * @param createRequestInput 생성할 요청 데이터
   * @returns 생성된 Request 객체
   */
  @Mutation(() => Request)
  createRequest(@Args("createRequestInput") createRequestInput: CreateRequestInput): Request {
    this.requestService.addRequest(createRequestInput);
    return createRequestInput;
  }
}
