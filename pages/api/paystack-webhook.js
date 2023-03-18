// export default async function handle(req, res) {
//   if (req.query.secret !== process.env.NEXT_PUBLIC_VALIDATION_SECRET) {
//     res.status(401).json({ message: "Invalid secret" });
//   }
//   if (req.method === "POST") {
//     const event = req.body;
//     // Process the Paystack event here
//     console.log(event);
//     res.status(200).json({ received: true });
//   } else {
//     res.status(400).json({ message: "Invalid request method" });
//   }
// }
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })
}
