import { Meta, StoryObj } from "@storybook/react";

import Bell from "@components/buttons/src/bell";
import NotificationCard from "@components/cards/src/notificationCard";

import Dropdown, { DropdownVariant } from "../src/dropdown";

export default {
  title: "Components/Dropdown",
  component: Dropdown,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["white", "gray"],
    },
    variant: {
      control: {
        type: "select",
      },
      options: ["solid", "bordered", "transparent"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    isOpen: {
      control: {
        type: "boolean",
      },
    },
    children: {
      control: false,
    },
  },
  decorators: [
    Story => (
      <div className="flex justify-center items-center w-100vw h-screen bg-slate-500">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Dropdown>;

type DropdownStory = StoryObj<typeof Dropdown>;

const Template = (args: DropdownVariant, hasMessage = false) => {
  return (
    <>
      <Dropdown {...args} trigger={<Bell hasNotifications={hasMessage} />}>
        <NotificationCard
          color={"danger"}
          variant={"shadow"}
          size={"sm"}
          radius={"lg"}
          data={{
            hospitalName: "강남 베드로 병원",
            title: "New Type Error",
            createAt: "2025-02-23 10:10:00 ",
          }}
        />
        <NotificationCard
          color={"warning"}
          variant={"bordered"}
          size={"sm"}
          radius={"lg"}
          data={{
            hospitalName: "강남 베드로 병원",
            title: "Identifier Missing",
            createAt: "2025-02-23 10:10:00 ",
          }}
        />
        <NotificationCard
          color={"waiting"}
          variant={"solid"}
          size={"sm"}
          radius={"lg"}
          data={{
            hospitalName: "강남 베드로 병원",
            title: "New Type Error",
            createAt: "2025-02-23 10:10:00 ",
          }}
        />
      </Dropdown>
    </>
  );
};

export const Default: DropdownStory = {
  render: args => <Template {...args} />,
};
