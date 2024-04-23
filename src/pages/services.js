import { useState, useEffect } from "react";
import ServiceCard from "../components/service-card";
import { UseAuthInfo } from "../context/AuthProvider";
import { render } from "react-dom";
import reactRouterDom from "react-router-dom";
import React, { Component } from "react";

class Products extends Component {
  render() {
    return <div></div>;
  }
}

export default function Services() {
  const [services, setServices] = useState(null);
  const { userInfo } = UseAuthInfo();
  console.log(userInfo);

  function renderServices() {
    console.log(services);
    return services?.map((service) => {
      return (
        <ServiceCard key={service.service_id} service={service} href="/home" />
      );
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
        console.log(data);
        setServices(data.results);
      })
      .catch((err) => {
        console.error("Get Services Error: ", err);
      });
  }, []);

  return (
    <div className="service-page-container">
      <input type="text" placeholder="Search.." />
      <div className="card-display-wrapper">{renderServices()}</div>
    </div>
  );
}
