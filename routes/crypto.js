const express = require("express");
const router = express.Router();
const axios = require("axios");

router.get("/currencies", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies",
      {
        Headers: {
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          x_cg_demo_api_key: process.env.COINGECKO_API_KEY,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occured!");
  }
});

router.post("/top", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/coins/markets",
      {
        Headers: {
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          x_cg_demo_api_key: process.env.COINGECKO_API_KEY,
          vs_currency: req.body.currency.toLowerCase(),
          order: "market_cap_desc",
          per_page: 100,
          page: 1,
          sparkline: false,
        },
      }
    );
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occured!");
  }
});

router.post("/convert", async (req, res) => {
  try {
    const { fromCurrency, toCurrency, amount } = req.body;
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/simple/price`,
      {
        Headers: {
          "Access-Control-Allow-Origin": "*",
          Cache: "no-cache",
        },
        params: {
          x_cg_demo_api_key: process.env.COINGECKO_API_KEY,
          ids: fromCurrency.toLowerCase(),
          vs_currencies: toCurrency.toLowerCase(),
        },
      }
    );
    const rate =
      response.data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];
    const result = amount * rate;
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send("Some error occured!");
  }
});

module.exports = router;
