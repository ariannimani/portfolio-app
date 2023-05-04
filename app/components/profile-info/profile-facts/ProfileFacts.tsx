import { getYears } from "@/utils";
import React, { FC } from "react";

interface ProfileFactsProps {
  dateStartedWorking: number;
  dateStartedDeveloper: number;
  totalProjects: number;
}
const ProfileFacts: FC<ProfileFactsProps> = ({
  dateStartedWorking,
  dateStartedDeveloper,
  totalProjects,
}) => {
  return (
    <div className="flex gap-20 text-center text-gray-md dark:text-gray-l mt-4 px-8">
      <div className="text-base	 md:text-xl">
        <div className="text-xl md:text-2xl">
          {getYears(dateStartedWorking)}
        </div>
        Years of work experience
      </div>
      <div className="text-base	 md:text-xl">
        <div className="text-xl md:text-2xl">
          {getYears(dateStartedDeveloper)}
        </div>{" "}
        Years of work experience as Developer
      </div>
      <div className="text-base	 md:text-xl">
        <div className="text-xl md:text-2xl">{totalProjects}</div> Completed
        Projects
      </div>
    </div>
  );
};

export default ProfileFacts;
