import Image from "next/image";
import React from "react";

const SkillsCard = () => {
  return (
    <div className="relative w-32 h-32 rounded-xl overflow-hidden bg-white-c dark:bg-gray-dl">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
        alt=""
        fill
        className="rounded-xl"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-90 transition-opacity duration-300 dark:bg-yellow-c bg-yellow-d">
        <div className="text-gray-d flex flex-col items-center gap-4 text-center font-semibold	cursor-default">
          <span className="text-l">ReactJS</span>
          <span className="text-sm">2 Years Experience</span>
        </div>
      </div>
    </div>
  );
};

export default SkillsCard;
