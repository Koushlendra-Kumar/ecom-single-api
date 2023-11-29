const express = require("express");
const {priceCalc}  = require("./utils/priceCalc");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    POST: "/products/create",
  })
});

app.post("/products/create", async (req, res) => {
  const { name, category, size, color } = req.body;
  let price = priceCalc(size, color);
  let newProduct = { name, category, size, color, price };
  //Store new product into the database
  res.status(200).json({
    message: "Product created successfully",
    product: newProduct,
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
