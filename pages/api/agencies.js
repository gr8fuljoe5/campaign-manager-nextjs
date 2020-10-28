import agencies from '../../json/agencies'

export default (req, res) => {
  res.statusCode = 200;
  res.json(agencies);
}
