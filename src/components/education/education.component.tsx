import { rubik700, spaceMono400, spaceMono700 } from "~/styles/fonts";

import { educationData } from "../../constants/index";

interface IProps {
  date: string;
  name: string;
  description: string;
}

interface IData {
  data: IProps;
}

export const Education = () => {
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

  return (
    <div className="section-shadow items-start gap-2.5 px-16 py-8">
      <h1 className={`${rubik700.className} text-4xl`}>EDUCATION</h1>
      {educationData.map((item, index) => (
        <Course key={index} data={item} />
      ))}
    </div>
  );
};
