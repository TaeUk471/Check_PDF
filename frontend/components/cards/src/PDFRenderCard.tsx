"use client";

import { cva, VariantProps } from "class-variance-authority";
import Image from "next/image";
import { GlobalWorkerOptions } from "pdfjs-dist";
import { useEffect, useState, useCallback } from "react";
import { ElementType, forwardRef } from "react";

import MagnifiedButton from "@components/buttons/src/magnified";
import View, { PolymorphicProps, PolymorphicRef } from "@components/View";
import { cn } from "@utils/cn";
import { getPdfDocument, renderPdfPages } from "@utils/pdf2image";
import usePdfStore from "store/usePdfDataStore";

if (typeof window !== "undefined") {
  GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
}

const PDFRenderCardVariants = cva(
  "flex justify-center items-center bg-white border-1 border-gray-300 shadow-md",
  {
    variants: {
      color: {
        normal: "border-gray-400",
        selected: "border-none ring-2 ring-offset-2 ring-blue-500",
        disabled: "border-gray-200 shadow-black opacity-60 cursor-not-allowed",
      },
      size: {
        sm: "w-[198.5px] h-[280.5px]",
        md: "w-[397px] h-[561px]",
        magnified: "w-[793px] h-[1122px]",
      },
      radius: {
        none: "rounded-none",
        sm: "rounded-sm",
        md: "rounded-md",
        lg: "rounded-lg",
        full: "rounded-full",
      },
      isDisabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "",
      },
    },
    defaultVariants: {
      color: "normal",
      size: "md",
      radius: "sm",
    },
  },
);

export type PDFRenderCardVariant = VariantProps<typeof PDFRenderCardVariants>;

export type PDFRenderCardProps<T extends ElementType> = PolymorphicProps<T> &
  PDFRenderCardVariant & {
    pdfId?: string;
    title?: boolean;
  };

const PDFRenderCard = forwardRef(
  <T extends ElementType = "div">(
    {
      as,
      pdfId,
      pageNumber,
      title = false,
      color,
      size,
      radius,
      isDisabled,
      className,
      ...props
    }: PDFRenderCardProps<T>,
    ref: PolymorphicRef<T>,
  ) => {
    const { pdfs, fetchPdf } = usePdfStore();
    const [currentPdfId, setCurrentPdfId] = useState<string | null>(pdfId || null);
    const [pageImages, setPageImages] = useState<string[]>([]);

    const loadPdf = useCallback(async () => {
      try {
        const finalPdfId = currentPdfId || (await fetchPdf());
        setCurrentPdfId(finalPdfId);

        const pdfUrl = pdfs[finalPdfId]?.url || "/Opic_TaeUk.pdf";
        const pdfDocument = await getPdfDocument(pdfUrl);
        if (!pdfDocument) return;

        const numPages = pdfDocument.numPages;
        const pagesToRender = title ? [1] : Array.from({ length: numPages }, (_, i) => i + 1);

        const renderedPages = await renderPdfPages(pdfDocument, pagesToRender);
        setPageImages(renderedPages);
        console.log(pdfUrl);
      } catch (error) {
        console.error("Error loading PDF:", error);
      }
    }, [currentPdfId, pdfs, fetchPdf, title]);

    useEffect(() => {
      loadPdf();
    }, [loadPdf]);

    const handleClick = () => {
      if (isDisabled) return;
      props.onClick?.();
    };

    return (
      <View
        as={as || "div"}
        className={cn(PDFRenderCardVariants({ color, size, radius, isDisabled, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}>
        <div className="flex flex-col gap-4 bg-gray-300">
          {pageImages.length > 0 ? (
            pageImages.map((image, index) => (
              <div id={`${index}`} key={index} className="relative">
                <Image
                  src={image}
                  width={397}
                  height={561}
                  alt={`PDF Page ${index + 1}`}
                  className={`w-full h-full ${isDisabled && "pointer-events-none"} ${cn(PDFRenderCardVariants({ radius }))}`}
                />
                <div className="absolute z-10 top-4 left-4 p-2 font-poppins text-4xl font-black text-red-400 text-stroke-black">
                  {pageNumber}
                </div>
                <MagnifiedButton imageSrc={image} className={""} />
              </div>
            ))
          ) : (
            <p>Loading PDF...</p>
            // 이후 <Loading/>으로 변경 예정
          )}
        </div>
      </View>
    );
  },
);

export default PDFRenderCard;
PDFRenderCard.displayName = "PDFRenderCard";
