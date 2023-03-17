export default function handle(req, res) {
  if (req.method === "POST") {
    const event = req.body;
    // Process the Paystack event here
    console.log(event);
    res.status(200).json({ received: true });
  } else {
    res.status(400).json({ message: "Invalid request method" });
  }
}
