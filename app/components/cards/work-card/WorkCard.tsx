import { WorkProps } from "@/types/dataTypes";
import { getYears } from "@/utils";
import React, { FC } from "react";

interface WorkCardProps {
  job: WorkProps;
}

const WorkCard: FC<WorkCardProps> = ({ job }) => {
  const { startDate, description } = job;

  return (
    <div className="text-base	 md:text-xl">
      <div className="text-xl md:text-2xl">{getYears(startDate)}</div>
      <div className="md:break-normal md:w-60">{description}</div>
    </div>
  );
};

export default WorkCard;
