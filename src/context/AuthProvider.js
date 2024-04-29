import { useState, createContext, useContext } from "react";

const AuthContext = createContext("");

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  function login(email, password) {
    clearUserInfo();
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
        if (!response.ok) {
        } else {
          return response.json();
        }
      })
      .then((data) => {
        setUserInfo(data);
        // console.log(userInfo);
      })
      .catch((error) => {
        clearUserInfo();
        console.error("Error:", error);
      });
  }

  function clearUserInfo() {
    setUserInfo(null);
  }

  const values = { userInfo, login, clearUserInfo };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuthInfo = () => {
  return useContext(AuthContext);
};
