import { WorkCard } from "@/components/cards";
import { store } from "../../../redux/store";
import { getYears } from "@/utils";
import React from "react";
import { WorkProps } from "@/types/dataTypes";

const ProfileFacts = ({}) => {
  const { work, projects } = store.getState().data.data[0];

  const totalProjects = projects.length;

  return (
    <div className="flex gap-20 text-center text-gray-md dark:text-gray-l mt-4 px-8">
      {work.map((job: WorkProps) => (
        <WorkCard key={job.id} job={job} />
      ))}
      <div className="text-base	 md:text-xl">
        <div className="text-xl md:text-2xl">{totalProjects}+</div> Completed
        Projects
      </div>
    </div>
  );
};

export default ProfileFacts;
