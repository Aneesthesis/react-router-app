const { createContext, useContext, useReducer } = require("react");

const initalState = { auth: false };

const authContext = createContext(initalState);

export function reducer(state, action) {
  switch (action.type) {
    case "login":
      return { auth: true };
    case "logout":
      return { auth: false };
    default:
      throw new Error();
  }
}

//Auth Provider
export function AuthProvider({ children }) {
  const [auth, dispatch] = useReducer(reducer, initalState);
  return (
    <authContext.Provider value={[auth, dispatch]}>
      {children}
    </authContext.Provider>
  );
}

// auth consumer
export default function AuthConsumer() {
  return useContext(authContext);
}
