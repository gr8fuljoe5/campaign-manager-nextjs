import { render, screen } from "@testing-library/react";
import Header from "./index";

test("renders a Header", () => {
  render(<Header title="ABC Company" />);
  const header = screen.getByText("ABC Company");
  expect(header).toBeInTheDocument();
});
