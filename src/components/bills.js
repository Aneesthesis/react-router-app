import React from "react";
import { useParams } from "react-router-dom";
import { getInvoiceDetails } from "./data.js/invoices";

function Bills() {
  let params = useParams();
  let invoice = getInvoiceDetails(params.invoiceId);
  return (
    <main className="flex flex-col py-5 border my-4 w-1/3">
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
    </main>
  );
}

export default Bills;
