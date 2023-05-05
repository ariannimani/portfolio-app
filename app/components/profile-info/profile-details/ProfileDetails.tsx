import { SocialCard } from "@/components/cards";
import { store } from "../../../redux/store";
import React from "react";
import { SocialProps } from "@/types/dataTypes";

const ProfileDetails = () => {
  const { name, profession, social } = store.getState().data.data[0];
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
