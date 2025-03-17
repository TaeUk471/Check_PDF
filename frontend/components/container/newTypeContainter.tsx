import PDFRenderCardHolder from "@components/cards/cardholder/pdfRenderCardHolder";
import TypeCardHolder from "@components/cards/cardholder/typeCardHolder";

const TypeContainer = () => {
  return (
    <div className="grid grid-cols-[1fr_2fr] h-full overflow-hidden">
      <TypeCardHolder />
      <PDFRenderCardHolder />
    </div>
  );
};

export default TypeContainer;

TypeContainer.displayName = "TypeContainer";
