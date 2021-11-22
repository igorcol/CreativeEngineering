import React from 'react';

import './styles.css';

const weeklyVideoCards = [
  {
    title: "Build #1 - Mechanical Engineering",
    description: "For Build #1, Mark shares his end-to-end engineering process. You’ll learn about pneumatic systems, motors, springs, and more mechanical engineering topics to design, build, and optimize your first build: a machine that solves a food-related problem.",
    source: "https://res.cloudinary.com/monthly/video/upload/monthly-admin-images/mark-rober-engineering/Mark_Rober_Promo_1_sap6dn.mp4"
  },
  {
    title: "Build #2 - Electrical Engineering",
    description: "For Build #2, Mark teaches you electrical engineering techniques for your second build: a device that displays or creates art. You’ll dive into circuits, Arduino, sensors, code, and more. You’ll finish with another personalized, unique, and shareable build.",
    source: "https://res.cloudinary.com/monthly/video/upload/monthly-admin-images/mark-rober-engineering/Mark_Rober_Promo_2_ezvcem.mp4"
  },
  {
    title: "Build #3 - Advanced Techniques",
    description: "For Build #3, you’ll use both mechanical and electrical engineering to create a device that helps you form a good habit or break a bad one. You’ll also learn about some of Mark’s favorite advanced techniques, including CAD and 3D printing.",
    source: "https://res.cloudinary.com/monthly/video/upload/monthly-admin-images/mark-rober-engineering/updated_promo_3_rober_o9lwi2.mp4"
  },
]

function Benefits() {
  return (
    <section className="benefits-section">

      <div className="title-wraper">
        <div className="title-container">
          <div className="secondary-title">AN IMMERSIVE LEARNING EXPERIENCE</div>
          <div className="main-title">Engineer 3 creative builds in 30 days</div>
          <div className="description">Former NASA engineer and YouTuber Mark Rober teaches you everything he knows in this one-month class. Immerse yourself in the process and leave the class with 3 personalized engineering builds and a new set of lifelong creative engineering skills.</div>
        </div>
      </div>

      <div className="homepage-weekly-videos">
        <div className="homepage-weekly-videos-container">

          {
            weeklyVideoCards.map(video => (
              <div className="weekly-video-outer-container">
                <div className="weekly-video-rect">
                  <video className="weekly-video" autoPlay loop muted >
                    <source type="video/mp4"
                    src={video.source}/>
                  </video>
                </div>
                <div className="weekly-video-title">
                  {video.title}
                </div>
                <div className="weekly-video-description">
                  {video.description}
                </div>
              </div>
            ))
          }

        </div>
      </div>

    </section>
  );
};

export default Benefits;
