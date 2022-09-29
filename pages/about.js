import Navbar from "../components/Navbar";
import Head from "next/head";

const About = () => {
  return (
    <>
      <Head>
        <title> About Page </title>
      </Head>

      <Navbar></Navbar>

      <div className="mx-8">
        <h1 className="text-3xl">
          This is About Page...
        </h1>
      </div>

    </>

  );
};

export default About;