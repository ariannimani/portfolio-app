import { PortfolioCard } from "@/components";
import React from "react";

const Portfolio = () => {
  return (
    <div className="mt-8 grid md:grid-cols-2 gap-y-12 gap-x-8 justify-center">
      <PortfolioCard />
      <PortfolioCard />
      <PortfolioCard />
    </div>
  );
};

export default Portfolio;
