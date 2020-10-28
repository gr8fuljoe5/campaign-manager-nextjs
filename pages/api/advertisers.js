import advertisers from '../../json/advertisers'

export default (req, res) => {
  res.statusCode = 200;
  res.json(advertisers);
}
