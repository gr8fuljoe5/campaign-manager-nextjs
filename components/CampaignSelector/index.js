import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";
import React, { useState } from "react";
import Button from "../Button";
import CampaignGrid from "../CampaignGrid";
import Dropdown from "../Dropdown";

const CampaignSelector = (props) => {
  const [advertisers, setAdvertisers] = useState(props.advertisers);
  const [advertiserId, setAdvertiserId] = useState([]);
  const [campaign, setCampaign] = useState([]);

  function getAdvertiser(agencyId) {
    const filteredData = props.advertisers.filter((item) => {
      return item.agency_id === agencyId;
    });
    setAdvertisers(filteredData);
  }

  function getCampaign() {
    const filteredData = props.campaigns.filter((item) => {
      return item.advertiser_id === advertiserId;
    });
    setCampaign(filteredData);
  }

  const handleAgencyChange = (event) => {
    getAdvertiser(event.target.value);
    setCampaign([]);
  };

  const handleAdvertiserChange = (event) => {
    setAdvertiserId(event.target.value);
    setCampaign([]);
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={2}>
        <aside>
          <div>
            <Dropdown
              data={props.agencies}
              handleChange={handleAgencyChange}
              label="Choose and agency..."
            />
          </div>
          <div>
            <Dropdown
              data={advertisers}
              handleChange={handleAdvertiserChange}
              label="Choose and advertiser..."
            />
          </div>
          <div>
            <Button onClick={getCampaign}>Get Campaign</Button>
          </div>
        </aside>
      </Grid>
      <Grid item xs={10}>
        {campaign.length > 0 && <CampaignGrid data={campaign} />}
      </Grid>
    </Grid>
  );
};

CampaignSelector.propTypes = {
  agencies: PropTypes.array.isRequired,
  advertisers: PropTypes.array.isRequired,
  campaigns: PropTypes.array.isRequired,
};

export default CampaignSelector;
