import { Meta, StoryObj } from "@storybook/react/*";

import Tag from "../src/tag";

export default {
  title: "Components/Tags",
  component: Tag,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["check", "danger", "warning", "submit"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "shadow"],
    },
    size: {
      control: {
        type: "select",
      },
      options: ["default", "mini", "sm", "md", "lg", "xl"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
  },
  decorators: [
    Story => (
      <div className="flex justify-center items-center w-screen h-screen">
        <div className="flex">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta<typeof Tag>;

type TagStory = StoryObj<typeof Tag>;

export const Default: TagStory = {
  args: {
    color: "check",
    variant: "solid",
    size: "md",
    radius: "md",
    children: "Success",
  },
};
