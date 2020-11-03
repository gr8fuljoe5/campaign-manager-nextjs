import Grid from '@material-ui/core/Grid';
import CampaignSelector from '../components/CampaignSelector/index';
import Header from '../components/GlobalHeader';
import {
  ADVERTISER_ENDPOINT,
  AGENCY_ENDPOINT,
  CAMPAIGN_ENDPOINT,
} from '../constants/endpoints';

export async function getStaticProps() {
  // Fetch the three endpoints and make them statically available to props
  let agencies, advertisers, campaigns;
  try {
    const agencyRes = await fetch(AGENCY_ENDPOINT);
    agencies = await agencyRes.json();
  } catch (e) {
    return e;
  }

  try {
    const advertiserRes = await fetch(ADVERTISER_ENDPOINT);
    advertisers = await advertiserRes.json();
  } catch (e) {
    return e;
  }

  try {
    const campaignRes = await fetch(CAMPAIGN_ENDPOINT);
    campaigns = await campaignRes.json();
  } catch (e) {
    return e;
  }

  return {
    props: {
      agencies,
      advertisers,
      campaigns,
    },
  };
}

export default function Home(props) {
  const { advertisers, agencies, campaigns } = props;
  return (
    <div>
      <div>
        <Grid container spacing={5}>
          <Grid item xs={12}>
            <Header title="ABC Company" />
          </Grid>
          <Grid item xs={12}>
            <main>
              <CampaignSelector
                advertisers={advertisers}
                agencies={agencies}
                campaigns={campaigns}
              />
            </main>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
