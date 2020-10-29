import { render, screen } from '@testing-library/react';
import CampaignSelector from './index';

const agencies = [
	{
		name: 'Agency 1',
		id: 1,
	},
	{
		name: 'Agency 2',
		id: 2,
	},
];

const advertisers = [
	{
		name: 'Advertiser 1',
		id: 1,
	},
	{
		name: 'Advertiser 2',
		id: 2,
	},
];

const campaigns = [
	{
		name: 'Campaigns 1',
		id: 1,
	},
	{
		name: 'Campaigns 2',
		id: 2,
	},
];
describe('CampaignSelector', () => {
	test('render the campaign selector', () => {
		render(
			<CampaignSelector
				agencies={agencies}
				advertisers={advertisers}
				campaigns={campaigns}
			/>
		);
		const item = screen.getByTestId(/campaign-selector/);
		expect(item).toBeInTheDocument();
	});

	test('renders the campaign selector button', () => {
		render(
			<CampaignSelector
				agencies={agencies}
				advertisers={advertisers}
				campaigns={campaigns}
			/>
		);
		const item = screen.getByText(/campaign/i);
		expect(item).toBeInTheDocument();
	});
});
