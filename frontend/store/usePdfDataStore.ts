import { create } from "zustand";

interface PdfPage {
  id: string;
  url: string;
  isSelected: boolean;
}

interface PdfStore {
  pdfs: Record<string, PdfPage>;
  addPdf: (pdfId: string, url: string) => void;
  fetchPdf: (pdfId?: string) => Promise<string>; // API에서 PDF 가져오기
  toggleSelectPdf: (pdfId: string) => void;
}

const usePdfStore = create<PdfStore>(set => ({
  pdfs: {},

  addPdf: (pdfId, url) => {
    set(state => ({
      pdfs: {
        ...state.pdfs,
        [pdfId]: { id: pdfId, url, isSelected: false },
      },
    }));
  },

  fetchPdf: async (pdfId?: string) => {
    try {
      let response;
      if (pdfId) {
        response = await fetch(`/api/pdf/${pdfId}`);
      } else {
        response = await fetch("/api/pdf/create"); // pdfId가 없으면 새로 생성
      }

      const { id, url } = await response.json();
      set(state => ({
        pdfs: {
          ...state.pdfs,
          [id]: { id, url, isSelected: false },
        },
      }));

      return id;
    } catch (error) {
      console.error("Failed to fetch PDF:", error);
      throw error;
    }
  },

  toggleSelectPdf: pdfId => {
    set(state => ({
      pdfs: {
        ...state.pdfs,
        [pdfId]: {
          ...state.pdfs[pdfId],
          isSelected: !state.pdfs[pdfId].isSelected,
        },
      },
    }));
  },
}));

export default usePdfStore;
