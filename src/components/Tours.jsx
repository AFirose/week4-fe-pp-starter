import { useState } from "react";
import { tours } from "../data";

function Tours() {
  const [toursData, setToursData] = useState(tours);

  const removeTour = (id) => setToursData(toursData.filter(tour => tour.id !== id));
  const restoreTours = () => setToursData(tours);

  if (toursData.length === 0) {
    return (
      <section className="section">
        <div className="section-title">
          <h2>featured tours</h2>
          <div className="underline"></div>
        </div>
        <div className="tour-btn">
          <h4>no tours left</h4>
          <button className="btn" onClick={restoreTours}>refresh</button>
        </div>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="section-title">
        <h2>featured tours</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center featured-center">
        {toursData.map(({ id, image, date, title, info, location, duration, cost }) => (
          <article key={id} className="tour-card">
            <div className="tour-img-container">
              <img src={image} alt={title} className="tour-img" />
              <p className="tour-date">{date}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
                <p>${cost}</p>
              </div>
              <p>{info}</p>
              <div className="tour-footer">
                <p><i className="fas fa-map"></i> {location}</p>
                <p>{duration} days</p>
                <button className="btn" onClick={() => removeTour(id)}>not interested</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Tours;
