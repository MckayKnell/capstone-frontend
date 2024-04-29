import { useState, useEffect, useContext } from "react";
import { useAuthInfo } from "../context/AuthProvider";
import { useHistory } from "react-router-dom";

export default function Login() {
  const { login, userInfo, clearUserInfo } = useAuthInfo();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();
    await login(email, password);
    console.log(userInfo);
  }

  useEffect(() => {
    if (userInfo) {
      history.push("/home");
    }
  }, [userInfo]);

  return (
    <div className="login-container">
      <div className="title-wrapper">Login</div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
