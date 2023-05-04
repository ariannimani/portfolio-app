import React from "react";

const Footer = () => {
  return (
    <div className="text-gray-l text-base	md:text-xl	mt-16 mb-8 px-8 text-center">
      © Arian Nimani. {new Date().getFullYear()} All rights reserved. Made with
      Next.js and Tailwind CSS
    </div>
  );
};

export default Footer;
