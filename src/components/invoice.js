import React from "react";
import { Link, Outlet } from "react-router-dom";
import { invoices } from "./data.js/invoices";

function Invoice() {
  return (
    <main className="text-center">
      <div className="flex flex-col gap-3">
        {invoices.map((invoice) => (
          <Link to={`/invoices/${invoice.number}`} key={invoice.number}>
            {invoice.name}
          </Link>
        ))}
      </div>
      <Outlet></Outlet>
    </main>
  );
}

export default Invoice;
