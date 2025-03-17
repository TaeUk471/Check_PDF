import { useEffect, useRef } from "react";

import Input from "@components/inputs/src/input";

import Modal, { ModalProps } from "./modal";

interface NamingModalProps extends ModalProps {
  value: string;
  onChangeAction: (value: string) => void;
  isOpen: boolean;
  onCloseAction: () => void;
  onButtonClickAction: () => void;
}

const Naming = ({
  value,
  onChangeAction,
  isOpen,
  onCloseAction,
  onButtonClickAction,
  ...modalProps
}: NamingModalProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  });

  return (
    <>
      {isOpen && (
        <Modal
          {...modalProps}
          title="폴더 주제"
          onCloseAction={onCloseAction}
          buttonName="확인"
          buttonColor="submit"
          onButtonClickAction={onButtonClickAction}>
          <Input
            ref={inputRef}
            color="normal"
            size="md"
            variant="b"
            radius="lg"
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChangeAction(e.target.value)}
            placeholder="폴더의 제목을 정해주세요"
          />
        </Modal>
      )}
    </>
  );
};

export default Naming;
