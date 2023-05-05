import React from "react";
import { ProfileButtons, ProfileDetails, ProfileFacts, ProfileImage } from "./";
import { store } from "@/redux/store";

const ProfileInfo = () => {
  const { cvLink } = store.getState().data.data[0];

  return (
    <>
      <div className="flex flex-col md:gap-10 md:flex-row">
        <ProfileImage />
        <ProfileDetails />
      </div>
      <div className="flex flex-col gap-8">
        <ProfileFacts />
        <ProfileButtons link={cvLink} />
      </div>
    </>
  );
};

export default ProfileInfo;
