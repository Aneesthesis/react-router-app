import { NavLink, Navigate, useLocation } from "react-router-dom";
import AuthConsumer from "./auth";

export function ActiveLink(props) {
  return (
    <NavLink
      style={({ isActive }) => {
        return {
          color: isActive ? "#1d2d44" : "",
        };
      }}
      {...props}
    />
  );
}

export function RequireAuth({ children }) {
  const [auth] = AuthConsumer();
  const location = useLocation();
  return auth.auth === true ? (
    children
  ) : (
    <Navigate
      to={"/login"}
      replace
      state={{ path: location.pathname }}
    ></Navigate>
  );
}
