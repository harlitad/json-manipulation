const fs = require("fs");

const getData = async () => {
  const read = fs.readFileSync("./data.json", { encoding: "utf-8" });
  return read ? JSON.parse(read) : [];
};

// number 1
const findByPlacementName = async (name) => {
  const data = await getData();
  return data.filter((v) => v.placement.name === name).map((v) => v.name);
};

// number 2
const findByType = async (type) => {
  const data = await getData();
  return data.filter((v) => v.type === type).map((v) => v.name);
};

// number 4
const findPurchasedItemByDate = async (date) => {
  const data = await getData();
  date = new Date(date).toLocaleDateString();
  const res = data
    .filter(
      (v) => new Date(v.purchased_at * 1000).toLocaleDateString() === date
    )
    .map((v) => v.name);
  return res;
};

// number 5
const findItemByColor = async (color) => {
  const data = await getData();
  const result = data.filter((v) => v.tags.includes(color)).map((v) => v.name);
  return result;
};

const callToAnswer = async () => {
  console.log(
    "1. Find items in the Meeting Room. \n",
    await findByPlacementName("Meeting Room")
  );
  console.log(
    "2. Find all electronic devices. \n",
    await findByType("electronic")
  );
  console.log("3. Find all the furniture. \n", await findByType("furniture"));
  console.log(
    "4. Find all items were purchased on 16 Januari 2020. \n",
    await findPurchasedItemByDate("2020-01-16")
  );
  console.log(
    "5. Find all items with brown color. \n",
    await findItemByColor("brown")
  );
};

callToAnswer();
