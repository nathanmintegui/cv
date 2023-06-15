import { type NextPage } from "next";

import { ToastContainer } from "react-toastify";

import {
  Contact,
  Container,
  Education,
  Experience,
  Skills,
  Header,
  Footer,
} from "~/components";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center" id="__next">
      <Container>
        {<Header />}

        <section className="flex justify-between">
          {<Education />} {<Experience />}
        </section>

        <section className="mt-24">{<Skills />}</section>

        <ToastContainer />
        <section className="mt-24 flex justify-center">{<Contact />}</section>

        {<Footer />}
      </Container>
    </div>
  );
};

export default Home;
