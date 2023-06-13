import { type NextPage } from "next";

import Image from "next/image";

import { rubik700, rubik800, spaceMono400 } from "~/styles/fonts";

import gitHubIcon from "../assets/github-icon.png";

import {
  Contact,
  Container,
  Education,
  Experience,
  Skills,
} from "~/components";

const Home: NextPage = () => {
  const handleClick = () => {
    window.location.href = "https://github.com/nathanmintegui";
  };

  const Header = () => {
    return (
      <div className="mb-24 mt-24 flex flex-col items-center">
        <div className={`${rubik700.className} text-6xl`}>NATHAN BERGER</div>
        <div className="mb-5 mt-5 flex justify-center">
          <Image
            src={gitHubIcon}
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
    );
  };

  const Footer = () => {
    return (
      <div className="thin-line my-5 flex justify-between pt-2">
        <p className={`${spaceMono400.className} text-gray-500`}>
          2023 - Lorem ipsum
        </p>
        <div className="flex">
          <Image src={gitHubIcon} alt="GitHub Logo" />
          <p className={`${rubik800.className} pl-10`}>in</p>
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center" id="__next">
      <Container>
        {<Header />}

        <section className="flex justify-between">
          {<Education />} {<Experience />}
        </section>

        <section className="mt-24">{<Skills />}</section>

        <section className="mt-24 flex justify-center">{<Contact />}</section>

        {<Footer />}
      </Container>
    </div>
  );
};

export default Home;
