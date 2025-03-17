import { ReactNode } from "react";

import Modal, { ModalProps } from "./modal";

interface DeleteModalProps extends ModalProps {
  children: ReactNode;
  isOpen: boolean;
}

const Delete = ({ children, isOpen, onCloseAction, onButtonClickAction }: DeleteModalProps) => {
  return (
    <>
      {isOpen && (
        <Modal
          title="병원 제거"
          onCloseAction={onCloseAction}
          buttonName="제거"
          buttonColor="danger"
          zIndex={10}
          onButtonClickAction={onButtonClickAction}>
          <div className="font-Interop text-2xl px-4" />
          {children}
        </Modal>
      )}
    </>
  );
};

export default Delete;
