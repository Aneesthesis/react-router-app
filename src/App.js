import { Link, Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container mx-auto">
      <nav className="bg-gray-100 flex gap-5">
        <Link to="/invoices">Invoices</Link>
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
