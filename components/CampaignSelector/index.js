import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { SUBMIT_ENDPOINT } from '../../constants/endpoints';
import { postData } from '../../utils/fetch';
import Button from '../Button';
import CampaignGrid from '../CampaignGrid';
import Dropdown from '../Dropdown';

const CampaignSelector = (props) => {
  const [advertisers, setAdvertisers] = useState(props.advertisers);
  const [advertiserId, setAdvertiserId] = useState([]);
  const [campaign, setCampaign] = useState([]);

  const getAdvertiser = (agencyId) => {
    const filteredData = props.advertisers.filter((item) => {
      return item.agency_id === agencyId;
    });
    setAdvertisers(filteredData);
  };

  const getCampaign = () => {
    const filteredData = props.campaigns.filter((item) => {
      return item.advertiser_id === advertiserId;
    });
    setCampaign(filteredData);
  };

  const handleAgencyChange = (event) => {
    getAdvertiser(event.target.value);
    setCampaign([]);
  };

  const handleAdvertiserChange = (event) => {
    setAdvertiserId(event.target.value);
    setCampaign([]);
  };

  const submitData = async (payload) => {
    return await postData(SUBMIT_ENDPOINT, payload);
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12} lg={2}>
        <aside data-testid="campaign-selector">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Dropdown
                data={props.agencies}
                handleChange={handleAgencyChange}
                label="Choose an agency..."
              />
            </Grid>
            <Grid item xs={12}>
              <Dropdown
                data={advertisers}
                handleChange={handleAdvertiserChange}
                label="Choose an advertiser..."
              />
            </Grid>
            <Grid item xs={12} style={{ textAlign: 'right' }}>
              <Button onClick={getCampaign}>Get Campaign</Button>
            </Grid>
          </Grid>
        </aside>
      </Grid>
      <Grid item xs={12} lg={10}>
        {campaign.length > 0 && (
          <CampaignGrid data={campaign} onSubmit={submitData} />
        )}
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
