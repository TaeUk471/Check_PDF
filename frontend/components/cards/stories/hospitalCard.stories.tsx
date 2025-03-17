import { Meta, StoryObj } from "@storybook/react/*";

import HospitalCard from "../src/hospitalCard";

export default {
  title: "Components/Card/HospitalCard",
  component: HospitalCard,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["default", "disabled"],
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
      options: ["mb", "tb", "pc"],
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
      <div className="flex justify-center items-center w-screen h-screen bg-purple-50">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof HospitalCard>;

type HospitalCardStory = StoryObj<typeof HospitalCard>;

export const Default: HospitalCardStory = {
  args: {
    color: "default",
    variant: "shadow",
    size: "mb",
    radius: "lg",
    data: {
      hospitalName: "강남 베드로 병원",
      hospitalId: 123123123,
    },
  },
};
