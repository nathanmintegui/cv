import { type NextPage } from "next";

import Image from "next/image";

import gitHubIcon from "../assets/github-icon.png";

import { Contact, Education, Experience, Skills } from "~/components";

const Home: NextPage = () => {
  return (
    <div>
      <header>
        <div>NATHAN MINTEGUI BERGER</div>
        <div className="flex">
          <Image src={gitHubIcon} alt="" />
          <div>in</div>
        </div>
      </header>

      <section>
        {<Education />} {<Experience />}
      </section>

      <section>{<Skills />}</section>

      <section>{<Contact />}</section>

      <footer>
        <p>2023 - Lorem ipsum</p>
        <div>
          <Image src="" alt="" />
          <p>in</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
