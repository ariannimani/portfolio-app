import React, { FC } from "react";
import Button from "../button/Button";

export interface TabsProps {
  value: string;
  label: string;
}

export interface TabContent {
  tabValue: string;
  component: React.FC<any>;
  data: string[];
}

interface MovieTabsProps {
  tabs: TabsProps[];
  tabContents: TabContent[];
}

const Tabs: FC<MovieTabsProps> = ({ tabs, tabContents }) => {
  //   const [activeTab, setActiveTab] = useState(tabs[0].value);
  let activeTab = tabs[0].value;
  const handleTabClick = (tab: string) => {
    console.log({ tab });
    // activeTab = tabs[1].value;
  };

  const activeTabContent = tabContents.find((tc) => tc.tabValue === activeTab);

  if (!activeTabContent) {
    throw new Error(`No tab content found for ${activeTab} tab`);
  }

  const ActiveTabComponent = activeTabContent.component;

  return (
    <div className="mt-6 w-fit">
      <ul className="flex justify-between gap-3 p-4 dark:bg-gray-dl bg-white-c rounded-2xl">
        {tabs.map((tab) => (
          <li key={tab.value} className="w-full h-12">
            <Button>{tab.label}</Button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        <ActiveTabComponent
          {...{ data: activeTabContent.data }} //, setActiveTab }}
        />
      </div>
    </div>
  );
};

export default Tabs;
