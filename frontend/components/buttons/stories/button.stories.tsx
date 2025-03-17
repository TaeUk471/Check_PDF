import { Meta, StoryObj } from "@storybook/react/*";
import { useState } from "react";

import Button, { ButtonVariant } from "../src/button";

export default {
  title: "Components/Button/DefaultButton",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "select",
      },
      options: ["default", "check", "warning", "danger", "submit"],
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
      options: ["default", "sm", "md", "lg", "xl"],
    },
    radius: {
      control: {
        type: "select",
      },
      options: ["none", "sm", "md", "lg", "full"],
    },
    isClicked: {
      control: {
        type: "boolean",
      },
    },
  },

  decorators: [
    Story => (
      <div className="flex justify-center auto items-center w-screen h-screen">
        <div className="flex">
          <Story />
        </div>
      </div>
    ),
  ],
} as Meta<typeof Button>;

type ButtonStory = StoryObj<typeof Button>;

const StateTemplate = (args: ButtonVariant) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Pressed", event);
    setIsOpen(prev => !prev);
  };

  return (
    <Button
      {...args}
      aria-label={isOpen ? "Close" : "Open"}
      aria-pressed={isOpen}
      onClick={handleClick}>
      {isOpen ? "Close" : "Open"}
    </Button>
  );
};

export const Base: ButtonStory = {
  args: {
    children: "Button",
    color: "danger",
    variant: "solid",
    size: "md",
  },
};

export const Warning: ButtonStory = {
  args: {
    children: "Warning",
    color: "warning",
    variant: "bordered",
    size: "lg",
  },
};

// 상태 기반 버튼 스토리
export const ToggleButton = {
  render: StateTemplate,
  args: {
    color: "primary",
    variant: "solid",
    size: "md",
  },
};
