import React from 'react';

import './styles.css';

function Header() {
  return (
    <div className="topBar">
      <div className="topbarContainer">

        <div className="headerLogo">weekly</div>

        <div className="linksContainer">
          <button className="linkButton">Testimonials</button>
          <button className="linkButton">Price</button>
          <button className="linkButton">Question?</button>
          <button className="linkButton"> Gift</button>

          <div className="profile">
            <img src="assets/person.jpeg" className="profileImg" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Header;
