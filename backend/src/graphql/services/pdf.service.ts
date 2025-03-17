import * as fs from "fs";
import * as path from "path";

import { Injectable } from "@nestjs/common";

@Injectable()
export class PdfService {
  private uploadDir = path.join(__dirname, "..", "..", "uploads");

  async getPdfFiles(folderKey: string): Promise<{ key: string; path: string }[]> {
    const folderPath = path.join(this.uploadDir, folderKey);
    const files = fs.readdirSync(folderPath).filter(file => file.endsWith(".pdf"));

    return files.map(file => ({
      key: folderKey,
      path: `${folderKey}/${file}`,
    }));
  }
}

// 지속적으로 path를 넘겨주면서, getDocument를 통해서 처리 pdf에 대해서 처리.
