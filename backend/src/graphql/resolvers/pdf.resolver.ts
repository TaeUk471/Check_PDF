import { Resolver, Query, Args } from "@nestjs/graphql";

import { PdfService } from "../services/pdf.service";

@Resolver()
export class PdfResolver {
  constructor(private readonly pdfService: PdfService) {}

  @Query(() => [String])
  async getPdfPaths(@Args("folderKey") folderKey: string) {
    return await this.pdfService.getPdfFiles(folderKey);
  }
}
