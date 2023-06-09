"use client";

import React, { useEffect, useState } from "react";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const light = theme === "light";

  return (
    <button className="m-auto mt-6 dark:bg-gray-900 dark:text-yellow-400 bg-gray-100 text-gray-900 w-10 h-10 rounded-full flex justify-center items-center mb-8">
      {light ? (
        <BsMoonStarsFill onClick={() => setTheme("dark")} size={27} />
      ) : (
        <BsFillSunFill onClick={() => setTheme("light")} size={27} />
      )}
    </button>
  );
};

export default ThemeChanger;
