"use client";

import Image from "next/image";
import { GlobalWorkerOptions } from "pdfjs-dist";
import { useCallback, useEffect, useState } from "react";

import { getPdfDocument, renderPdfPages } from "@utils/pdf2image";

if (typeof window !== "undefined") {
  GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
}

export default function IdentifierCardHolder() {
  const [pageURL, setPageURL] = useState<string>("");

  const loadingPdf = useCallback(async () => {
    try {
      const pdfUrl = "/Opic_TaeUk.pdf";
      const pdfDocument = await getPdfDocument(pdfUrl);

      if (!pdfDocument) {
        console.error("PDF 문서가 null입니다!");
        return;
      }
      const renderedPages = await renderPdfPages(pdfDocument, [1]);
      if (renderedPages.length > 0) {
        setPageURL(renderedPages[0]);
      }
    } catch (error) {
      console.error("identifierCard PDF loading Error", error);
    }
  }, []);

  useEffect(() => {
    loadingPdf();
  }, [loadingPdf]);

  return (
    <div className="m-auto bg-white relative border-2 border-black overflow-auto w-[416.69px] h-[589.2px]">
      {pageURL ? (
        <Image
          src={pageURL}
          alt="PDF Page 1"
          fill
          unoptimized // blob-url에 대한 에러 방지
        />
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
}
