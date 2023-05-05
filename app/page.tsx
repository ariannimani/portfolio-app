import { Footer, ProfileInfo, Tabs } from "./components";
import { getDataFromFirebase } from "../firebase/getData";
import { store } from "./redux/store";
import { setPortfolioData } from "@/redux/portfolioSlice";
import { DocumentData } from "firebase/firestore";

type ProjectSkillsProps = DocumentData;

export default async function Home() {
  const data = await getDataFromFirebase();

  if (!data) return <></>;
  store.dispatch(setPortfolioData(data));
  const { projects, skills }: ProjectSkillsProps =
    store.getState().data.data[0];

  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-8">
      <ProfileInfo />
      <Tabs projects={projects} skills={skills} />
      <Footer />
    </div>
  );
}
