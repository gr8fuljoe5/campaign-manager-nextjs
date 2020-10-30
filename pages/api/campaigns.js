import campaigns from '../../json/campaigns';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (req, res) => {
  res.statusCode = 200;
  res.json(campaigns);
};
