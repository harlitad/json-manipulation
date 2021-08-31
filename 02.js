const axios = require("axios").default;
const { printAnswer } = require("./01");

async function getData(url) {
  return (await axios.get(url)).data;
}

async function mergeData() {
  const users = await getData("https://jsonplaceholder.typicode.com/users");
  const posts = await getData("https://jsonplaceholder.typicode.com/posts");

  // cara 1
  const usersPosts = posts.map((v) => {
    v.user = users.find((u) => u.id === v.userId);
    return v;
  });
  return usersPosts[1];
  console.log(usersPosts);

  // cara 2
  posts.forEach((post) => {
    post.user = users.find((user) => user.id === post.userId);
  });
  console.log(posts);

  // cara 3
  const postUser = [];
  for (let i = 0; i < posts.length; i++) {
    for (let j = 0; j < users.length; j++) {
      if (posts[i].userId === users[j].id) {
        const { ...data } = posts[i];
        data.user = users[j];
        postUser.push(data);
      }
    }
  }
  console.log(postUser);
}

(async () =>
  printAnswer(
    2,
    "Gabungkan output posts dan users berdasarkan userId yang tepat",
    await mergeData()
  ))();
