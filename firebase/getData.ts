import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";
import { PortfolioDataProps } from "@/types/dataTypes";

const dataCollectionRef = collection(db, "portfolio");

export const getDataFromFirebase = async () => {
  const portfolio = await getDocs(dataCollectionRef);
  const data = portfolio.docs.map((doc) => doc.data());
  const portfolioData = data[0] as PortfolioDataProps;
  return portfolioData;
};
