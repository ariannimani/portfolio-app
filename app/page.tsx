import { Footer, ProfileInfo, Tabs } from "./components";
import { getDataFromFirebase } from "../firebase/getData";

async function getData() {
  const data = await getDataFromFirebase();
  return data;
}

export default async function Home() {
  const data = await getData();

  const { projects, skills } = data;

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8">
      {/* @ts-expect-error Server Component */}
      <ProfileInfo />
      <Tabs projects={projects} skills={skills} />
      <Footer />
    </div>
  );
}
