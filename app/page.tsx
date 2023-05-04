import { Footer, ProfileInfo, Tabs } from "./components";
import { getDataFromFirebase } from "../firebase/getData";

export default async function Home() {
  const data = await getDataFromFirebase();

  if (!data) return <></>;

  const { name, dateStartedWorking, dateStartedDeveloper, projects, skills } =
    data[0];
  const totalProjects = projects.length;

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8">
      <ProfileInfo
        {...{ name, dateStartedWorking, dateStartedDeveloper, totalProjects }}
      />
      <Tabs {...{ projects, skills }} />
      <Footer />
    </div>
  );
}
