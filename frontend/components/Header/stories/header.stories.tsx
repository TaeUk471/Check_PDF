import { Meta, StoryObj } from "@storybook/react/*";

import Header from "../src/header";

export default {
  title: "Components/Header",
  component: Header,
  argTypes: {
    isSigned: {
      control: {
        type: "boolean",
      },
      options: ["guest", "admin"],
    },
  },

  decorators: [
    Stroy => (
      <div className="flex justify-center auto items-center w-screen h-screen shadow-">
        <div className="flex">
          <Stroy />
        </div>
      </div>
    ),
  ],
} as Meta<typeof Header>;

type HeaderStory = StoryObj<typeof Header>;

export const Guest: HeaderStory = {
  args: {},
};

export const Admin: HeaderStory = {
  args: {
    user: {
      name: "Tae Uk",
    },
  },
};
