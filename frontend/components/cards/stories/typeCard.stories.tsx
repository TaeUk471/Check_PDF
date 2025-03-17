import { Meta, StoryObj } from "@storybook/react/*";

import TypeCard from "../src/typeCard";

export default {
  title: "Components/Card/TypeCard",
  component: TypeCard,
  argTypes: {
    variants: {
      color: {
        control: {
          type: "select",
        },
        options: ["normal", "selected"],
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
        options: ["sm", "md", "lg"],
      },
      radius: {
        control: {
          type: "select",
        },
        options: ["none", "sm", "md", "lg", "full"],
      },
    },
  },
  decorators: [
    Story => (
      <div className="flex justify-center items-center w-screen h-screen bg-pink-200">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof TypeCard>;

type TypeCardStory = StoryObj<typeof TypeCard>;

export const Default: TypeCardStory = {
  args: {
    color: "normal",
    size: "normal",
    radius: "md",
  },
};

// 현재 미사용 중
