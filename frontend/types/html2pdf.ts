declare module "html2pdf.js" {
  const html2pdf: {
    (): {
      from: (element: HTMLElement) => {
        set: (options: {
          margin?: number | number[];
          filename?: string;
          image?: { type: string; quality: number };
          html2canvas?: { scale: number; useCORS?: boolean };
          jsPDF?: { unit: string; format: string; orientation: string };
        }) => {
          toPdf: () => {
            save: () => void;
          };
        };
      };
    };
  };
  export default html2pdf;
}
