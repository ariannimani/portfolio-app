import { Footer, ProfileInfo, Tabs } from "./components";
import { Portfolio, Skills, Experience } from "@/components/tabs/components";

const tabs = [
  { value: "portfolio", label: "Portfolio" },
  { value: "skills", label: "Skills" },
  { value: "experience", label: "Experience" },
];
const tabContents = [
  {
    tabValue: "portfolio",
    component: Portfolio,
    data: ["test"],
  },
  {
    tabValue: "skills",
    component: Skills,
    data: ["test"],
  },
  {
    tabValue: "experience",
    component: Experience,
    data: ["test"],
  },
];

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8">
      <ProfileInfo />
      <Tabs tabs={tabs} tabContents={tabContents} />
      <Footer />
    </div>
  );
}
