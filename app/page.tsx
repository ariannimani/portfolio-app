import Image from "next/image";
import { Inter, Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "900",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="text-blue-900 text-3xl font-extrabold dark:text-yellow-300 w-full min-h-screen">
      Hello World!
    </div>
  );
}
