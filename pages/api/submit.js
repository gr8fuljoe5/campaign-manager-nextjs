export default function handler(req, res) {
  if (req.method === "POST") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "SUCCESS" }));
  } else {
    // Handle any other HTTP method
  }
}
