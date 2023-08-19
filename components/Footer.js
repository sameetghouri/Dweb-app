import Link  from 'next/link';

const Footer = () => {
    return ( 
    <div className="bg-gr2 w-full text-gray-100 flex flex-col py-4">
        <div>

        </div>
        <div className="flex gap-6 justify-center items-center ">
        <Link href="/" className= " hover:text-gre   text-white font-semibold">How It Works</Link>
        <Link href="/" className= " hover:text-gre   text-white font-semibold">Terms of use and Privacy Policy</Link>
        <Link href="/" className= " hover:text-gre   text-white font-semibold">Contact Us</Link>
        <Link href="/" className= " hover:text-gre   text-white font-semibold">FAQ</Link>

        </div>
    </div> );
}
 
export default Footer;