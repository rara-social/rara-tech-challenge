import React, { useEffect, useState } from "react";
import styled from "styled-components";
// import {getUserById, updateProfileById} from "../../helpers/userProfileHelpers";
import TextInput from "../atoms/TextInput";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  background: grey;
  color: white;
`;
const Card = styled.div`
  border: 1px solid white;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 40%;
`;

const Header = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 0rem 1rem 0rem 1rem;
`;
const Content = styled.div`
  width: 100%;
  top: 3rem;
  margin: 0rem 1rem 0rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProfileView = ({ user }) => {
  /*
  a better implementation of this component might make use of a helper function to populate this view with data passed via navigation params instead of passing hardcoded props from the Router (something that will likely not happen in production)

  For example:
    useEffect(() => {
      // useParams from @reach/router
      const {error, data} = getUserById(useParams(user.profile.id));
      !error && setLocalUserData(data);
    }, []);
  */
  return (
    <Wrapper>
      <Card>
        <Header>
          <span style={{ fontWeight: "bold" }}>
            Community: {user.communityName}
          </span>
          <span style={{ fontWeight: "bold" }}> {user.ra} RA</span>
        </Header>
        <Content>
          <img
            src={user.profile.avatarURL}
            alt="avatar"
            width="50%"
            style={{ borderRadius: "50%", marginBottom: "1rem" }}
          />
          <TextInput label={"Display Name"} val={user.profile.displayName} />
          <TextInput label={"Photo URL"} val={user.profile.avatarURL} />
          <button
            onSubmit={() => {
              console.log("sendChanges");
              //submitting the form should send updates to the backend, in order for the following func to work, we also will need some sort of local form state to track our changes.
              //updateProfileById(userid, changes);
            }}
          >
            Submit
          </button>
        </Content>
      </Card>
    </Wrapper>
  );
};

export default ProfileView;
