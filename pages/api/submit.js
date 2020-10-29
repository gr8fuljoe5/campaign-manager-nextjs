export default function handler(req, res) {
  if (req.method === "POST") {
    if (req.body.length > 0) {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ status: "SUCCESS" }));
    } else {
      res.statusCode = 400;
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify({ status: "ERROR" }));
    }
  }
}
