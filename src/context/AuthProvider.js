import { useState, createContext, useContext } from "react";

const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  function checkLogin() {}

  function login(email, password) {
    const loginBody = {
      email: email,
      password: password,
    };
    console.log(loginBody);
    fetch("http://localhost:8086/user/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginBody),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUserInfo(data);
        console.log(userInfo);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  const values = { userInfo, login };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const UseAuthInfo = () => {
  return useContext(AuthContext);
};
