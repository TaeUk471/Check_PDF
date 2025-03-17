import { render, screen, fireEvent } from "@testing-library/react";

import Input from "../src/input";

describe("Input Component", () => {
  it("renders correctly with default props", () => {
    render(<Input placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass("flex-grow bg-transparent focus:outline-none");
  });

  it("renders with startContent and endContent", () => {
    render(
      <Input
        placeholder="Enter text"
        startContent={<span>Start</span>}
        endContent={<span>End</span>}
      />,
    );

    const startContent = screen.getByText("Start");
    const endContent = screen.getByText("End");

    expect(startContent).toBeInTheDocument();
    expect(endContent).toBeInTheDocument();
  });

  it("handles file input type correctly", () => {
    const mockFileSelect = jest.fn();
    render(
      <Input
        type="file"
        onFileSelect={mockFileSelect}
        accept=".jpg,.png"
        placeholder="Select file"
      />,
    );

    const triggerElement = screen.getByText("Select file");
    expect(triggerElement).toBeInTheDocument();

    const hiddenInput = screen.getByPlaceholderText("Select file");
    expect(hiddenInput).toHaveAttribute("type", "file");
    expect(hiddenInput).toHaveAttribute("accept", ".jpg,.png");

    const file = new File(["test"], "test.png", { type: "image/png" });

    type MockFileListType = {
      [key: number]: File;
      length: number;
      item: (index: number) => File | null;
    };

    const mockFileList: MockFileListType = {
      0: file,
      length: 1,
      item: index => mockFileList[index],
    };

    fireEvent.change(hiddenInput, {
      target: { files: mockFileList },
    });

    expect(mockFileSelect).toHaveBeenCalledTimes(1);
    expect(mockFileSelect).toHaveBeenCalledWith(mockFileList);
  });

  it("renders with the correct size and color variants", () => {
    render(<Input size="lg" color="error" placeholder="Enter text" />);

    const inputContainer = screen.getByPlaceholderText("Enter text").closest("div");
    expect(inputContainer).toHaveClass("text-xl border-2 border-red-500 focus-within:ring-red-500");
  });

  it("applies isOutlined and disabled styles correctly", () => {
    render(<Input isOutlined={true} disabled={true} placeholder="Disabled input" />);

    const inputContainer = screen.getByPlaceholderText("Disabled input").closest("div");
    expect(inputContainer).toHaveClass("bg-transparent border-2 opacity-60 cursor-not-allowed");
    expect(inputContainer).toBeDisabled;
  });

  it("triggers onChange event for text input", () => {
    const handleChange = jest.fn();
    render(<Input type="text" onChange={handleChange} placeholder="Enter text" />);

    const inputElement = screen.getByPlaceholderText("Enter text");
    fireEvent.change(inputElement, { target: { value: "Hello" } });

    expect(handleChange).toHaveBeenCalled();
    expect(inputElement).toHaveValue("Hello");
  });
});
