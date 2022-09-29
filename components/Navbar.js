import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <>
            <nav class="flex items-center justify-between flex-wrap bg-gray-50 p-6 mb-10">

                {/* Logo */}

                <Link href="https://images.unsplash.com/photo-1664009369177-072a596d69c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60">
                    
                    <a class="flex items-center flex-shrink-0 text-black mr-6 space-x-5">

                        <Image src="https://images.unsplash.com/photo-1664009369177-072a596d69c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8Ym84alFLVGFFMFl8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                            width='56' height='56' alt='Home' className="rounded-full">

                        </Image>
                    </a>
                </Link>

                <Link href="/">
                    <a className="">
                        <span class="text-2xl  text-red-600  font-medium tracking-wide">
                            React Next js
                        </span>
                    </a>
                </Link>





                {/* Mobile */}
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-red-800 border-teal-400 hover:text-orange-500 hover:border-white">
                        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>


                {/* Menu Items */}
                <div class="text-sm lg:flex-grow flex justify-center space-x-8">

                    <Link href="/">
                        <a class="block mt-4 lg:inline-block lg:mt-0 text-xl text-red-800 font-normal hover:text-orange-500">
                            Home
                        </a>
                    </Link>


                    <Link href="/about">
                        <a class="block mt-4 lg:inline-block lg:mt-0 text-red-800 font-normal  hover:text-orange-500 text-xl mr-4">
                            About
                        </a>
                    </Link>

                    <Link href="/blogs">
                        <a class="block mt-4 lg:inline-block lg:mt-0 text-xl text-red-800 font-normal  hover:text-orange-500">
                            Blog
                        </a>
                    </Link>
                </div>

                {/* Log in */}
                <div>

                    <Link href="/log-in">
                        <a class="inline-block text-xl px-4 py-2 leading-none border rounded text-purple-600 border-white hover:border-transparent hover:text-orange-500 mt-4 lg:mt-0">
                            Log in
                        </a>
                    </Link>
                </div>
            </nav>

        </>
    )
}

export default Navbar