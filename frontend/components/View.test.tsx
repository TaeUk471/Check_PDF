import { render } from "@testing-library/react";

import View from "./View";

describe("View", () => {
  it("should render as the specified element type", () => {
    const { container } = render(
      <View as="span" className="test-class">
        Test Content
      </View>,
    );
    const element = container.querySelector("span");
    expect(element).toHaveClass("test-class");
    expect(element).toHaveTextContent("Test Content"); // children 검증
  });

  it("should render as a div by default when 'as' is not provided", () => {
    const { container } = render(<View className="default-class">Default Content</View>);
    const element = container.querySelector("div");
    expect(element).toHaveClass("default-class");
    expect(element).toHaveTextContent("Default Content"); // children 검증
  });
});
