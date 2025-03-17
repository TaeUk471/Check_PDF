import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import userEvent, { UserEvent } from "@testing-library/user-event";
import * as React from "react";
import { createRef } from "react";

import Button from "../src/button";

describe("Button", () => {
  let user: UserEvent;

  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should render correctly", () => {
    const wrapper = render(<Button>1</Button>);
    expect(() => wrapper.unmount()).not.toThrow();
  });

  it("ref should be forwarded", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref}>2</Button>);
    expect(ref.current).not.toBeNull();
  });

  it("should trigger onClick function", async () => {
    const onClick = jest.fn();
    const { getByRole } = render(<Button onClick={onClick}>3</Button>);
    const button = getByRole("button");

    await user.click(button);

    expect(onClick).toHaveBeenCalled();
  });

  it("should ignore events when disabled", async () => {
    const onClick = jest.fn();
    const { getByRole } = render(
      <Button disabled onClick={onClick}>
        4
      </Button>,
    );
    const button = getByRole("button");

    await user.click(button);

    expect(onClick).not.toHaveBeenCalled();
  });

  it("should have the proper type attribute", () => {
    const wrapper = render(<Button type="submit">5</Button>);
    expect(wrapper.getByRole("button")).toHaveAttribute("type", "submit");
  });

  it("should set the disabled attribute when disabled is true", () => {
    const { getByRole } = render(<Button disabled>6</Button>);
    const button = getByRole("button");

    expect(button).toBeDisabled();
  });

  it("should have the correct aria attributes", () => {
    const { getByRole } = render(
      <Button aria-label="Save" aria-pressed="false">
        7
      </Button>,
    );
    const button = getByRole("button");

    expect(button).toHaveAttribute("aria-label", "Save");
    expect(button).toHaveAttribute("aria-pressed", "false");
  });

  // it("should have to convert each word", () =>{
  //   const { }
  // })
});
