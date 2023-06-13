import Image from "next/image";

import { GitHub } from "~/assets";

import { rubik800, spaceMono400 } from "~/styles/fonts";

export const Footer = () => {
  return (
    <div className="thin-line-top my-5 flex justify-between pt-2">
      <p className={`${spaceMono400.className} text-gray-500`}>
        2023 - Lorem ipsum
      </p>
      <div className="flex">
        <Image src={GitHub} alt="GitHub Logo" />
        <p className={`${rubik800.className} pl-10`}>in</p>
      </div>
    </div>
  );
};
