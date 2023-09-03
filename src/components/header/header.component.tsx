import { type ReactElement, useContext } from "react";

import Image from "next/image";

import { GitHub, IonLogo, CircularArrow } from "~/assets";

import { LanguageContext } from "~/context/context";

import { rubik700, rubik800, spaceMono400 } from "~/styles/fonts";

export const Header = () => {
  const { language, setLanguage } = useContext(LanguageContext);

  const handleGitHubClick = () => {
    window.location.href = "https://github.com/nathanmintegui";
  };

  const handleLinkedinClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/nathan-mintegui-berger-171569278/";
  };

  const languageHandler = (language: string) => {
    return (
      <div
        className={`${spaceMono400.className} absolute right-0 flex items-center gap-1 pr-20`}
      >
        <p>{language}</p>
        <Image
          src={CircularArrow}
          alt="circular arrow"
          width={20}
          height={20}
          onClick={handleLanguageExchangeHandler}
        />
        <p>{language === "English" ? "Português" : "English"}</p>
      </div>
    );
  };

  const handleLanguageExchangeHandler = (): void => {
    setLanguage(language === "English" ? "Portugues" : "English");
  };

  const ROLE_NAME = {
    English: "Junior FullStack Developer",
    Portugues: "Desenvolvedor FullStack Júnior",
  };

  const renderRoleName = (language: string): ReactElement => {
    return (
      <p className={`${spaceMono400.className} w-4/6 text-center text-base`}>
        {ROLE_NAME[language]}
      </p>
    );
  };

  return (
    <>
      <div>
        <div className="thin-line-bottom relative flex items-center justify-center py-5">
          <Image src={IonLogo} alt="ion logo" />
          {languageHandler(language)}
        </div>
      </div>
      <div className="mb-24 mt-24 flex flex-col items-center">
        <div className={`${rubik700.className} text-6xl`}>NATHAN BERGER</div>
        <div className="mb-5 mt-5 flex justify-center">
          <Image
            src={GitHub}
            alt="GitHub logo"
            className="mr-10 cursor-pointer duration-300 ease-in hover:scale-125"
            onClick={handleGitHubClick}
          />
          <div
            onClick={handleLinkedinClick}
            className={`${rubik800.className} cursor-pointer duration-300 ease-in hover:scale-125`}
          >
            in
          </div>
        </div>
        {renderRoleName(language)}
      </div>
    </>
  );
};
