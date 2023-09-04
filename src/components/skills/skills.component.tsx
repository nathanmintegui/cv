import { useContext } from "react";

import { LANGUAGES, LanguageContext } from "~/context/languageContext";

import { rubik700, spaceMono700 } from "~/styles/fonts";

import Image from "next/image";

import { skillData } from "~/constants";

import type { StaticImageData } from "next/image";

interface IProps {
  icon: StaticImageData;
  name: string;
}

interface IData {
  data: IProps;
}

const Skill: React.FC<IData> = ({ data }: IData) => {
  return (
    <div className="flex flex-col gap-4 p-16">
      <Image src={data.icon} alt="" className="" />
      <h1 className={`${spaceMono700.className} text-center text-base`}>
        {data.name}
      </h1>
    </div>
  );
};

export const Skills = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className={`section-shadow flex flex-col px-28 py-12`}>
      <h1 className={`${rubik700.className} text-center text-4xl`}>
        {language === LANGUAGES.ENGLISH ? "SKILLS" : "HABILIDADES"}
      </h1>
      <div className="flex flex-wrap justify-center">
        {skillData.map((skill, index) => (
          <Skill key={index} data={skill} />
        ))}
      </div>
    </div>
  );
};
