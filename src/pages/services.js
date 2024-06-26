import { useState, useContext, useEffect } from "react";
import ServiceCard from "../components/ServiceCard";
import { useAuthInfo } from "../context/AuthProvider";
import { render } from "react-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Services() {
  const [services, setServices] = useState(null);
  const { userInfo } = useAuthInfo();

  function renderServices() {
    return services?.map((service) => {
      return <ServiceCard key={service.service_id} service={service} />;
    });
  }

  useEffect(() => {
    fetch("http://localhost:8086/services", {
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
        console.error("Get Services Error: ", err);
      });
  }, []);

  return (
    <div className="service-page-container">
      <div className="search-container">
        <input type="text" placeholder="Search.." />
        <div class="dropdown">
          <button class="dropbtn">Filter</button>
          <div class="dropdown-content">
            <Link to="/extensions">Hair Extensions</Link>
            <Link to="/consultation">Consultation</Link>
          </div>
        </div>
      </div>

      <div className="card-display-wrapper">{renderServices()}</div>
    </div>
  );
}
