import Image from "next/image";

import Button from "@components/buttons/src/button";
import Modal from "@components/modals/src/modal";
import useToggle from "@hooks/useToggle";

interface MagnifiedButtonProps {
  imageSrc: string;
  className: string;
}

const MagnifiedButton = ({ imageSrc, className }: MagnifiedButtonProps) => {
  const { isOpen, open, close } = useToggle();

  return (
    <>
      <Button
        size={"md"}
        radius={"lg"}
        color={"default"}
        variant={"shadow"}
        onClick={open}
        className={`absolute z-10 top-4 right-4 p-2 ${className}`}>
        <i className="fa fa-up-down-left-right" />
      </Button>
      {isOpen && (
        <Modal onCloseAction={() => close()} onButtonClickAction={() => console.log("")}>
          <Image
            src={imageSrc}
            width={793}
            height={1122}
            alt="Magnified PDF Page"
            className="w-auto h-auto max-w-[80vw] max-h-[80vh] rounded-lg shadow-lg"
          />
        </Modal>
      )}
    </>
  );
};
export default MagnifiedButton;
