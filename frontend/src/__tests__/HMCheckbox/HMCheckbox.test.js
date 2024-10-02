import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { HMCheckbox } from "@/components";

describe("HMCheckbox Component", () => {
  it("renders the checkbox component correctly", () => {
    render(<HMCheckbox>Test Checkbox</HMCheckbox>);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("displays children content", () => {
    render(<HMCheckbox>Test Checkbox</HMCheckbox>);
    expect(screen.getByText("Test Checkbox")).toBeInTheDocument();
  });

  it("can be checked and unchecked", () => {
    const { rerender } = render(<HMCheckbox checked={false}>Test Checkbox</HMCheckbox>);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).not.toBeChecked();

    rerender(<HMCheckbox checked={true}>Test Checkbox</HMCheckbox>);
    expect(checkbox).toBeChecked();
  });

  it("calls onChange handler when clicked", () => {
    const handleChange = jest.fn();
    render(<HMCheckbox onChange={handleChange}>Test Checkbox</HMCheckbox>);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state correctly", () => {
    render(<HMCheckbox disabled>Test Checkbox</HMCheckbox>);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toBeDisabled();
  });

  it("applies custom className", () => {
    render(<HMCheckbox className="custom-class">Test Checkbox</HMCheckbox>);
    const checkbox = screen.getByRole("checkbox");

    expect(checkbox).toHaveClass("custom-class");
  });
});
