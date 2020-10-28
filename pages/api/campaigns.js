import campaigns from '../../json/campaigns'

export default (req, res) => {
  res.statusCode = 200;
  res.json(campaigns);
}
