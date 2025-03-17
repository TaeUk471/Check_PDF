import { Meta, StoryObj } from "@storybook/react";

import Button from "@components/buttons/src/button";
import Input from "@components/inputs/src/input";
import HospitalSearchBar from "@components/inputs/src/variants/hospitalSearchBar";
import useToggle from "@hooks/useToggle";

import { WithModalRoot } from "../decorators/withModalRoot";
import Modal, { ModalProps } from "../src/modal";

export default {
  title: "Components/Modal/NormalModal",
  component: Modal,
  argTypes: {
    title: {
      control: "text",
      defaultValue: "Sample Modal",
    },
    zIndex: {
      control: "number",
      defaultValue: 50,
    },
    buttonName: {
      control: "text",
    },
  },
  decorators: [WithModalRoot],
} as Meta<typeof Modal>;

type ModalStory = StoryObj<typeof Modal>;

const Template = (args: ModalProps) => {
  const { isOpen, open, close } = useToggle();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Button color={"submit"} variant={"shadow"} size={"lg"} onClick={() => open()}>
        열끄양!
      </Button>
      {isOpen && (
        <Modal {...args} onCloseAction={() => close()}>
          <div className="flex flex-col gap-4">
            <HospitalSearchBar onChange={() => console.log("Closed!")} value={""} />
            <Input
              color={"normal"}
              size={"lg"}
              radius={"lg"}
              placeholder="뭐하냥"
              isOutlined
              onChange={() => console.log("Closed!")}
            />
          </div>
        </Modal>
      )}
    </div>
  );
};

export const Default: ModalStory = {
  render: args => <Template {...args} />,
};

const Delete = (args: ModalProps) => {
  const { isOpen, open, close } = useToggle();
  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <Button color={"danger"} variant={"shadow"} size={"lg"} onClick={() => open()}>
        위험해!
      </Button>
      {isOpen && (
        <Modal
          {...args}
          title="병원 제거"
          onCloseAction={() => close()}
          buttonName="제거"
          buttonColor="danger">
          <p className="font-Interop text-2xl px-4">연세 세브란스 병원을 제거하시겠습니까?</p>
        </Modal>
      )}
    </div>
  );
};

export const DeleteModal: ModalStory = {
  render: args => <Delete {...args} />,
};
