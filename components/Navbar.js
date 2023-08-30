"use client";
import Link  from 'next/link';
import Image from 'next/image';
import {HiMenuAlt2} from 'react-icons/hi'
import { useState } from 'react';
const Nav = () => {
    const [opennav, setopennav] = useState(false)
    const openfun = ()=>{ setopennav(!opennav)}

    return (
    <nav className='w-full z-10 fixed bg-gr opacity-90 p-3 flex  border-b border-gr2 '>
        <div className='ml-2 mr-4 hover:scale-95 transition duration-300 ease-in-out'>
        <Link href="/" >
        <Image  src="/home-1.png" alt='home' width={115} height={50} />
        </Link>
        </div>
        
        <div className='hidden ml-4  mr-2  overflow-hidden xl:flex xl:gap-6 xl:items-end '>     
        <Link href="/" className= "hover:text-sk hover:scale-95 border-b border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-semibold" style={{fontSize: '1.2vw'}}>Home</Link>
        <Link href="/" className="hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out text-white font-semibold "style={{fontSize: '1.2vw'}}>About Us</Link>
        <Link href="/" className="hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out text-white font-semibold "style={{fontSize: '1.2vw'}}>Sevices</Link>
        <Link href="/" className= " hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold " style={{fontSize: '1.2vw'}}>How It Works</Link>
        <Link href="/" className= " hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold "style={{fontSize: '1.2vw'}}>Blog</Link>
        <Link href="/" className= " hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold "style={{fontSize: '1.2vw'}}>Special Offers</Link>
        <Link href="/" className= " hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold "style={{fontSize: '1.2vw'}}>Contact Us</Link>
        <Link href="/" className= " hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold "style={{fontSize: '1.2vw'}}>Performance</Link>
        <Link href="/" className= " hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold "style={{fontSize: '1.2vw'}}>FAQ</Link>
        <Link href="/" className= " hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold "style={{fontSize: '1.2vw'}}>Login/Signup</Link>

        </div>
        
        <div className=' ml-auto flex'>
        <button className=" rounded-xl px-4 py-1 overflow-hidden relative group cursor-pointer border-2 font-semibold text-[15px] border-sk text-black hover:scale-105 duration-[900ms]">
              <span className="absolute w-64 h-0 transition-all duration-[800ms] origin-center rotate-45 -translate-x-20 bg-sk top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
              <span className="relative text-sk transition duration-[800ms] group-hover:text-white ease">INSIG TOKEN</span>
            </button>

        <HiMenuAlt2 className="xl:hidden w-10 h-10 ml-3 mr-1 text-gray-200 hover:text-sk cursor-pointer" onClick={openfun} />
        </div>
    </nav>);
}
export default Nav;