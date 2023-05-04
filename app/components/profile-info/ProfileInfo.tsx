import React, { FC } from "react";
import { ProfileButtons, ProfileDetails, ProfileFacts, ProfileImage } from "./";

interface ProfileInfoProps {
  name: string;
  dateStartedWorking: number;
  dateStartedDeveloper: number;
  totalProjects: number;
}
const ProfileInfo: FC<ProfileInfoProps> = ({
  name,
  dateStartedWorking,
  dateStartedDeveloper,
  totalProjects,
}) => {
  return (
    <>
      <div className="flex flex-col md:gap-10 md:flex-row">
        <ProfileImage />
        <ProfileDetails {...{ name }} />
      </div>
      <div className="flex flex-col gap-8">
        <ProfileFacts
          {...{ dateStartedWorking, dateStartedDeveloper, totalProjects }}
        />
        <ProfileButtons />
      </div>
    </>
  );
};

export default ProfileInfo;
