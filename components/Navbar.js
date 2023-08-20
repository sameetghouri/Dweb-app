"use client";
import Link  from 'next/link';
import Image from 'next/image';
const Nav = () => {
    return (
    <nav className='w-full bg-gr p-3 flex  border-b border-gr2 '>
        <div className='mr-auto  mx-2'>
        <Link href="/" >
        <Image  src="/home-1.png" alt='home' width={115} height={50} />
        </Link>
        </div>
        <div className='flex gap-5 items-end mr-auto'>
        <Link href="/" className= "hover:text-sk  text-white font-semibold">Home</Link>
        <Link href="/" className="hover:text-sk  text-white font-semibold">Sevices</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Performance</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Blog</Link>
        <Link href="/" className="hover:text-sk  text-white font-semibold">About Us</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Login/Signup</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Special Offers</Link>
        </div>
    </nav>);
}
export default Nav;