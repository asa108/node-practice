// objet property shorthand

const name = "Asane";
const userAge = 22;

const user = {
  name,
  age: userAge,
  location: "SC",
};

console.log(user);

// object destrucuturing

const product = {
  label: "Skin care",
  price: 10,
  stock: 9,
  salePrice: undefined,
};

// const { label: productLabel, rating = 5, price, stock, salePrice } = product;

// console.log(productLabel, rating);

const transacion = (type, { label, price }) => {
  console.log(label, price);
};

transacion("order", product);
