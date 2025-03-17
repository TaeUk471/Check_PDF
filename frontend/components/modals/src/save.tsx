import { ReactNode } from "react";

import Modal, { ModalProps } from "./modal";

interface DeleteModalProps extends ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Save = ({ children, isOpen, onClose, ...modalProps }: DeleteModalProps) => {
  return (
    <>
      {isOpen && (
        <Modal
          {...modalProps}
          title="세션 저장"
          onCloseAction={onClose}
          buttonName="저장"
          buttonColor="check"
          onButtonClickAction={() => console.log("사랑해")}>
          {children}
        </Modal>
      )}
    </>
  );
};

export default Save;
