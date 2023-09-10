
import { Link } from "react-router-dom";
import { HiMenuAlt2 } from 'react-icons/hi'
import { useState } from 'react';
const Nav = () => {

    return (
        <nav className='w-full z-10 fixed bg-gr opacity-90 p-3 flex  border-b border-gr2 '>
            <div className='ml-2 mr-4 hover:scale-95 transition duration-300 ease-in-out'>
                <Link to="/" >
                    <img src="/img/home-1.png" alt="DP" className="w-28 h-auto" />
                </Link>
            </div>

            <div className='hidden ml-4  mr-2  overflow-hidden xl:flex xl:gap-6 xl:items-end '>
                <Link to="/" className="hover:text-sk hover:scale-95 border-b border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-semibold" style={{ fontSize: '1.2vw' }}>Home</Link>
                <Link to="/" className="hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out text-white font-semibold " style={{ fontSize: '1.2vw' }}>About Us</Link>
                <Link to="/" className="hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out text-white font-semibold " style={{ fontSize: '1.2vw' }}>Sevices</Link>
                <Link to="/" className=" hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold " style={{ fontSize: '1.2vw' }}>How It Works</Link>
                <Link to="/blog" className=" hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold " style={{ fontSize: '1.2vw' }}>Blog</Link>
                <Link to="/" className=" hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold " style={{ fontSize: '1.2vw' }}>Special Offers</Link>
                <Link to="/" className=" hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold " style={{ fontSize: '1.2vw' }}>Contact Us</Link>
                <Link to="/" className=" hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold " style={{ fontSize: '1.2vw' }}>Performance</Link>
                <Link to="/" className=" hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold " style={{ fontSize: '1.2vw' }}>FAQ</Link>
                <Link to="/" className=" hover:text-sk hover:scale-95 border-b border-gr hover:border-sk transition duration-300 ease-in-out  text-white font-semibold " style={{ fontSize: '1.2vw' }}>Login/Signup</Link>

            </div>

            <div className=' ml-auto flex'>
                <button className=" rounded-lg px-4 py-1 overflow-hidden relative group cursor-pointer border-2 font-semibold text-[15px] border-yellow-400 text-black hover:scale-105 duration-[700ms]">
                    <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-yellow-400 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                    <span className="relative text-yellow-400 transition duration-[700ms] group-hover:text-white ease">INSIG TOKEN</span>
                </button>
                
                <div className=" xl:hidden dropdown dropdown-end">
                <label tabIndex={0} className="btn m-1"><HiMenuAlt2 className=" w-9 h-9 text-gray-200 hover:text-sk cursor-pointer"/></label>
                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-gr2 rounded-box w-64">
                  <li><Link to="/" className="hover:text-sk border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-bold text-lg" >Home</Link></li>
                  <li><Link to="/" className="hover:text-sk border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-bold text-lg" >About Us</Link></li>
                  <li><Link to="/" className="hover:text-sk border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-bold text-lg" >Sevices</Link></li>
                  <li><Link to="/" className="hover:text-sk border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-bold text-lg" >How It Works</Link></li>
                  <li><Link to="/blog" className="hover:text-sk border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-bold text-lg" >Blog</Link></li>
                  <li><Link to="/" className="hover:text-sk border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-bold text-lg" >Special Offers</Link></li>
                  <li><Link to="/" className="hover:text-sk border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-bold text-lg" >Contact Us</Link></li>
                  <li><Link to="/" className="hover:text-sk border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-bold text-lg" >Performance</Link></li>
                  <li><Link to="/" className="hover:text-sk border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-bold text-lg" >FAQ</Link></li>
                  <li><Link to="/" className="hover:text-sk border-gr hover:border-sk  transition duration-300 ease-in-out text-white font-bold text-lg" >Login/Signup</Link></li>

                </ul>
              </div>
                
            </div>
        </nav>);
}
export default Nav;