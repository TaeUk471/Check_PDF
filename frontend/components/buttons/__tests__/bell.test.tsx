import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Bell from "../src/bell";

describe("Bell Component", () => {
  it("should render without crashing", () => {
    const { container } = render(<Bell hasNotifications={true} />);
    expect(container).toBeInTheDocument();
  });

  it("should render the bell icon", () => {
    render(<Bell hasNotifications={true} />);
    const bellIcon = screen.getByTestId("bell-icon");
    expect(bellIcon).toBeInTheDocument();
  });

  it("should apply shake animation when notifications are present", () => {
    render(<Bell hasNotifications={true} />);
    const bellIcon = screen.getByTestId("bell-icon");
    expect(bellIcon).toHaveClass("animate-shake text-orange-700");
  });

  it("should not apply shake animation when notifications are not present", () => {
    render(<Bell hasNotifications={false} />);
    const bellIcon = screen.getByTestId("bell-icon");
    expect(bellIcon).not.toHaveClass("animate-shake text-orange-700");
  });

  it("should render notification ping when notifications are present", () => {
    render(<Bell hasNotifications={true} />);
    const ping = screen.getByTestId("ping-animation");
    expect(ping).toBeInTheDocument();
    expect(ping).toHaveClass("animate-ping");
  });

  it("should not render notification ping when notifications are not present", () => {
    render(<Bell hasNotifications={false} />);
    const ping = screen.queryByTestId("ping-animation");
    expect(ping).toBeNull();
  });
});
