import Image from "next/image";

import { GitHub } from "~/assets";

import { rubik800, spaceMono400 } from "~/styles/fonts";

export const Footer = () => {
  const handleGitHubClick = () => {
    window.location.href = "https://github.com/nathanmintegui";
  };

  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/nathan-mintegui-berger-171569278/";
  };

  return (
    <div className="thin-line-top my-5 flex justify-between pt-2">
      <p className={`${spaceMono400.className} text-gray-500`}>
        2023 - Nathan Berger
      </p>
      <div className="flex">
        <Image
          src={GitHub}
          alt="GitHub Logo"
          onClick={handleGitHubClick}
          className="cursor-pointer duration-300 ease-in hover:scale-125"
        />
        <p
          className={`${rubik800.className} cursor-pointer pl-10 duration-300 ease-in hover:scale-125`}
          onClick={handleLinkedinClick}
        >
          in
        </p>
      </div>
    </div>
  );
};
