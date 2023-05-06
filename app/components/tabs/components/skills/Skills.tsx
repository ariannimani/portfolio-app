import { SkillsCard } from "@/components/cards";
import { SkillProps } from "@/types/dataTypes";
import React, { FC } from "react";

interface SkillsProps {
  data: SkillProps[];
}
const Skills: FC<SkillsProps> = ({ data }) => {
  return (
    <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-6 justify-center">
      {data.map((skill) => (
        <SkillsCard key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

export default Skills;
