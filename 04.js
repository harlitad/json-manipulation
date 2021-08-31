const users = [
  {
    id: 323,
    username: "rinood30",
    profile: {
      full_name: "Shabrina Fauzan",
      birthday: "1988-10-30",
      phones: ["08133473821", "082539163912"],
    },
    articles: [
      {
        id: 3,
        title: "Tips Berbagi Makanan",
        published_at: "2019-01-03T16:00:00",
      },
      {
        id: 7,
        title: "Cara Membakar Ikan",
        published_at: "2019-01-07T14:00:00",
      },
    ],
  },
  {
    id: 201,
    username: "norisa",
    profile: {
      full_name: "Noor Annisa",
      birthday: "1986-08-14",
      phones: [],
    },
    articles: [
      {
        id: 82,
        title: "Cara Membuat Kue Kering",
        published_at: "2019-10-08T11:00:00",
      },
      {
        id: 91,
        title: "Cara Membuat Brownies",
        published_at: "2019-11-11T13:00:00",
      },
      {
        id: 31,
        title: "Cara Membuat Brownies",
        published_at: "2019-11-11T13:00:00",
      },
    ],
  },
  {
    id: 42,
    username: "karina",
    profile: {
      full_name: "Karina Triandini",
      birthday: "1986-04-14",
      phones: ["06133929341"],
    },
    articles: [],
  },
  {
    id: 201,
    username: "icha",
    profile: {
      full_name: "Annisa Rachmawaty",
      birthday: "1987-12-30",
      phones: [],
    },
    articles: [
      {
        id: 39,
        title: "Tips Berbelanja Bulan Tua",
        published_at: "2019-04-06T07:00:00",
      },
      {
        id: 43,
        title: "Cara Memilih Permainan di Steam",
        published_at: "2019-06-11T05:00:00",
      },
      {
        id: 58,
        title: "Cara Membuat Brownies",
        published_at: "2019-09-12T04:00:00",
      },
    ],
  },
];
const { printAnswer } = require("./01");

const findUsersWithoutPhoneNumbers = () => {
  return users.filter((user) => user.profile.phones.length === 0);
};

const findUsersWithArticles = () => {
  return users.filter((user) => user.articles.length !== 0);
};

const findUsersByName = (name) => {
  const regex = new RegExp(name, "gi");
  return users.filter((user) => user.profile.full_name.match(regex));
};

const findUsersByYear = (year) => {
  return users.filter(
    (user) => new Date(user.profile.birthday).getFullYear() === year
  );
};

const findUserArticleByYear = (year) => {
  return users.filter((user) => {
    const articles = user.articles.filter(
      (article) => new Date(article.published_at).getFullYear() === year
    );
    return articles.length !== 0;
  });
};

const findUserArticleByTitle = (title) => {
  const regex = new RegExp(title, "gi");
  return users
    .map((user) => user.articles)
    .flat()
    .filter((article) => article.title.match(regex));
};

const findArticlePublishedBefore = () => {
    return users
    .map((user) => user.articles)
    .flat().filter(article => new Date(article.published_at) < new Date(2019, 8))
}

printAnswer(
  "4a",
  "Find users who doesn't have any phone numbers",
  findUsersWithoutPhoneNumbers()
);
printAnswer("4b", "Find users who have articles", findUsersWithArticles());
printAnswer(
  "4c",
  "Find users who have annis on their name",
  findUsersByName("annis")
);
printAnswer("4e", "Find users who are born on 1986", findUsersByYear(1986));
printAnswer(
  "4d",
  "Find users who have articles on year 2020",
  findUserArticleByYear(2020)
);
printAnswer(
  "4f",
  "Find articles that contain 'tips' on the title",
  findUserArticleByTitle("tips")
);
printAnswer(
  "4g",
  "Find articles published before August 2019",
  findArticlePublishedBefore("tips")
);
