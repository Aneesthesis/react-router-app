import React from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { invoices } from "./data";
import AuthConsumer from "../hooks/auth";

function Invoice() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [, dispatch] = AuthConsumer();
  let navigate = useNavigate();

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
      <button
        className="text-white mt-5 py-1 px-2 bg-violet-600 rounded-md"
        onClick={() => {
          dispatch({ type: "logout" });
          navigate("/login", { replace: true });
        }}
      >
        Logout
      </button>
    </main>
  );
}

export default Invoice;

// custom navlink component
function ResultNavLink({ to, ...props }) {
  let location = useLocation();
  return <NavLink to={to + location.search} {...props}></NavLink>;
}
