 exports.priceCalc = (size, color) => {
  let price = 0;

  if (color == "red") {
    price = 100;
  } else if (color == "green") {
    price = 200;
  }
  if (size == "M") {
    price += 50;
  }
  return price;
};

