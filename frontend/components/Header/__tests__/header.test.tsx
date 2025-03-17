import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

import Header from "../src/header";

describe("Header Component", () => {
  const mockUser = { name: "홍길동" };

  it("should render without crashing", () => {
    const { container } = render(<Header />);
    expect(container).toBeInTheDocument();
  });

  it("should display user name and logout button when user is provided", () => {
    render(<Header user={mockUser} />);
    expect(
      screen.getByText((_, element) => element?.textContent === "안녕하세요 . 홍길동님"),
    ).toBeInTheDocument();
    expect(screen.getByText(/로그아웃/i)).toBeInTheDocument();
  });

  it("should display login and signup buttons when user is not provided", () => {
    render(<Header />);
    expect(screen.getByText(/로그인/i)).toBeInTheDocument();
    expect(screen.getByText(/회원가입/i)).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const customClass = "custom-class";
    const { container } = render(<Header className={customClass} />);
    expect(container.firstChild).toHaveClass(customClass);
  });

  it("should forward ref to the root element", () => {
    const ref = React.createRef<HTMLDivElement>();
    render(<Header ref={ref} />);
    expect(ref.current).not.toBeNull();
    expect(ref.current?.tagName).toBe("DIV");
  });

  it("should apply correct variant styles", () => {
    render(<Header isSigned="admin" />);
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("border-stone-400");
  });

  it("should call logout handler when logout button is clicked", () => {
    const mockLogout = jest.fn();
    render(<Header user={mockUser} onClick={mockLogout} />);
    const logoutButton = screen.getByRole("button", { name: /로그아웃/i });
    fireEvent.click(logoutButton);
    expect(mockLogout).toHaveBeenCalledTimes(1);
  });
});
