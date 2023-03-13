import React, { useState } from 'react';
import './Logos.css'

function LogoPage() {
  const [primaryLogoFullscreen, setPrimaryLogoFullscreen] = useState(false);
  const [secondaryLogoFullscreen, setSecondaryLogoFullscreen] = useState(false);

  const togglePrimaryLogoFullscreen = () => {
    setPrimaryLogoFullscreen(!primaryLogoFullscreen);
  };

  const toggleSecondaryLogoFullscreen = () => {
    setSecondaryLogoFullscreen(!secondaryLogoFullscreen);
  };

  return (
    <div className="logo-page">

      {/* Main Content */}
      <main className="logo-content">
        <section className="logos-container">
          <div className="logo-column">
            <h2>Primary Logo</h2>
            <div className="logo-container">
              <img src="https://images.ctfassets.net/w7shgyvrfdaa/473h8JhbgkjaJaTUvyDJhX/1e39c52d80d8b875b23bdd9515dfb52a/Logo_Intro_Componentspng.png" alt="Primary Logo" className={primaryLogoFullscreen ? 'fullscreen' : ''} />
              {!primaryLogoFullscreen && <div className="zoom-icon" onClick={togglePrimaryLogoFullscreen}><i className="fa fa-search-plus"></i></div>}
              {primaryLogoFullscreen && <div className="close-icon" onClick={togglePrimaryLogoFullscreen}><i className="fa fa-times"></i></div>}
            </div>
          </div>
          <div className="logo-column">
            <h2>Secondary Logo</h2>
            <div className="logo-container">
              <img src="https://images.ctfassets.net/w7shgyvrfdaa/6Rj1Z1yCEbpsh2ATkqDox1/821f3885cfe4bdde0118b0c742fd8bdf/Logo_Intro_SecondaryLogoLockup.png" alt="Secondary Logo" className={secondaryLogoFullscreen ? 'fullscreen' : ''} />
              {!secondaryLogoFullscreen && <div className="zoom-icon" onClick={toggleSecondaryLogoFullscreen}><i className="fa fa-search-plus"></i></div>}
              {secondaryLogoFullscreen && <div className="close-icon" onClick={toggleSecondaryLogoFullscreen}><i className="fa fa-times"></i></div>}
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="logo-footer">
        {/* Footer Content */}
      </footer>
    </div>
  );
}

export default LogoPage;
