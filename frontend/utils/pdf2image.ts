import { getDocument, PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";

/**
 * PDF 문서를 불러오는 함수
 */
export const getPdfDocument = async (pdfUrl: string): Promise<PDFDocumentProxy | null> => {
  try {
    const pdfDocument = await getDocument(pdfUrl).promise;
    return pdfDocument;
  } catch (error) {
    console.error("Error loading PDF document:", error);
    return null;
  }
};

/**
 * PDF 페이지를 Blob URL로 렌더링하는 함수
 */
export const renderPdfPages = async (
  pdfDocument: PDFDocumentProxy,
  pagesToRender: number[],
): Promise<string[]> => {
  try {
    const renderedPages = await Promise.all(
      pagesToRender.map(async pageNum => {
        const page: PDFPageProxy = await pdfDocument.getPage(pageNum);
        const viewport = page.getViewport({ scale: 1.5 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) throw new Error("Canvas context could not be created");

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context, viewport }).promise;

        return new Promise<string>((resolve, reject) => {
          canvas.toBlob(blob => {
            if (!blob) {
              reject("Canvas toBlob conversion failed");
              return;
            }
            resolve(URL.createObjectURL(blob));
          }, "image/png");
        });
      }),
    );

    return renderedPages;
  } catch (error) {
    console.error("Error rendering PDF pages:", error);
    return [];
  }
};
