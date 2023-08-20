"use client";
import Link  from 'next/link';
import Image from 'next/image';
import {HiMenuAlt2} from 'react-icons/hi'
import { useState } from 'react';
const Nav = () => {
    const [opennav, setopennav] = useState(false)
    const openfun = ()=>{ setopennav(!opennav)}

    return (
    <nav className='w-full fixed bg-gr opacity-90 p-3 flex  border-b border-gr2 '>
        <div className='mr-auto  mx-2'>
        <Link href="/" >
        <Image  src="/home-1.png" alt='home' width={115} height={50} />
        </Link>
        </div>
        <div className='hidden ml-2 overflow-hidden lg:flex lg:gap-5 lg:items-end lg:mr-auto'>
            
        <Link href="/" className= "hover:text-sk  text-white font-semibold">Home</Link>
        <Link href="/" className="hover:text-sk  text-white font-semibold">Sevices</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Performance</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Blog</Link>
        <Link href="/" className="hover:text-sk  text-white font-semibold">About Us</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Special Offers</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold"><span>How It Works</span></Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">FAQ</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold"><span>Terms of use and Privacy Policy</span></Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Contact Us</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Login/Signup</Link>
        
        </div>
        <div className='lg:hidden ml-auto'>
        <HiMenuAlt2 className="w-10 h-10 text-gray-200 hover:text-sk cursor-pointer" onClick={openfun} />
        </div>
    </nav>);
}
export default Nav;