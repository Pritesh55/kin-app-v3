import { useRouter } from "next/router";
import Navbar from '../../components/Navbar';
import Head from "next/head";

const PageNo = () => {
    const router = useRouter();
    const pageName = router.query.pageNo;

    return (
        <>

            <Head>
                <title> Blog {pageName} Page </title>
            </Head>


            <Navbar></Navbar>

            <h1 className="text-3xl mx-8 my-4 text-blue-800">
                Example Dynamic Routing ::
                <span className="text-orange-400 ml-8 mr-2">
                    Your blog
                </span>

                <span className="text-orange-900 mr-2">
                    -- {pageName} --
                </span>

                <span className="text-orange-400 mr-2">
                    Page
                </span>
            </h1>
        </>
    )
};

export default PageNo;