import { useContext } from "react";

import { rubik700, spaceMono400, spaceMono700 } from "~/styles/fonts";

import { educationData } from "../../constants/index";

import type { ItemType } from "../../constants/index";

import { LANGUAGES, LanguageContext } from "~/context/languageContext";

interface IProps {
  date: string;
  name: string;
  description: string;
}

interface IData {
  data: IProps;
}

const Course: React.FC<IData> = ({ data }: IData) => {
  return (
    <div className="mt-5 flex max-w-sm flex-col gap-4">
      <p className={`${spaceMono700.className} text-base`}>{data.date}</p>
      <p className={`${spaceMono400.className} text-base`}>{data.name}</p>
      <p className={`${spaceMono400.className} text-gray-400`}>
        {data.description}
      </p>
    </div>
  );
};

export const Education = () => {
  const { language } = useContext(LanguageContext);

  return (
    <div className="section-shadow items-start gap-2.5 px-16 py-8">
      <h1 className={`${rubik700.className} text-4xl`}>
        {language === LANGUAGES.ENGLISH ? "EDUCATION" : "FORMAÇÃO"}
      </h1>
      {educationData[language]?.map((item: ItemType, index: number) => (
        <Course key={index} data={item} />
      ))}
    </div>
  );
};
