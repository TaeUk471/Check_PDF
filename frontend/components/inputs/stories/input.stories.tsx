import { Meta, StoryObj } from "@storybook/react";
import { useEffect, useRef, useState } from "react";

import Input from "../src/input";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    type: { control: { type: "select" }, options: ["text", "password", "email", "file", "date"] },
    color: { control: { type: "select" }, options: ["normal", "error", "search"] },
    size: { control: { type: "select" }, options: ["sm", "md", "lg"] },
    radius: { control: { type: "select" }, options: ["none", "sm", "md", "lg", "full"] },
    isOutlined: { control: "boolean" },
    isActivated: { control: "boolean" },
    disabled: { control: "boolean" },
  },
  decorators: [
    Story => (
      <div className="flex justify-center items-center w-screen h-screen bg-gray-100">
        <Story />
      </div>
    ),
  ],
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

/* ✅ 기본 Input 스토리 */
export const Default: Story = {
  render: args => <Input {...args} />,
  args: {
    type: "text",
    color: "normal",
    size: "lg",
    radius: "full",
    isOutlined: false,
    isActivated: false,
    disabled: false,
    autoFocus: true,
    placeholder: "Search Hospital ... ",
    startContent: <i className="fa fa-magnifying-glass" />,
    className: "w-fit",
    endContent: <i className="fa fa-keyboard" />,
  },
};

/* ✅ 파일 입력 Input */
export const FileInput: Story = {
  render: args => <Input {...args} />,
  args: {
    type: "file",
    color: "normal",
    size: "lg",
    radius: "full",
    isOutlined: true,
    startContent: <span>📂</span>,
    placeholder: "Upload a file",
    accept: "application/json",
    className: "w-fit",
    onFileSelect: (files: FileList | null) => console.log(files),
  },
};

/* ✅ useState 컨트롤 Input */
export const StateControlled: Story = {
  render: () => <StateControlledInput />,
  args: {
    endContent: <i className="fa fa-keyboard" />,
  },
};

const StateControlledInput = () => {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        color="normal"
        size="lg"
        radius="md"
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value)}
        placeholder="Type something..."
      />
      <p className="text-gray-700">
        입력된 값: <span className="font-semibold">{value}</span>
      </p>
    </div>
  );
};

/* ✅ useRef 컨트롤 Input */
export const RefControlled: Story = {
  render: () => <RefControlledInput />,
  args: {
    endContent: <i className="fa fa-keyboard" />,
  },
};

const RefControlledInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        color="normal"
        size="lg"
        radius="md"
        ref={inputRef}
        placeholder="Auto-focused Input"
      />
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
        onClick={() => inputRef.current?.focus()}>
        Focus Input
      </button>
    </div>
  );
};
