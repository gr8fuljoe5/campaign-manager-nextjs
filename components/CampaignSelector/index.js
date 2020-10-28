import Grid from "@material-ui/core/Grid";
import React, { useEffect, useState } from "react";
import {
  ADVERTISER_ENDPOINT,
  AGENCEY_ENDPOINT,
  CAMPAIGN_ENDPOINT,
} from "../../constants/endpoints";
import CampaignButton from "../CampaignButton/index";
import CampaignGrid from "../CampaignGrid";
import Dropdown from "../Dropdown";

const CampaignSelector = () => {
  const [agencies, setAgencies] = useState([]);
  const [advertisers, setAdvertisers] = useState([]);
  const [advertiserId, setAdvertiserId] = useState([]);
  const [campaign, setCampaign] = useState([]);

  useEffect(() => {
    getAgencies();
  }, []);

  async function getAgencies() {
    const response = await fetch(AGENCEY_ENDPOINT);
    const agencyData = await response.json();
    setAgencies(agencyData);
  }

  async function getAdvertiser(agencyId) {
    const response = await fetch(ADVERTISER_ENDPOINT);
    const advertiserData = await response.json();
    const filteredData = advertiserData.filter((item) => {
      return item.agency_id === agencyId;
    });
    setAdvertisers(filteredData);
  }

  async function getCampaign() {
    const response = await fetch(CAMPAIGN_ENDPOINT);
    const campaignData = await response.json();
    const filteredData = campaignData.filter((item) => {
      return item.advertiser_id === advertiserId;
    });
    setCampaign(filteredData);
  }

  const handleAgencyChange = (event) => {
    getAdvertiser(event.target.value);
  };

  const handleAdvertiserChange = (event) => {
    setAdvertiserId(event.target.value);
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={2}>
        <div>
          <Dropdown
            data={agencies}
            handleChange={handleAgencyChange}
            label="Choose and agency..."
          />
          <Dropdown
            data={advertisers}
            handleChange={handleAdvertiserChange}
            label="Choose and advertiser..."
          />
          <CampaignButton
            handleClick={getCampaign}
            disabled={agencies.length === 0 || advertisers.length === 0}
          >
            Get Campaign
          </CampaignButton>
        </div>
      </Grid>
      <Grid item xs={10}>
        {campaign.length > 0 && <CampaignGrid data={campaign} />}
      </Grid>
    </Grid>
  );
};

export default CampaignSelector;
