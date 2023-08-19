"use client";
import Link  from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
const Nav = () => {
    const path = usePathname();
    return (
    <nav className='w-full bg-gra mb-4 p-2 flex gap-4 justify-center items-center '>
        <div className='mr-auto'>
        <Link href="/" ><Image src="/home-1.png" alt='logo' width={60} height={60} /></Link>
        </div>
        <Link href="/" className={`${path==="/" ? "text-sky-600 font-semibold" : "hover:text-sky-600 font-semibold"}`}>Home</Link>
        <Link href="/about" className={`${path==="/about" ? "text-sky-600 font-semibold" : "hover:text-sky-600 font-semibold"}`} >About</Link>
        <Link href="/forks" className={`${path==="/forks" ? "text-sky-600 font-semibold" : "hover:text-sky-600 font-semibold"}`}>Fork Listing</Link>
        <Link href="/courses" className={`${path==="/courses" ? "text-sky-600 font-semibold" : "hover:text-sky-600 font-semibold"}`}>Courses</Link>
        <Link href="/reduxtoolkit" className={`${path==="/reduxtoolkit" ? "text-sky-600 font-semibold" : "hover:text-sky-600 font-semibold"}`}>Redux Toolkit</Link>

    </nav>);
}
export default Nav;