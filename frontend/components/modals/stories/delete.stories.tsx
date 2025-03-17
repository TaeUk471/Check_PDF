import { Meta, StoryObj } from "@storybook/react";

import Button from "@components/buttons/src/button";
import useToggle from "@hooks/useToggle";

import { WithModalRoot } from "../decorators/withModalRoot";
import Delete from "../src/delete";
import { ModalProps } from "../src/modal";

export default {
  title: "Components/Modal/Delete",
  component: Delete,
  argTypes: {
    title: {
      control: "text",
      defaultValue: "병원 제거",
    },
    zIndex: {
      control: "number",
      defaultValue: 50,
    },
    buttonName: {
      control: "text",
      defaultValue: "제거",
    },
  },
  decorators: [
    WithModalRoot,
    Story => (
      <div className="flex w-screen h-screen justify-center items-center">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Delete>;

type DeleteModalStory = StoryObj<typeof Delete>;

const Template = (args: ModalProps) => {
  const { isOpen, open, close } = useToggle();

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
      <Button color={"danger"} variant={"shadow"} size={"lg"} onClick={open}>
        위험해!
      </Button>
      <Delete {...args} isOpen={isOpen} onClose={close}>
        <p className="font-Interop text-2xl px-4">연세 세브란스 병원을 제거하시겠습니까?</p>
      </Delete>
    </div>
  );
};

export const DeleteModal: DeleteModalStory = {
  render: args => <Template {...args} />,
};
