import { SkillsCard } from "@/components/cards";
import React from "react";

const Skills = () => {
  return (
    <div className="mt-8 grid grid-cols-3 md:grid-cols-4 gap-y-8 gap-x-6 justify-center">
      <SkillsCard />
      <SkillsCard />
      <SkillsCard />
      <SkillsCard />
      <SkillsCard />
      <SkillsCard />
    </div>
  );
};

export default Skills;
