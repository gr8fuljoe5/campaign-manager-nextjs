import { render, screen } from "@testing-library/react";
import CampaignButton from "./index";

test("renders a button", () => {
  render(<CampaignButton>Click me!!</CampaignButton>);
  const linkElement = screen.getByText(/Click/i);
  expect(linkElement).toBeInTheDocument();
});
