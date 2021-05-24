import React, { useState, useContext } from "react";
import { navigate } from "@reach/router";
import Modal from "../molecules/Modal";
import UserHeader from "../molecules/UserHeader";

export default function UserProfile({ user }) {
  // Modal Controls
  const [showDialog, setShowDialog] = React.useState(false);
  const open = () => {
    setShowDialog(true);
  };
  const close = () => setShowDialog(false);

  return (
    <div>
      <button
        onClick={open}
        className="btn btn-unstyled"
        style={{
          color: "white",
          zIndex: 0,
          padding: "0",
          borderRadius: "unset",
          width: "100%",
        }}
      >
        {UserHeader({ user })}
      </button>

      {/* Wallet Modal */}
      <Modal open={showDialog} onClose={close}>
        {UserHeader({ user })}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime omnis
          aliquam odit accusamus eum id vero voluptatibus voluptate consequatur,
          iste nemo sequi laudantium facere similique necessitatibus in nulla
          quo doloribus.
        </p>
        <button
          onClick={() => {
            close();
            navigate(`/profile/${user.profile.id}`);
          }}
        >
          Profile
        </button>
      </Modal>
    </div>
  );
}
