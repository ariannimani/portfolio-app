import Image from "next/image";
import React from "react";
import profile from "@/assets/images/profilePicture.jpg";

const ProfileImage = () => {
  return (
    <div className="p-2 w-36 h-36 rounded-full ring-8 ring-yellow-d dark:ring-yellow-c dark:bg-gray-d bg-gray-sl m-auto">
      <Image src={profile} alt="" className="w-32 h-32 rounded-full" />
    </div>
  );
};

export default ProfileImage;
