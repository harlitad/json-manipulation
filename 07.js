const axios = require("axios").default;
const fs = require("fs");
const { printAnswer } = require("./01");

async function getData(url) {
  return (await axios.get(url)).data;
}

const answer = async () => {
  const users = (await getData("https://randomuser.me/api/?results=20"))
    .results;

  const names = users.map(
    (user) => `${user.name.title}. ${user.name.first} ${user.name.last}`
  );

  const filterGender = users.filter((user) => user.gender === "male");

  const data = users
    .map((user) => {
      const obj = {
        name: `${user.name.title}. ${user.name.first} ${user.name.last}`,
        email: user.email,
        phone: user.phone,
      };
      return Object.values(obj).toString();
    })
    .join("\n");

  fs.writeFileSync("07.csv", data, { flag: "w" });

  printAnswer(
    "7a",
    "cetaklah semua nama (gabungan dari title, first, last)",
    names
  );
  printAnswer(
    "7b",
    "temukan semua data yang memiliki gender male",
    filterGender
  );
  printAnswer(
    "7c",
    "convert data name(gabungan dari title, first, last), email, phone ke file csv",
    data
  );
};

answer();
