import agencies from '../../json/agencies';

/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (req, res) => {
  res.statusCode = 200;
  res.json(agencies);
};
