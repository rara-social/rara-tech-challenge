import React, { useState } from "react";
import { Router } from "@reach/router";
import { Spinning } from "./util";
import styled from "styled-components";

// Auth
import LandingPage from "./organisms/LandingPage";
// User
import UserProfile from "./organisms/UserProfile";
import ProfileView from "./views/ProfileView";

const Container = styled.div``;

function App() {
  const [loadingSession, setLoadingSession] = useState(false);
  // mock authenticated session by setting this state to true
  const [activeSession, setActiveSession] = useState(true);
  // after authenticating, we should store some info about the currently active user somewhere in app state -- in this exercise, I'll put that state here instead of using a Redux store or ReactContext.
  const [activeUser, setActiveUser] = useState({
    profile: {
      avatarURL: "https://avatars.githubusercontent.com/u/3959416?v=4",
      displayName: "MagRelo",
      id: 1,
    },
    communityName: "RARA.house",
    ra: 1726,
  });
  return (
    <Container className="App-Container">
      <div className="App">
        {/* Header */}
        {!activeSession ? (
          <div style={{ textAlign: "center", padding: "24px" }}>
            <span style={{ fontSize: "30px", fontWeight: "bold" }}>
              RARA Social Wallet
            </span>
          </div>
        ) : (
          <UserProfile user={activeUser} />
        )}

        {/* Main */}
        {loadingSession ? (
          <div
            style={{
              display: "grid",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
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
                  <ProfileView path="profile/:userId" user={activeUser} />
                  {/* include ProfileView for authenticated users only (non-authed users may not have a profile page) */}
                </Router>
              </>
            )}
          </React.Fragment>
        )}

        {/* Footer */}
        <footer>
          <span style={{ fontSize: "28px", padding: "0.5rem 0 " }}>
            RARA.social
          </span>
        </footer>
      </div>
    </Container>
  );
}

export default App;
