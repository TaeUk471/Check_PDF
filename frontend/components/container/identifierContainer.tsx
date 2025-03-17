import IdentifierCardHolder from "@components/cards/cardholder/identifierCardHolder";
import IdentifierInputCardHolder from "@components/cards/cardholder/identifierInputCardHolder";

const IdentifierContainer = () => {
  return (
    <div className="grid grid-cols-[3fr_4fr] h-full">
      <IdentifierCardHolder />
      <IdentifierInputCardHolder />
    </div>
  );
};

export default IdentifierContainer;

IdentifierContainer.displayName = "IdentifierContainer";
