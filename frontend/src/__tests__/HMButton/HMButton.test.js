import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { HMButton } from "@/components";

describe("HMButton Component", () => {
  test("renders the button with children", () => {
    render(<HMButton>Click Me</HMButton>);

    const buttonElement = screen.getByText(/click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("applies the correct variant (button type)", () => {
    render(<HMButton variant="primary">Primary Button</HMButton>);

    const buttonElement = screen.getByText(/primary button/i);
    expect(buttonElement).toHaveClass("ant-btn-primary");
  });

  test("renders with custom className", () => {
    render(<HMButton className="custom-class">With Custom Class</HMButton>);

    const buttonElement = screen.getByText(/with custom class/i);
    expect(buttonElement).toHaveClass("custom-class");
  });

  test("triggers onClick event handler", () => {
    const handleClick = jest.fn();
    render(<HMButton onClick={handleClick}>Click Me</HMButton>);

    const buttonElement = screen.getByText(/click me/i);
    fireEvent.click(buttonElement);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  test("renders an icon if provided", () => {
    const icon = <span data-testid="custom-icon">Icon</span>;
    render(<HMButton icon={icon}>With Icon</HMButton>);

    const iconElement = screen.getByTestId("custom-icon");
    expect(iconElement).toBeInTheDocument();
  });

  test("renders with correct size", () => {
    render(<HMButton size="large">Large Button</HMButton>);

    const buttonElement = screen.getByText(/large button/i);
    expect(buttonElement).toHaveClass("ant-btn-lg");
  });
});
