 import { useState } from "react";
import { services } from "../data";

function Services() {
  const [servicesData, setServicesData] = useState(services);

  const removeService = (id) => {
    setServicesData(
      servicesData.filter((service) => service.id !== id)
    );
  };

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

              <div className="service-info">
                <h4 className="service-title">{title}</h4>
                <div className="underline"></div>
                <p className="service-text">{text}</p>

                <button
                  className="btn service-btn"
                  onClick={() => removeService(id)}
                >
                  Remove
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Services;
