const axios = require("axios").default;
const { printAnswer } = require("./01");

async function getData(url) {
  return (await axios.get(url)).data;
}

async function filterByCategory(category) {
  const datas = await getData(
    "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json"
  );
  return datas.filter((data) => data.category === category);
}

(async () =>
  printAnswer(
    3,
    "filter data berdasarkan category fruits",
    await filterByCategory("fruits")
  ))();
