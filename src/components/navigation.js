import React from "react";
import { Outlet } from "react-router-dom";
import { ActiveLink } from "../hooks/helper";

function Navigation() {
  return (
    <div>
      <nav className="bg-violet-600 text-white flex gap-5 justify-center">
        <ActiveLink to="/">Home</ActiveLink>
        <ActiveLink to="/login">Login</ActiveLink>
        <ActiveLink to="/invoices">Invoices</ActiveLink>
        <ActiveLink to="/settings">Settings</ActiveLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default Navigation;
