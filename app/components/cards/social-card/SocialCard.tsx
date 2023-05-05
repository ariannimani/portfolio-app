import { SocialProps } from "@/types/dataTypes";
import React, { FC } from "react";
import { BsGithub, BsLinkedin, BsInstagram } from "react-icons/bs";
import { IconType } from "react-icons/lib";

interface SocialCardProps {
  item: SocialProps;
}
interface SocialMediaIcons {
  [name: string]: IconType;
}

const SOCIAL_MEDIA_ICONS: SocialMediaIcons = {
  github: BsGithub,
  linkedin: BsLinkedin,
  instagram: BsInstagram,
};

const SocialCard: FC<SocialCardProps> = ({ item }) => {
  const { name, link } = item;
  const Icon = SOCIAL_MEDIA_ICONS[name.toLowerCase()];

  if (!Icon) {
    return <></>;
  }

  return (
    <a href={link}>
      <Icon className="hover:text-gray-dl hover:dark:text-gray-sd" />
    </a>
  );
};

export default SocialCard;
