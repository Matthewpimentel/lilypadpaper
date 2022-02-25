const stripe = require("stripe")(
  "sk_test_51KStVeKVMhJifKB6juvCQ5xn6sgjU9dbLHhh2nLQ0WCJ1zpPgeIVTaiQDdIMspOU2jlPtPEvqm6PYBKwNl5r2E4M00PrnyM0Bf"
);
const fs = require("fs");

const YOUR_DOMAIN = "http://localhost:3000/";
const express = require("express");
var bodyParser = require("body-parser");
const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/create-checkout-session", async (req, res) => {
  var cart = req.body.cart;
  var cartToArray = JSON.parse(cart);
  var products = req.body.products;
  var productsToArray = JSON.parse(products);
  lineItems = [];
  var index;
  for (let i = 0; i < productsToArray.length; i++) {
    for (let x = 0; x < cartToArray.length; x++) {
      if (productsToArray[i].id == cartToArray[x].id) {
        lineItems.push({
          price_data: {
            currency: "CAD",
            product_data: {
              name: productsToArray[i].title,
            },
            unit_amount: productsToArray[i].price * 100,
          },
          quantity: cartToArray[x].quantity,
        });
      }
    }
  }
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
    line_items: lineItems,

    mode: "payment",
    success_url: "https://example.com/success",
    cancel_url: "http://localhost:3000",
  });
  res.redirect(303, session.url);
});

app.listen(4242, () => console.log("Running on port 4242"));
