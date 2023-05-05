import Image from "next/image";
import React, { FC } from "react";
import { Ellipse } from "./components";
import { ProjectProps } from "@/types/dataTypes";

interface PortfolioCardProps {
  project: ProjectProps;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ project }) => {
  const { name, image, description, link } = project;
  return (
    <div className="relative w-80 h-56 object-cover rounded-xl overflow-hidden">
      <Image
        src={image}
        alt=""
        className="object-cover w-full h-56 rounded-xl "
        width={500}
        height={500}
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition-opacity duration-300 dark:bg-yellow-c bg-yellow-d">
        <div className="text-gray-d flex flex-col items-center gap-4 text-center	cursor-default">
          <span className="text-xl font-medium">{name}</span>
          <span className="text-sm">{description}</span>
          <a href={link}>
            <Ellipse />
          </a>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
