import Head from "next/head";
import BlogDetail from "../../components/Blogs/BlogDetail";
import Footer from "../../components/Footer";
import Navbar from '../../components/Navbar';


const Index = () => {
    return (
        <>
            <Head>
                <title> Blogs Page </title>
            </Head>

            <div className="mx-8">
                <h1 className="text-3xl">
                    This is Blogs Page...
                </h1>
            </div>

            <BlogDetail></BlogDetail>



        </>
    )
};

export default Index;