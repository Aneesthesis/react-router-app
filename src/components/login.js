import React from "react";
import AuthConsumer from "../hooks/auth";
import { useNavigate } from "react-router-dom";

function Login() {
  const [auth, dispatch] = AuthConsumer();
  let navigate = useNavigate();

  console.log(auth);
  return (
    <div className="mx-auto text-center my-10">
      <h1>Login to gain access!</h1>
      <button
        className="text-white mt-5 py-1 px-2 bg-violet-600 rounded-md"
        onClick={() => {
          dispatch({ type: "login" });
          navigate("/invoices", { replace: true });
        }}
      >
        Login
      </button>
    </div>
  );
}

export default Login;
