import { useEffect, useState } from "react";
import { useAuthInfo } from "../context/AuthProvider";

export default function Service(props) {
  const id = props.match.params.id;
  const { userInfo } = useAuthInfo();
  const [service, setService] = useState([]);

  useEffect(() => {
    console.log("hello");
    fetch(`http://localhost:8086/services/${id}`, {
      headers: {
        "Content-Type": "application/json",
        auth: String(userInfo["auth_info"].auth_token),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setService(data.results);
      })
      .catch((err) => {
        console.error("Get Service Error: ", err);
      });
  }, []);

  return (
    <div className="sub-service-page-container">
      <div className="title-wrapper">sub page</div>
    </div>
  );
}
