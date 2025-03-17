import { Meta, StoryObj } from "@storybook/react";

import Button from "@components/buttons/src/button";
import useToggle from "@hooks/useToggle";

import { WithModalRoot } from "../decorators/withModalRoot";
import { ModalProps } from "../src/modal";
import Save from "../src/save";

export default {
  title: "Components/Modal/Save",
  component: Save,
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
} as Meta<typeof Save>;

type SaveModalStory = StoryObj<typeof Save>;

const Template = (args: ModalProps) => {
  const { isOpen, open, close } = useToggle();

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
      <Button color={"submit"} variant={"shadow"} size={"lg"} onClick={open}>
        저장하시겠습니까?
      </Button>
      <Save {...args} isOpen={isOpen} onClose={close}>
        <p className="font-Interop text-2xl px-4">저장하시겠습니까?</p>
        <p className="font-Interop text-2xl px-4">저장한 데이터는 복구가 불가능합니다.</p>
      </Save>
    </div>
  );
};

export const SaveModal: SaveModalStory = {
  render: args => <Template {...args} />,
};
