import React, { FC } from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";

interface ProfileDetailsProps {
  name: string;
}
const ProfileDetails: FC<ProfileDetailsProps> = ({ name }) => {
  return (
    <div className="mt-12 flex flex-col gap-4 items-center">
      <div className="text-3xl md:text-4xl dark:text-gray-ul text-gray-sd">
        {name}
      </div>
      <div className="text-base md:text-xl	dark:text-gray-l text-gray-uld">
        React Developer
      </div>
      <div className="dark:text-gray-l text-gray-uld flex gap-6 text-2xl md:text-3xl cursor-pointer">
        <BsGithub className="hover:text-gray-dl hover:dark:text-gray-sd" />
        <BsLinkedin className="hover:text-gray-dl hover:dark:text-gray-sd" />
        <BsInstagram className="hover:text-gray-dl  hover:dark:text-gray-sd" />
      </div>
    </div>
  );
};

export default ProfileDetails;
