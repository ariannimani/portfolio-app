import { SkillProps } from "@/types/dataTypes";
import { getYears } from "@/utils";
import Image from "next/image";
import React, { FC } from "react";

interface SkillsCardProps {
  skill: SkillProps;
}

const SkillsCard: FC<SkillsCardProps> = ({ skill }) => {
  const { name, image, dateStarted } = skill;
  return (
    <div className="relative w-32 h-32 object-cover rounded-xl overflow-hidden bg-white-c dark:bg-gray-dl">
      <Image
        src={image}
        alt=""
        className="rounded-xl"
        width={240}
        height={240}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300 dark:bg-yellow-c bg-yellow-d">
        <div className="text-gray-d flex flex-col items-center gap-4 text-center font-semibold	cursor-default">
          <span className="text-l">{name}</span>
          {/* {dateStarted > 0 && (
            <span className="text-sm">
              {getYears(dateStarted)} Years Experience
            </span>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
