import Grid from "@material-ui/core/Grid";
import CampaignSelector from "../components/CampaignSelector/index";
import Header from "../components/GlobalHeader";

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const agencyRes = await fetch("http://localhost:3000/api/agencies");
  const agencies = await agencyRes.json();

  const advertiserRes = await fetch("http://localhost:3000/api/advertisers");
  const advertisers = await advertiserRes.json();

  const campaignRes = await fetch("http://localhost:3000/api/campaigns");
  const campaigns = await campaignRes.json();

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
            <Header />
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
