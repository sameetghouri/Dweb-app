"use client";
import Link  from 'next/link';
import Image from 'next/image';
const Nav = () => {
    return (
    <nav className='w-full bg-gr p-3 flex gap-5 justify-center items-center '>
        
        <Link className='ml-2 mr-auto' href="/" >
            <Image  src="/home-1.png" alt='home' width={40} height={40} />
        </Link>
        <Link href="/" className= "hover:text-sk  text-white font-semibold">Home</Link>
        <Link href="/" className="hover:text-sk  text-white font-semibold">Sevices</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Performance</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Blog</Link>
        <Link href="/" className="hover:text-sk  text-white font-semibold">About Us</Link>
        <Link href="/" className= " hover:text-sk   text-white font-semibold">Login/Signup</Link>
        <Link href="/" className= "mr-auto hover:text-sk   text-white font-semibold">Special Offers</Link>

    </nav>);
}
export default Nav;