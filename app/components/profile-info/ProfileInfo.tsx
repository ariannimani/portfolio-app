import React from "react";
import { ProfileButtons, ProfileDetails, ProfileFacts, ProfileImage } from "./";

const ProfileInfo = () => {
  return (
    <>
      <div className="flex flex-col md:gap-10 md:flex-row">
        <ProfileImage />
        <ProfileDetails />
      </div>
      <div className="flex flex-col gap-8">
        <ProfileFacts />
        <ProfileButtons />
      </div>
    </>
  );
};

export default ProfileInfo;
