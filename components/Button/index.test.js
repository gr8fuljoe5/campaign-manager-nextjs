import { render, screen } from '@testing-library/react';
import CampaignButton from './index';
describe('Button', () => {
	test('renders a button', () => {
		render(<CampaignButton>Click me!!</CampaignButton>);
		const linkElement = screen.getByText(/Click/i);
		expect(linkElement).toBeInTheDocument();
	});
});
