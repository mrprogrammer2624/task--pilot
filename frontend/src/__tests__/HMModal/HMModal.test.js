import { HMModal } from "@/components";
import { render, screen, fireEvent } from "@testing-library/react";

describe("HMModal", () => {
  const mockHandleClose = jest.fn();
  const mockHandleOk = jest.fn();
  const mockHandleCancel = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly when open", () => {
    render(
      <HMModal
        open={true}
        title="Test Modal"
        handleClose={mockHandleClose}
        handleOk={mockHandleOk}
        handleCancel={mockHandleCancel}
      >
        <div>Modal Content</div>
      </HMModal>
    );

    expect(screen.getByText("Test Modal")).toBeInTheDocument();
    expect(screen.getByText("Modal Content")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <HMModal
        open={false}
        title="Test Modal"
        handleClose={mockHandleClose}
        handleOk={mockHandleOk}
        handleCancel={mockHandleCancel}
      >
        <div>Modal Content</div>
      </HMModal>
    );

    expect(screen.queryByText("Test Modal")).not.toBeInTheDocument();
  });

  it("calls handleClose when the close button is clicked", () => {
    render(
      <HMModal
        open={true}
        title="Test Modal"
        handleClose={mockHandleClose}
        handleOk={mockHandleOk}
        handleCancel={mockHandleCancel}
        IsCloseIcon={true}
      >
        <div>Modal Content</div>
      </HMModal>
    );

    const closeButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(closeButton);
    expect(mockHandleClose).toHaveBeenCalledTimes(1);
  });

  it("calls handleOk when OK button is clicked", () => {
    render(
      <HMModal
        open={true}
        title="Test Modal"
        handleClose={mockHandleClose}
        handleOk={mockHandleOk}
        handleCancel={mockHandleCancel}
        IsFooter={true}
        handleContent="Confirm"
      >
        <div>Modal Content</div>
      </HMModal>
    );

    const okButton = screen.getByRole("button", { name: /confirm/i });
    fireEvent.click(okButton);
    expect(mockHandleOk).toHaveBeenCalledTimes(1);
  });

  it("calls handleCancel when the modal is cancelled", () => {
    render(
      <HMModal
        open={true}
        title="Test Modal"
        handleClose={mockHandleClose}
        handleOk={mockHandleOk}
        handleCancel={mockHandleCancel}
      >
        <div>Modal Content</div>
      </HMModal>
    );

    const cancelButton = screen.getByRole("button", { name: /cancel/i });
    fireEvent.click(cancelButton);
    expect(mockHandleCancel).toHaveBeenCalledTimes(1);
  });
});
