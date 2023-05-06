"use client";
import React, { FC, useState } from "react";
import { Button, Contact } from "@/components";

interface ProfileButtons {
  link: string;
}
const ProfileButtons: FC<ProfileButtons> = ({ link }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const closeContactHandler = () => {
    setIsContactOpen(!isContactOpen);
  };

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="flex gap-4 justify-center m-auto mt-4 w-fit md:w-96">
        <Button type="primary" onClick={handleClick}>
          Download CV
        </Button>
        <Button type="secondary" onClick={closeContactHandler}>
          Contact Me
        </Button>
      </div>
      {isContactOpen && <Contact closeContactHandler={closeContactHandler} />}
    </>
  );
};

export default ProfileButtons;
