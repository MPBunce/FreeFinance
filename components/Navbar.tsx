"use client"

import Link from "next/link";
import { usePathname } from 'next/navigation'
import ModeToggle from "./ModeToggle";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";


export default function Navbar() {

    const pathname = usePathname()

    const checkActivePath = (path: string) => {
      return path === pathname
    }

    const toggleNav = () => {
        const navContent = document.getElementById('nav-content');
        if (navContent) {
            navContent.classList.toggle('hidden');
        }
    };

  return (
    <>
        <nav className="p-24 py-6 backdrop-blur-lg z-40 fixed top-0 w-full flex flex-wrap items-center justify-between px-4 py-6 navbar-expand-lg mb-3 border-b border-border/40">
            <div className="flex items-center flex-shrink-0 lg:ml-24">

                <Link href="/" className="flex flex-row text-center text-primary text-3xl">
                    Free Finance                                 
                </Link>

            </div>

            <div className="lg:mr-24 block lg:hidden flex flex-row gap-4">
                <ModeToggle/>
                <button onClick={toggleNav} id="nav-toggle" className="flex items-center px-3 py-2 border rounded">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>

            <div className="lg:mr-24 w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0" id="nav-content">
                <ul className="list-reset lg:flex justify-end flex-1 items-center">

                    <li className={checkActivePath("/budget") ? "text-primary ml-4 py-4 flex flex-row hover:text-primary" : "ml-4 py-4 flex flex-row hover:text-primary"}>

                        <Link onClick={toggleNav} href="/budget">Budget 101</Link>
                        <ArrowTopRightIcon/>

                    </li>
                    <li className={checkActivePath("/analysis") ? "text-primary ml-4 py-4 flex flex-row hover:text-primary" : "ml-4 py-4 flex flex-row hover:text-primary"}>

                        <Link onClick={toggleNav} href="/analysis" className="">Spending Analysis</Link>
                        <ArrowTopRightIcon/>

                    </li>
                    <li className={checkActivePath("/IntrestCalculator") ? "text-primary ml-4 py-4 flex flex-row hover:text-primary" : "ml-4 py-4 flex flex-row hover:text-primary"}>

                        <Link onClick={toggleNav} href="/IntrestCalculator">Intrest Calculator</Link>
                        <ArrowTopRightIcon/>

                    </li>
                    <li className="ml-4 invisible lg:visible mr-2">

                        <ModeToggle/>

                    </li>

                </ul>
            </div>
        </nav>
    </>
  )
}