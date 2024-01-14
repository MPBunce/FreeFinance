'use client';

import React from "react"
import Link from 'next/link'
import ModeToggle from './ModeToggle'


export default function Navbar() {

    const toggleNav = () => {
        const navContent = document.getElementById('nav-content');
        if (navContent) {
            navContent.classList.toggle('hidden');
        }
    };

    return (
        <>

            <div className="bg-background font-sans leading-normal tracking-normal">
                <nav className="flex items-center justify-between flex-wrap bg-neutral-800 fixed w-full z-10 hrefp-0">
                    
                    <div className="block lg:hidden">
                        <button onClick={toggleNav} id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                        </button>
                    </div>                        

                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
                            <span className="text-2xl pl-2 flex flex-row">

                                <a className="inline-block ">
                                    <Link href="/" className="decoration-white text-white flex flex-row text-center">
                                        NFL Pickems                                 
                                    </Link>
                                </a>


                            </span>
                        </a>
                    </div>


                    <div className="w-full flex-grow lg:flex lg:items-center lg:w-auhref hidden lg:block pt-6 lg:pt-0" id="nav-content">
                        <ul className="list-reset lg:flex justify-end flex-1 items-center">
                            <li className="mr-3" >
                                <a className="inline-block py-2 px-4">
                                    <Link href="/spending" className="text-white">Spending Analysis</Link>
                                </a>
                            </li>
                            <li className="mr-3">
                                <a className="inline-block py-2 px-4">
                                    <Link href="/budget" className="text-white">Budget 101</Link>
                                </a>
                            </li>
                            <li className="mr-3" >
                                <a className="inline-block py-2 px-4">
                                    <ModeToggle/>
                                </a>
                            </li>
                        </ul>
                    </div>

                </nav>
            </div>
        </>

    )
}
