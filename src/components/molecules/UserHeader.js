import React from "react";
import { Unit, copyTextToClipboard } from "../util";

// with dummy data passed as default prop.
function UserHeader({
  user = {
    profile: {
      avatarURL: "https://avatars.githubusercontent.com/u/3959416?v=4",
      displayName: "MagRelo",
      id: 1,
    },
    communityName: "RARA.house",
    ra: 1726,
  },
}) {
  return (
    <div
      className="user-info-grid"
      style={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(57,6,78,1) 49%, rgba(9,121,100,1) 100%)",
      }}
    >
      <img
        src={user.profile.avatarURL}
        alt="avatar"
        height="48px"
        width="48px"
        style={{ borderRadius: "50%" }}
      />
      <div className="name">
        {user.profile.displayName}
        <div className="community">{user.communityName}</div>
      </div>
      <div>
        <span className="balance">
          <span>
            {user.ra || "0"} <Unit type={"ra"} />
          </span>
        </span>
      </div>
    </div>
  );
}

export default UserHeader;
