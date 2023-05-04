import Image from "next/image";
import React from "react";
import PortfolioImage from "@/assets/images/profilePicture.jpg";
import { Ellipse } from "./components";

const PortfolioCard = () => {
  return (
    <div className="relative w-80 h-56 rounded-xl overflow-hidden">
      <Image src={PortfolioImage} alt="" className="w-80 h-56 rounded-xl" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-75 transition-opacity duration-300 dark:bg-yellow-c bg-yellow-d">
        <div className="text-gray-d flex flex-col items-center gap-4 text-center	cursor-default">
          <span className="text-xl font-medium">Title Here</span>
          <span className="text-sm">
            Landing page of SmarterTrading411 created using wordPress
          </span>
          <Ellipse />
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
