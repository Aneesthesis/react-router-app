import React from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useSearchParams,
} from "react-router-dom";
import { invoices } from "./data";

function Invoice() {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchParamsChangeHandler = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <main className="text-center">
      <Outlet></Outlet>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          className="border w-3/4 mx-auto mt-5"
          placeholder="Search Invoice"
          value={searchParams.get("filter") || ""}
          onChange={searchParamsChangeHandler}
        />

        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true; // returns back all the invoices
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          })
          .map((invoice) => (
            <ResultNavLink
              className={({ isActive }) =>
                isActive ? "bg-gray-200 text-purple-400" : ""
              }
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
              // to open invoice in new tab
              //target="_blank"
            >
              {invoice.name}
            </ResultNavLink>
          ))}
      </div>
    </main>
  );
}

export default Invoice;

// custom navlink component
function ResultNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props}></NavLink>;
}
