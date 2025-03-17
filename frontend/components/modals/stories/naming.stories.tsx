import { Meta, StoryObj } from "@storybook/react/*";

import Button from "@components/buttons/src/button";
import useToggle from "@hooks/useToggle";

import { WithModalRoot } from "../decorators/withModalRoot";
import { ModalProps } from "../src/modal";
import Naming from "../src/naming";

export default {
  title: "Components/Modal/NamingModal",
  component: Naming,

  decorators: [
    WithModalRoot,
    Story => (
      <div className="w-screen h-screen flex justify-center items-center bg-slate-200">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Naming>;

type NamingModalStory = StoryObj<typeof Naming>;

const Template = (args: ModalProps) => {
  const { isOpen, open, close } = useToggle();

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-200">
      <Button color={"submit"} variant={"shadow"} size={"lg"} onClick={open}>
        Select
      </Button>
      <Naming
        value={""}
        onChangeAction={event => console.log(event)}
        {...args}
        isOpen={isOpen}
        onCloseAction={close}
      />
    </div>
  );
};

export const Default: NamingModalStory = {
  render: args => <Template {...args} />,
};
