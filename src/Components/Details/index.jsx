import React from 'react';
import DetailBlock from './DetailBlock';
import './styles.css';

const details = [
  {
    title: "Class starts",
    info: "August 9",
    description: "Starts 3 days after enrollment ends. Take the class fully online."
  },
  {
    title: "TIME",
    info: "1 Month Commitment",
    description: "5-10 hrs/week for 4 weeks. Get immersed in the process."
  },
  {
    title: "FINAL PRODUCT",
    info: "3 Personalized Builds",
    description: "Engineer 3 builds of your own design by the end of the class."
  },
  {
    title: "THIS CLASS IS FOR",
    info: "All Levels",
    description: "Beginner or advanced, this class will level you up."
  },
]

function Details() {
  return (
    <section className="courses-details">

      <div className="details-container">
        {
          details.map(detail => (
            <DetailBlock key={details.indexOf(detail)}
              title={detail.title}
              info={detail.info}
              description={detail.description}
            />
          ))
        }
      </div>

    </section>
  );
};

export default Details;
