import { Footer, ProfileInfo, Tabs } from "./components";
import { getDataFromFirebase } from "../firebase/getData";

export default async function Home() {
  const data = await getDataFromFirebase();

  //if (!data) return <></>;
  //const { projects, skills } = data;

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8">
      {/* @ts-expect-error Server Component */}
      <ProfileInfo />
      {/*<Tabs projects={data.projects} skills={data.skills} />*/}
      <Footer />
    </div>
  );
}
