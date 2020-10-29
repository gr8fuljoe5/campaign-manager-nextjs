import { render, screen } from "@testing-library/react";
import CheckBox from "./index";
describe('Checkbox', () => {
  test("renders a checkbox", () => {
    render(<CheckBox />);
    const role = screen.getByRole('checkbox');
    expect(role).toBeInTheDocument();
  });
});

