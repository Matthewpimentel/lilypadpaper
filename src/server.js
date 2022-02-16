// This is your test secret API key.
const stripe = require("stripe")(
  "sk_test_51KStVeKVMhJifKB6juvCQ5xn6sgjU9dbLHhh2nLQ0WCJ1zpPgeIVTaiQDdIMspOU2jlPtPEvqm6PYBKwNl5r2E4M00PrnyM0Bf"
);
const express = require("express");
const app = express();
app.use(express.static("public"));

const YOUR_DOMAIN = "http://localhost:3000/";

app.post("/create-checkout-session", async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ["CA"],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: "CAD",
          },
          display_name: "Free shipping",
          // Delivers between 5-7 business days
        },
      },
    ],
    line_items: [
      {
        price_data: {
          currency: "CAD",
          product_data: {
            name: "T-shirt",
          },
          unit_amount: 2000,
        },
        quantity: 3,
      },
    ],
    mode: "payment",
    success_url: "https://example.com/success",
    cancel_url: "http://localhost:3000/cart",
  });

  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
