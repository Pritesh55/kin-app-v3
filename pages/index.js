
import Head from "next/head";
import Navbar from "../components/Navbar";

const Index = () => {


  return (
    <>
      <Head>
        <title> Home Page </title>
      </Head>

      <Navbar></Navbar>

      <div className="mx-8">
        <h1 className="text-3xl">
          This is Home Page...
        </h1>
      </div>

    </>
  );
};
export default Index;
