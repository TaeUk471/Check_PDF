import { Meta, StoryObj } from "@storybook/react/*";

import Alert from "../src/alert";

export default {
  title: "Components/Alert",
  component: Alert,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["check", "warning", "danger", "submit"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "shadow"],
    },
  },

  decorators: [
    Story => (
      <div className="flex justify-center items-start w-screen h-screen">
        <div className="flex">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta<typeof Alert>;

type AlertStory = StoryObj<typeof Alert>;

export const Default: AlertStory = {
  args: {
    children: "문제가 발생했습니다.",
    color: "warning",
    variant: "solid",
  },
};

export const Danger: AlertStory = {
  args: {
    children: "Something got wrong",
    color: "danger",
    variant: "bordered",
  },
};

export const Submit: AlertStory = {
  args: {
    children: "Submit Successed!",
    color: "submit",
    variant: "shadow",
  },
};

export const Checked: AlertStory = {
  args: {
    children: "Checked this process",
    color: "check",
    variant: "solid",
  },
};
