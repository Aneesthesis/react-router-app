export let invoices = [
  {
    name: "Canberra Customs Inc.",
    number: 1001,
    amount: "$10,099",
    dueData: "12/01/2024",
  },
  {
    name: "Peru Paparazzi Inc.",
    number: 1002,
    amount: "$13,299",
    dueData: "22/04/2024",
  },
  {
    name: "Hyderabadi Haleem Ltd.",
    number: 1003,
    amount: "$20,999",
    dueData: "02/02/2024",
  },
  {
    name: "Madagascar Mangos Inc.",
    number: 1004,
    amount: "$8000",
    dueData: "11/04/2024",
  },
];

export const getInvoiceDetails = (number) => {
  return invoices.find((invoice) => invoice.number === number);
};
