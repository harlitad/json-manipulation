const data = [
  {
    order_id: "SO-921",
    created_at: "2018-02-17T03:24:12",
    customer: { id: 33, name: "Ari" },
    items: [
      { id: 24, name: "Sapu Lidi", qty: 2, price: 13200 },
      { id: 73, name: "Sprei 160x200 polos", qty: 1, price: 149000 },
    ],
  },
  {
    order_id: "SO-922",
    created_at: "2018-02-20T13:10:32",
    customer: { id: 40, name: "Ririn" },
    items: [
      { id: 83, name: "Rice Cooker", qty: 1, price: 258000 },
      { id: 24, name: "Sapu Lidi", qty: 1, price: 13200 },
      { id: 30, name: "Teflon", qty: 1, price: 190000 },
    ],
  },
  {
    order_id: "SO-923",
    created_at: "2018-02-28T15:20:43",
    customer: { id: 33, name: "Ari" },
    items: [
      { id: 303, name: "Pematik Api", qty: 1, price: 12000 },
      { id: 49, name: "Panci", qty: 2, price: 70000 },
    ],
  },
  {
    order_id: "SO-924",
    created_at: "2018-03-02T14:30:54",
    customer: { id: 40, name: "Ririn" },
    items: [{ id: 986, name: "TV LCD 40 inch", qty: 1, price: 6000000 }],
  },
  {
    order_id: "SO-925",
    created_at: "2018-03-03T14:52:22",
    customer: { id: 33, name: "Ari" },
    items: [
      { id: 1033, name: "Nintendo Switch", qty: 1, price: 4990000 },
      { id: 2003, name: "Macbook Air 11 inch 128 GB", qty: 1, price: 12000000 },
      { id: 23, name: "Pocari Sweat 600ML", qty: 5, price: 7000 },
    ],
  },
  {
    order_id: "SO-926",
    created_at: "2018-03-05T16:23:20",
    customer: { id: 58, name: "Annis" },
    items: [{ id: 24, name: "Sapu Lidi", qty: 3, price: 13200 }],
  },
];

const FindOrderByMonth = (month) => {
  return data.find((v) => {
    const getMonth = new Date(v.created_at).getMonth();
    return month === getMonth;
  });
};

const countGrandTotal = () => {
  return (total = data.map((order) => {
    order.grandTotal = order.items
      .map((item) => item.qty * item.price)
      .reduce((a, b) => a + b);
    return order;
  }));
};

const FindGrandTotalByName = (name) => {
  const orders = countGrandTotal();
  return orders
    .filter((order) => order.customer.name === name)
    .map((order) => order.grandTotal)
    .reduce((a, b) => a + b);
};

const FindGrandTotal = (price) => {
  const orders = countGrandTotal()
    .filter((order) => order.grandTotal <= price)
    .map((order) => order.customer.name);
  return [...new Set(orders)];
  return orders;
};

const printAnswer = (no, msg, val) => {
  console.log(`${no}. ${msg}`);
  console.log(val);
  console.log("=".repeat(30), "\n");
};

module.exports = {
  printAnswer,
};

printAnswer("1a", "Find purchases in february", FindOrderByMonth(2));
printAnswer(
  "1b",
  "Find all purchases made by Ari, and add grand total",
  FindGrandTotalByName("Ari")
);
printAnswer(
  "1c",
  "Find people who have purchases with grand total lower than 300000",
  FindGrandTotal(300000)
);
