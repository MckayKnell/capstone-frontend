import { useAuthInfo } from "../context/AuthProvider";

export default function Home(props) {
  const { userInfo } = useAuthInfo();
  console.log(userInfo);
  return (
    <div className="header-container">
      <div className="title-wrapper">SADIE HAIR</div>
    </div>
  );
}
