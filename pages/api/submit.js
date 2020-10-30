export default function handler(req, res) {
	if (req.method === 'POST') {
		// checking to see if payload arry exists
		// ideally, there would be more validation
		if (req.body.length > 0) {
			res.statusCode = 200;
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify({ status: 'SUCCESS', data: req.body }));
		} else {
			res.statusCode = 400;
			res.setHeader('Content-Type', 'application/json');
			res.end(JSON.stringify({ status: 'ERROR' }));
		}
	}
}
