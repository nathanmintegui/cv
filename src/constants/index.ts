import {
  CSharp,
  Css,
  Docker,
  Git,
  Html,
  Java,
  Javascript,
  Postgres,
  React,
  Spring,
} from "~/assets";

export type ItemType = {
  date: string;
  name: string;
  description: string;
};

type CardsDataType = Record<string, ItemType[]>;

export const educationData: CardsDataType = {
  English: [
    {
      date: "2022 - 2023",
      name: "Internet Computing",
      description:
        "Studying topics as mobal development. web develpoment, analysis and quality control.",
    },
  ],
  Portugues: [
    {
      date: "2022 - 2023",
      name: "Informática",
      description:
        "Estudando tópicos como desenvolvimento móvel, desenvolvimento web, análise e controle de qualidade.",
    },
  ],
};

export const experienceData: CardsDataType = {
  English: [
    {
      date: "jan 2023 - jun 2023",
      name: "CWI Software - Intern",
      description:
        "Developed Web Applicatons and REST Apis with Docker and Azure deployment using frameworks like React, Java Spring Boot and Dotnet",
    },
  ],
  Portugues: [
    {
      date: "jan 2023 - jun 2023",
      name: "CWI Software - Estágio",
      description:
        "Desenvolvi Aplicações Web e APIs REST com implantação no Docker e Azure, utilizando frameworks como React, Java Spring Boot e Dotnet.",
    },
  ],
};

export const skillData = [
  {
    icon: Html,
    name: "Html",
  },
  {
    icon: Css,
    name: "Css",
  },
  {
    icon: Javascript,
    name: "Javascript",
  },
  {
    icon: React,
    name: "ReactJS",
  },
  {
    icon: CSharp,
    name: "C#",
  },
  {
    icon: Git,
    name: "Git/Github",
  },
  {
    icon: Docker,
    name: "Docker",
  },
  {
    icon: Postgres,
    name: "PostgresSQL",
  },
  {
    icon: Java,
    name: "Java",
  },
  {
    icon: Spring,
    name: "Spring Boot",
  },
];
