const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");

const app = express();

app.use(cors());
app.use(express.json());

app.use(process.env.USER_SERVICE_ENDPOINT, proxy(process.env.USER_SERVICE_URL));
app.use(process.env.SHOPPING_SERVICE_ENDPOINT, proxy(proxyprocess.env.SHOPPING_SERVICE_URL));
app.use(process.env.DELIVERY_SERVICE_ENDPOINT, proxy(process.env.DELIVERY_SERVICE_URL));
app.use(process.env.PRODUCT_SERVICE_ENDPOINT, proxy(process.env.PRODUCT_SERVICE_URL)); // products

app.listen(8000, () => {
  console.log("Gateway is Listening to Port 8000");
});
