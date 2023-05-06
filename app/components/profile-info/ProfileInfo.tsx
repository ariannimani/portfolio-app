import React from "react";
import { ProfileButtons, ProfileDetails, ProfileFacts, ProfileImage } from "./";
import { getDataFromFirebase } from "~/firebase/getData";

const ProfileInfo = async () => {
  const data = await getDataFromFirebase();

  if (!data) return <></>;
  const { cvLink } = data;

  return (
    <>
      <div className="flex flex-col md:gap-10 md:flex-row">
        {/* @ts-expect-error Server Component */}
        <ProfileImage />
        {/* @ts-expect-error Server Component */}
        <ProfileDetails />
      </div>
      <div className="flex flex-col gap-8">
        {/* @ts-expect-error Server Component */}
        <ProfileFacts />
        <ProfileButtons link={cvLink} />
      </div>
    </>
  );
};

export default ProfileInfo;
