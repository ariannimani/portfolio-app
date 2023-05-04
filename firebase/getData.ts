import { collection, getDocs } from "firebase/firestore";
import { db } from "./config";

const dataCollectionRef = collection(db, "portfolio");

export const getDataFromFirebase = async () => {
  const portfolio = await getDocs(dataCollectionRef);
  const data = portfolio.docs.map((doc) => doc.data());
  return data;
};
