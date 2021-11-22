import React from 'react';
import Benefits from '../../Components/Benefits';
import CoursesHero from '../../Components/CoursesHero';
import Details from '../../Components/Details';
import Instructor from '../../Components/Instructor';

import './styles.css';

function Landing() {
  return (
    <div className="LandingPage">

      <CoursesHero/>
      <Details/>
      <Benefits/>
      <Instructor/>

    </div>
  );
};

export default Landing;
