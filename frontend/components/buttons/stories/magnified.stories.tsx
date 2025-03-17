import { Meta, StoryObj } from "@storybook/react/*";

import { WithModalRoot } from "@components/modals/decorators/withModalRoot";

import MagnifiedButton from "../src/magnified";

export default {
  title: "Components/Button/MagnifiedButton",
  component: MagnifiedButton,
  argsTypes: {
    imageSrc: {
      control: "text",
      defaultValue: "/Cute_Image_A4.jpeg",
    },
  },
  decorators: [WithModalRoot],
} as Meta<typeof MagnifiedButton>;

type MagnifiedButtonStory = StoryObj<typeof MagnifiedButton>;

export const Default: MagnifiedButtonStory = {
  args: {
    imageSrc: "/Cute_Image_A4.jpeg",
  },
};
