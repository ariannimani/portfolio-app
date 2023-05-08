import Image from "next/image";
import React from "react";
import { getDataFromFirebase } from "~/firebase/getData";

const ProfileImage = async () => {
  const data = await getDataFromFirebase();
  console.log({ data });
  const { image } = data;

  return (
    <div className="p-2 w-36 h-36 rounded-full ring-8 ring-yellow-d dark:ring-yellow-c dark:bg-gray-d bg-gray-sl m-auto">
      <Image
        src={image}
        alt=""
        className="object-cover w-full h-32 rounded-full"
        width={500}
        height={500}
      />
    </div>
  );
};

export default ProfileImage;
