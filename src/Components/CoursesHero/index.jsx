import React from 'react';
import './styles.css';

import {PlayCircleOutline} from "@material-ui/icons"
import { useState,useRef, useEffect } from 'react';

function CoursesHero() {

  const [timerDays, setTimerDays]       = useState('00');
  const [timerHours, setTimerHours]     = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef()

  function startTimer() {
    const countdownDate = new Date('August 6, 2021 00:00').getTime()

    interval = setInterval(() => {
      const now = new Date().getTime()
      const distance = countdownDate - now

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);

      if(distance < 0) {
        // stop counter
        clearInterval(interval.current)
      }
      else {
        // Update timer
        setTimerDays(days)
        setTimerHours(hours)
        setTimerMinutes(minutes)
        setTimerSeconds(seconds)
      }

    }, 1000)
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current)
    }
  },[])


  const timerData = [
    {
      title: "DAYS",
      content: timerDays
    },
    {
      title: "HRS",
      content: timerHours
    },
    {
      title: "MIN",
      content: timerMinutes
    },
    {
      title: "SEC",
      content: timerSeconds
    },
  ]

  return (
    <section className="courses-hero-section">

      <div className="courses-hero-container">

        <div className="courses-hero-left">
            <div className="titleSection">    
                <img src="assets/wave.png" className="wave-image" />
                <div className="tittleContainer">
                  <h2 className="taught-by">Igor Colombini Teaches</h2>
                  <h1 className="main-tittle">Creative Engineering</h1>
                  <div className="main-title-description">Become a creative engineer in 30 days. During this one-month class, learn to use engineering and science to bring your creative ideas to life. Finish the class with 3 original engineering builds of your own.</div>
                </div>
            </div>
            <div className="enroll-section">
                  <div className="buttonContainer">
                    <button className="enroll-button">Enroll Now</button>
                  </div>
                  <div className="dateContainer">
                    <div className="enroll-date">Enrollment closes on August 6:</div>

                    <div className="countdown-center-container">
                      {
                        timerData.map(time => (
                          <div className="countdown-container" key={time.title}>
                              <div className="category-container">
                                  <div className="category-number">{time.content}</div>
                                  <div className="category-text">{time.title}</div>
                              </div>
                        </div>
                        ))
                      }
                                          
                    </div>
                    
                  </div>
            </div>
        </div>

        <div className="courses-hero-right">
          <div className="video-container">
            
            <video className="course-hero-video-preview"
              autoPlay
              loop
              muted
            >
              <source  type="video/mp4" src="https://res.cloudinary.com/monthly/video/upload/monthly-admin-images/Landing%20Pages/Mark_Trailer_Preview_kroku0.mp4"/>
            </video>

            <img src="assets/play1.svg" className="course-hero-play-icon"/>
            
           </div>
          
        </div>

      </div>

    </section>
  );
};



export default CoursesHero;
