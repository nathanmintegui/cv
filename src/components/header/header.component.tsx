import Image from "next/image";

import { GitHub, IonLogo } from "~/assets";

import { rubik700, spaceMono400 } from "~/styles/fonts";

export const Header = () => {
  const handleClick = () => {
    window.location.href = "https://github.com/nathanmintegui";
  };

  return (
    <>
      <div className="thin-line-bottom flex items-center justify-center py-5">
        <Image src={IonLogo} alt="ion logo" />
      </div>
      <div className="mb-24 mt-24 flex flex-col items-center">
        <div className={`${rubik700.className} text-6xl`}>NATHAN BERGER</div>
        <div className="mb-5 mt-5 flex justify-center">
          <Image
            src={GitHub}
            alt="GitHub logo"
            className="mr-10"
            onClick={handleClick}
          />
          <div>in</div>
        </div>
        <p className={`${spaceMono400.className} w-4/6 text-center text-base`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor amet.
        </p>
      </div>
    </>
  );
};
