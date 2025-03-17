import { Meta, StoryObj } from "@storybook/react/*";

import NotificationCard from "../src/notificationCard";

export default {
  title: "components/Card/Notification",
  component: NotificationCard,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["danger", "warning", "waiting"],
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
  decorators: Story => (
    <div className="flex justify-center items-center w-screen h-screen bg-gray-800">
      <Story />
    </div>
  ),
} as Meta<typeof NotificationCard>;

type NotificationCardStory = StoryObj<typeof NotificationCard>;

export const Default: NotificationCardStory = {
  args: {
    color: "danger",
    variant: "solid",
    size: "sm",
    radius: "lg",
    data: {
      hospitalName: "강남 베드로 병원",
      title: "New Type Error",
      createAt: "2025-02-23 10:10:00 ",
    },
  },
};
