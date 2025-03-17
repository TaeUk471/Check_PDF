import { Meta, StoryObj } from "@storybook/react/*";

import SelectablePDFCard from "../src/selectablePDFCard";

export default {
  title: "Components/Card/SelectablePDFCard",
  component: SelectablePDFCard,
  argTypes: {
    variants: {
      color: {
        control: {
          type: "select",
        },
        options: ["normal ", "selected", "hover"],
      },
      size: {
        control: {
          type: "select",
        },
        options: ["sm", "normal", "magnified"],
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
} as Meta<typeof SelectablePDFCard>;

type SelectablePDFCardStory = StoryObj<typeof SelectablePDFCard>;

export const Default: SelectablePDFCardStory = {
  args: {
    color: "normal",
    size: "normal",
    radius: "md",
  },
};

// 현재 미사용 중
