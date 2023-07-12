import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Invoice from "./components/invoice";
import Bills from "./components/bills";
import Login from "./components/login";
import Home, { HomePageContent } from "./components/home";
import { AuthProvider } from "./hooks/auth";
import { RequireAuth } from "./hooks/helper";
import Settings from "./components/settings";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<HomePageContent />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route
              path="/invoices"
              element={
                <RequireAuth>
                  <Invoice />
                </RequireAuth>
              }
            >
              <Route
                index
                element={
                  <main className="text-center py-5">
                    <p>Select an Invoice</p>
                  </main>
                }
              ></Route>
              <Route path="/invoices/:invoiceId" element={<Bills />}></Route>
            </Route>
            <Route path="/settings" element={<Settings />}></Route>
          </Route>
          <Route
            path="*"
            element={
              <main className="text-center">
                <p className="text-3xl">There is nothing here!</p>
              </main>
            }
          ></Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>
);
