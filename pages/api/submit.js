export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(res.json);
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "SUCCESS" }));
  } else {
    // Handle any other HTTP method
    res.statusCode = 400;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ status: "ERROR" }));
  }
}