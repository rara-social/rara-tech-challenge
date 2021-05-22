import React, { useState } from 'react';
import { Router } from '@reach/router';
import { Spinning } from './util';

// Auth
import LandingPage from './LandingPage';
// User
import UserProfile from 'components/UserProfile';

function App() {
  const [loadingSession, setLoadingSession] = useState(false);
  const [activeSession, setActiveSession] = useState(false);
  return (
    <div className='App-Container'>
      <div className='App'>
        {/* Header */}
        {!activeSession ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <span style={{ fontSize: '30px', fontWeight: 'bold' }}>
              RARA Social Wallet
            </span>
          </div>
        ) : (
          <UserProfile />
        )}

        {/* Main */}
        {loadingSession ? (
          <div
            style={{
              display: 'grid',
              alignContent: 'center',
              justifyContent: 'center',
            }}>
            {/* Loading Session */}
            <Spinning />
          </div>
        ) : (
          <React.Fragment>
            {!activeSession ? (
              <Router>
                {/* No Session */}
                <LandingPage default />
              </Router>
            ) : (
              <>
                <Router>
                  {/* Active Session */}
                  <LandingPage default />
                </Router>
              </>
            )}
          </React.Fragment>
        )}

        {/* Footer */}
        <footer>
          <span style={{ fontSize: '28px', padding: '0.5rem 0 ' }}>
            RARA.social
          </span>
        </footer>
      </div>
    </div>
  );
}

export default App;
