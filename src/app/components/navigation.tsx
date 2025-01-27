'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Logo from "../../../public/Logo.jpg"
import {AiOutlineMenu, AiOutlineClose, AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter} from "react-icons/ai"
import { useState } from "react";

export const Navigation = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="fixed w-full h-24 shadow-xl bg-white">

      <div className="flex justify-between items-center h-full w-full px-4 2xl:px-16">
        <Link href="/">
          <Image
            src={Logo}
            alt="Logo"
            width="200"
            height="200"
            className="cursor-pointer"
            priority
          />
        </Link>
        <div className="hidden sm:flex">
          <ul className="hidden sm:flex">
            <Link href="/listings">
              <li className="ml-10 hover:border-b text-xl">Listings</li>
            </Link>
            <Link href="/placead">
              <li className="ml-10 hover:border-b text-xl">Place Your Ad</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 hover:border-b text-xl">About</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      
      <div className={
        menuOpen 
        ? "fixed left-0 top-0 w-[55%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration-500" 
        : "fixed left-[-100%] top-0 p-10 ease-in duration-700"
      }>
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cusror-pointer">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <div className="flex-col py-4">
          <ul>
            <Link href="/">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                Home
              </li>      
            </Link>
            <Link href="/listings">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                Listings
              </li>      
            </Link>
            <Link href="/placead">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                Place Your Ad
              </li>      
            </Link>
            <Link href="/about">
              <li onClick={() => setMenuOpen(false)} className="py-4 cursor-pointer">
                About Us
              </li>      
            </Link>
          </ul>
        </div>

        <div className="flex flex-row justify-around pt-10 items-center">
          <AiOutlineInstagram size={30} className="cursor-pointer" />
          <AiOutlineFacebook size={30} className="cursor-pointer" />
          <AiOutlineTwitter size={30} className="cursor-pointer" />
        </div>
      </div>
    </nav>
  )
}