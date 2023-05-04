"use client";
import React, { useState } from "react";
import { Button, Contact } from "@/components";

const ProfileButtons = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const closeContactHandler = () => {
    setIsContactOpen(!isContactOpen);
  };

  return (
    <>
      <div className="flex gap-4 justify-center m-auto mt-4 w-96">
        <Button type="primary" onClick={() => {}}>
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
