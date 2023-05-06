import React from "react";
import { SocialCard } from "@/components/cards";
import { SocialProps } from "@/types/dataTypes";
import { getDataFromFirebase } from "~/firebase/getData";

const ProfileDetails = async () => {
  const data = await getDataFromFirebase();

  if (!data) <></>;
  const { name, profession, social } = data;

  return (
    <div className="mt-12 flex flex-col gap-4 items-center">
      <div className="text-3xl md:text-4xl dark:text-gray-ul text-gray-sd">
        {name}
      </div>
      <div className="text-base md:text-xl	dark:text-gray-l text-gray-uld">
        {profession}
      </div>
      <div className="dark:text-gray-l text-gray-uld flex gap-6 text-2xl md:text-3xl cursor-pointer">
        {social.map((item: SocialProps) => (
          <SocialCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProfileDetails;
