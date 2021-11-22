import React from 'react';

import './styles.css';

function Instructor() {
  return (
    <div className="instructor-section">

        <div className="instructor-left"
          style={{
            backgroundImage: "url(https://res.cloudinary.com/monthly/image/upload/monthly-admin-images/mark-rober-engineering/rober-headshot.jpg)",
            backgroundPosition: "center",
            backgroundPositionY: "-60px",
            backgroundSize: 'cover',
          }}
        />

        <div className="instructor-right">
            <img src="assets/wave.png" className="wave-image" />
            <div className="instructor-title-container">
                <div className="instructor-title">Learn from the best</div>
                <div className="instructor-name">Mark Rober</div>
                <div className="instructor-description ">Mark Rober is an inventor and a former Apple & NASA engineer, where he spent 7 years working on the Curiosity rover. You may know him from his YouTube channel, where he has 1.6 billion views and nearly 15 million subscribers. His long list of extraordinary creations includes an automatic-bullseye dartboard, a glitter bomb package thief trap, and a rocket-powered golf club. He’s gone swimming with sharks, shared meatless burgers with Bill Gates, and built April Fools’ Day pranks with Jimmy Kimmel—all in the name of science.</div>
            </div>
        </div>

    </div>
  );
};

export default Instructor;
