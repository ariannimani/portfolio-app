"use client";
import React, { useState } from "react";
import Button from "../button/Button";
import { Portfolio, Skills, Experience } from "@/components/tabs/components";

const tabs = [
  { value: "portfolio", label: "Portfolio" },
  { value: "skills", label: "Skills" },
  //{ value: "experience", label: "Experience" },
];
const tabContents = [
  {
    tabValue: "portfolio",
    component: Portfolio,
  },
  {
    tabValue: "skills",
    component: Skills,
  },
  //{
  //  tabValue: "experience",
  //  component: Experience,
  //},
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].value);

  const activeTabContent = tabContents.find((tc) => tc.tabValue === activeTab);

  if (!activeTabContent) {
    throw new Error(`No tab content found for ${activeTab} tab`);
  }

  const ActiveTabComponent: React.FC<any> = activeTabContent.component;

  return (
    <div className="mt-6 w-fit">
      <ul className="flex justify-between gap-3 w-[27rem] md:w-[42rem] p-4 dark:bg-gray-dl bg-white-c rounded-2xl">
        {tabs.map((tab) => (
          <li key={tab.value} className="w-full h-12">
            <Button
              onClick={() => setActiveTab(tab.value)}
              active={tab.value === activeTab}
            >
              {tab.label}
            </Button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <ActiveTabComponent {...{ setActiveTab }} />
      </div>
    </div>
  );
};

export default Tabs;
