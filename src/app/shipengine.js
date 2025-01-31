import ShipEngine from "shipengine";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const shipengine = new ShipEngine(process.env.NEXT_PUBLIC_SHIPENGINE_API_KEY);

    const response = await shipengine.validateAddress({
      street: ["1600 Amphitheatre Pkwy"],
      cityLocality: "Mountain View",
      stateProvince: "CA",
      postalCode: "94043",
      countryCode: "US",
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
