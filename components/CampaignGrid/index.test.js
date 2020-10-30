import { render, screen, within } from '@testing-library/react';
import CampaignGrid from './index';

const campaigns = [
  {
    id: 1,
    advertiser_id: 22,
    campaign_name: 'Y-Solowarm',
    status: false,
    budget: 287647.98,
    start_date: '2020-08-31',
    end_date: '2020-10-27',
  },
  {
    id: 2,
    advertiser_id: 61,
    campaign_name: 'Transcof',
    status: true,
    budget: 854816.32,
    start_date: '2020-01-29',
    end_date: '2020-03-23',
  },
];

describe('Campaign Grid', () => {
  test('render the campaign grid', () => {
    render(<CampaignGrid data={campaigns} />);
    const item = screen.getByTestId(/campaign-grid/);
    expect(item).toBeInTheDocument();
  });
  test('to see if 2 rows render in the grid', async () => {
    const { getByTestId } = render(
      <CampaignGrid data={campaigns} onSubmit={() => {}} />
    );
    const body = within(getByTestId(/grid-body/));
    const row = await body.findAllByTestId(/grid-row/);
    expect(row).toHaveLength(2);
  });
});
