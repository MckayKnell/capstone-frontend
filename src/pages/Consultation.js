import { useState, useContext, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import { useAuthInfo } from "../context/AuthProvider";
import { render } from "react-dom";

export default function Consultation() {
  const [services, setServices] = useState(null);
  const { userInfo } = useAuthInfo();

  function renderCategory() {
    return services?.map((service) => {
      return <ServiceCard key={service.category_id} service={service} />;
    });
  }

  useEffect(() => {
    fetch("http://localhost:8086/categories", {
      headers: {
        "Content-Type": "application/json",
        auth: String(userInfo["auth_info"].auth_token),
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setServices(data.results);
      })
      .catch((err) => {
        console.error("Get Categories Error: ", err);
      });
  }, []);

  return (
    <div className="service-page-container">
      <div className="title-wrapper">Consultation</div>
      <div className="card-display-wrapper">{renderCategory()}</div>
    </div>
  );
}
