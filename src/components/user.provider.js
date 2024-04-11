import { useState, createContext } from "react";
export const UserContext = createContext();

export default function UserProvider({ children }) {
  const [user, setUser] = useState({});

  const userState = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={userState}>{children}</UserContext.Provider>
  );
}
