import React from 'react'
import Link from 'next/link'
import Head from 'next/head'

const ErrorPage = () => {
    return (
        <>
            <Head>
                <title> 404 Error Page </title>
            </Head>


            {/* 404 page  */}
            <div class="flex items-center justify-center  w-full h-screen">
                <div class="px-4">
                    <div class="lg:gap-4 lg:flex">
                        <div
                            class="flex flex-col items-center justify-center">
                            <h1 class="font-bold text-blue-600 text-9xl mb-4">
                                404
                            </h1>

                            <p
                                class="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
                                <span class="text-red-500">
                                    Oops!</span> Page not found
                            </p>

                            <p class="mb-8 text-center text-gray-500 md:text-lg">
                                The page you’re looking for doesn’t exist.
                            </p>

                            <Link href="/">
                                <button class="px-6 py-2 text-sm font-semibold text-blue-800 bg-blue-100">
                                    Go home
                                </button>
                            </Link>


                        </div>

                        <div class="mt-4">

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ErrorPage