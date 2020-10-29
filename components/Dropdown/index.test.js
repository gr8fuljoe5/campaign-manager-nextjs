import MenuItem from "@material-ui/core/MenuItem";
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

test("render a dropdown with options from data source", async () => {
  const { getByRole } = render(
    <DropDown data={dropdownData} label="Select"></DropDown>
  );
  fireEvent.mouseDown(getByRole("button"));
  const listbox = within(getByRole("listbox"));
  const items = await listbox.findAllByText(/Item #[0-9]:/);
  expect(items).toHaveLength(3);
});

test("render a dropdown with options from children", () => {
  const { getByRole } = render(
    <DropDown label="Select">
      <MenuItem value="Hello">World!</MenuItem>
    </DropDown>
  );
  fireEvent.mouseDown(getByRole("button"));
  const listbox = within(getByRole("listbox"));
  const text = listbox.getByText(/World/);
  expect(text).toBeInTheDocument();
});
