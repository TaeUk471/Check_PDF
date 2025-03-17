import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import { createRef } from "react";

import Alert from "@components/alert/src/alert";

describe("Alert Component", () => {
  it("should render without crashing", () => {
    const { container } = render(<Alert>Sample Alert</Alert>);
    expect(container).toBeInTheDocument();
  });

  it("should render children correctly", () => {
    render(<Alert>Sample Alert</Alert>);
    expect(screen.getByText("Sample Alert")).toBeInTheDocument();
  });

  it("should apply correct styles based on color and variant props", () => {
    const { container } = render(
      <Alert color="check" variant="bordered">
        Checked completed!
      </Alert>,
    );
    expect(container.firstChild).toHaveClass("bg-blue-400 text-gray-800 border-solid border-2");
  });

  it("should forward ref correctly", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Alert ref={ref}>Ref Alert</Alert>);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("should call onClose handler when close button is clicked", () => {
    const mockOnClose = jest.fn();
    render(<Alert onClose={mockOnClose}>Closable Alert</Alert>);
    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("should not render close button if onClose is not provided", () => {
    const { queryByRole } = render(<Alert>No Close Button</Alert>);
    expect(queryByRole("button")).not.toBeInTheDocument();
  });

  it("should handle timeouts for auto-dismiss", () => {
    jest.useFakeTimers();

    const mockOnClose = jest.fn();
    const { unmount } = render(<Alert onClose={mockOnClose}>Auto Dismiss Alert</Alert>);

    jest.advanceTimersByTime(5000);
    unmount();

    expect(mockOnClose).toHaveBeenCalledTimes(0);
    jest.useRealTimers();
  });
});
