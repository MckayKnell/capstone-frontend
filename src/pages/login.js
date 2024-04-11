import { useState, useContext } from "react";
import { UserContext } from "../components/user.provider";

export default function Login() {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => setUser({ username: username, email: email }), 3000);
    console.log(user);
  }

  return (
    <div className="login-container">
      <div className="title-wrapper">Login</div>
      <form onSubmit={handleSubmit}>
        <input
          type="username"
          value={username}
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input type="submit" value="Add User Info" />
      </form>
    </div>
  );
}
