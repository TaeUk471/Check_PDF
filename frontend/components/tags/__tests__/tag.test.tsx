import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import React from "react";

import Tag from "../src/tag";

describe("Tag Component", () => {
  it("should render without crashing", () => {
    const { container } = render(<Tag>Test Tag</Tag>);
    expect(container).toBeInTheDocument();
  });

  it("should render the correct children", () => {
    render(<Tag>Test Tag</Tag>);
    expect(screen.getByText("Test Tag")).toBeInTheDocument();
  });

  it("should apply the default variants", () => {
    render(<Tag>Default Tag</Tag>);
    const tagElement = screen.getByText("Default Tag");

    expect(tagElement).toHaveClass("bg-green-600");
    expect(tagElement).toHaveClass("px-5 py-3");
    expect(tagElement).toHaveClass("rounded-lg");
  });

  it("should apply custom variants", () => {
    render(
      <Tag color="danger" variant="bordered" size="sm" radius="full">
        Custom Tag
      </Tag>,
    );
    const tagElement = screen.getByText("Custom Tag");

    expect(tagElement).toHaveClass("bg-red-600");
    expect(tagElement).toHaveClass("border-2");
    expect(tagElement).toHaveClass("px-4 py-2");
    expect(tagElement).toHaveClass("rounded-full");
  });

  it("should support the 'as' prop to change the element type", () => {
    render(<Tag as="span">Span Tag</Tag>);
    const tagElement = screen.getByText("Span Tag");

    expect(tagElement.tagName).toBe("SPAN");
  });

  it("should forward ref to the root element", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Tag ref={ref}>Ref Tag</Tag>);

    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("should render the left decoration", () => {
    render(<Tag>Decorated Tag</Tag>);
    const decoration = screen.getByText("Decorated Tag").querySelector(".bg-white");

    expect(decoration).toBeInTheDocument();
    expect(decoration).toHaveClass("p-[4px] rounded-full bg-white border-1");
  });
});
