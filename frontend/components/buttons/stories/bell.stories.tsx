import { Meta, StoryObj } from "@storybook/react/*";
import React, { useState } from "react";

import Bell from "../src/bell";

export default {
  title: "Components/Button/NotificationBell",
  component: Bell,
  argTypes: {
    hasNotifications: {
      control: {
        type: "boolean",
      },
    },
  },
  decorators: [
    Story => (
      <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Bell>;

type BellStory = StoryObj<typeof Bell>;

export const Default: BellStory = {
  args: {
    hasNotifications: true,
  },
};

export const ToggleToCheckNotifications = () => {
  const [hasNotifications, setHasNotifications] = useState(true);

  return (
    <div className="flex flex-col items-center space-y-4">
      <Bell hasNotifications={hasNotifications} />
      <button
        className="px-4 py-2 bg-gray-900 text-white rounded-full"
        onClick={() => setHasNotifications(!hasNotifications)}>
        Toggle
      </button>
    </div>
  );
};
