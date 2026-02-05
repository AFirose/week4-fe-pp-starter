import { useState } from "react";
import { services } from "../data";

function Services() {
  const [servicesData, setServicesData] = useState(services);

  return (
    <section className="section services">
      <div className="section-title">
        <h2>services</h2>
        <div className="underline"></div>
      </div>

      <div className="section-center services-center">
        {servicesData.map((service) => {
          const { id, icon, title, text } = service;

          return (
            <article key={id} className="service">
              <span className="service-icon">{icon}</span>
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
