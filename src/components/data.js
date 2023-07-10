export let invoices = [
  {
    name: "Canberra Customs Inc.",
    number: 1001,
    amount: "$10,099",
    dueDate: "12/01/2024",
  },
  {
    name: "Peru Paparazzi Inc.",
    number: 1002,
    amount: "$13,299",
    dueDate: "22/04/2024",
  },
  {
    name: "Hyderabadi Haleem Ltd.",
    number: 1003,
    amount: "$20,999",
    dueDate: "02/02/2024",
  },
  {
    name: "Madagascar Mangos Inc.",
    number: 1004,
    amount: "$8000",
    dueDate: "11/04/2024",
  },
];

export const getInvoiceDetails = (number) => {
  return invoices.find((invoice) => invoice.number === number);
};

export const deleteInvoice = (number) => {
  return (invoices = invoices.filter((invoice) => invoice.number !== number));
};
