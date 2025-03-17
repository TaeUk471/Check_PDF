import { render, screen, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";

import usePdfStore from "store/usePdfDataStore";

import PDFRenderCard from "../src/PDFRenderCard";

// Zustand 상태를 Mocking
jest.mock("store/usePdfStore", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    pdfs: {
      "test-pdf-id": { id: "test-pdf-id", url: "/test-pdf.pdf", isSelected: false },
    },
    fetchPdf: jest.fn().mockResolvedValue("test-pdf-id"),
    toggleSelectPdf: jest.fn(),
  })),
}));

describe("PDFRenderCard Component", () => {
  it("renders the PDFRenderCard component", () => {
    render(<PDFRenderCard pdfId="test-pdf-id" />);

    expect(screen.getByText("Loading PDF...")).toBeInTheDocument();
  });

  it("renders the first page of the PDF when title is true", async () => {
    render(<PDFRenderCard pdfId="test-pdf-id" title={true} />);

    expect(await screen.findByAltText("PDF Page 1")).toBeInTheDocument();
  });

  it("toggles selection when clicked", async () => {
    const toggleSelectPdf = jest.fn();
    (usePdfStore as unknown as jest.Mock).mockReturnValue({ toggleSelectPdf });

    render(<PDFRenderCard pdfId="test-pdf-id" />);

    fireEvent.click(screen.getByRole("button"));
    expect(toggleSelectPdf).toHaveBeenCalledWith("test-pdf-id");
  });
});
