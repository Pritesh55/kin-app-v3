import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
    return (
        <>
            <footer class="text-gray-600 body-font bg-gray-50 py-8 mt-8">

                <div class="container mx-auto px-4">
                    <div class="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 justify-around">

                        <div class="px-4 sm:w-1/2 md:w-auto xl:w-auto ">
                            <h5 class="text-xl font-bold mb-6">Features</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Cool stuff</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Random feature</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team feature</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Stuff for developers</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another one</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Last time</a>
                                </li>
                            </ul>
                        </div>

                        <div class="px-4 sm:w-1/2 md:w-auto xl:w-auto mt-8 sm:mt-0">
                            <h5 class="text-xl font-bold mb-6">Resources</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</a>
                                </li>
                            </ul>
                        </div>

                        <div class="px-4 sm:w-1/2 md:w-auto xl:w-auto mt-8 md:mt-0">
                            <h5 class="text-xl font-bold mb-6">About</h5>
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Locations</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Privacy</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Terms</a>
                                </li>
                            </ul>
                        </div>

                        <div class="px-4 sm:w-1/2 md:w-auto xl:w-auto mt-8 md:mt-0">

                            <h5 class="text-xl font-bold mb-6">Help</h5>
                            
                            <ul class="list-none footer-links">
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
                                </li>
                                <li class="mb-2">
                                    <a href="#" class="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contact Us</a>
                                </li>
                            </ul>
                        </div>

                    </div>

                </div>



                <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">Tailblocks</span>
                    </a>
                    <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">© 2020 Tailblocks —
                        <a href="https://twitter.com/knyttneve" class="text-gray-600 ml-1" rel="noopener noreferrer" target="_blank">@knyttneve</a>
                    </p>
                    <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a class="text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                            </svg>
                        </a>
                        <a class="ml-3 text-gray-500">
                            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                <circle cx="4" cy="4" r="2" stroke="none"></circle>
                            </svg>
                        </a>
                    </span>
                </div>
            </footer>
        </>
    );
}

export default Footer;