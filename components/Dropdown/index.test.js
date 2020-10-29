import { fireEvent, render, screen, within } from "@testing-library/react";
import DropDown from "./index";

const dropdownData = [
  {
    id: 1,
    name: "Item #1:",
  },
  {
    id: 2,
    name: "Item #2:",
  },
  {
    id: 3,
    name: "Item #3:",
  },
];

test("renders a Dropdown with a label", () => {
  render(<DropDown label="This is a dropdown" />);
  const label = screen.getByLabelText(/dropdown/);
  expect(label).toBeInTheDocument();
});

test("render a dropdown with options", async () => {
  const { getByRole } = render(
    <DropDown
      data={dropdownData}
      label="Select"
      inputProps={{ "data-testid": "select-box" }}
    ></DropDown>
  );
  fireEvent.mouseDown(getByRole("button"));
  const listbox = within(getByRole("listbox"));
  const items = await listbox.findAllByText(/Item #[0-9]:/);
  expect(items).toHaveLength(3);
});
