import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { deleteInvoice, getInvoiceDetails } from "./data";

function Bills() {
  let params = useParams();
  let navigate = useNavigate();
  let location = useLocation();
  let invoice = getInvoiceDetails(+params.invoiceId);
  return (
    <main className="flex flex-col mx-auto py-5 border my-4 w-1/3">
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.dueDate}</p>
      <button
        onClick={() => {
          deleteInvoice(invoice.number);
          navigate("/invoices" + location.search);
        }}
      >
        Delete
      </button>
    </main>
  );
}

export default Bills;
