import Link  from 'next/link';
import Image  from 'next/image';

const Footer = () => {
    return ( 
    <footer className="bg-black   pt-6 w-full flex flex-col items-center">
        <div className='bg-black w-full max-w-5xl flex flex-col items-center'>
        <div className='py-10 border-b flex justify-center lg:justify-end w-full border-gr1'>
            <h2 className='text-gray-200 text-2xl font-semibold mr-auto'>Get Ecosystem updates in your inbox</h2>
            <form className='flex flex-col w-1/2 gap-6'>
                <h2 className=' text-gr3 text-2xl font-semibold '>Lets Get in touch with us</h2>
                <div className='flex flex-col gap-y-5'>
                <input className=' rounded bg-gray-400  p-2 placeholder:text-gr' type='email' placeholder='Full name'/>
                <input className=' rounded bg-gray-400  p-2 placeholder:text-gr' type='email' placeholder='Email Address'/>
                <textarea className='p-4 rounded bg-gray-400 placeholder:text-gr' placeholder='Message'></textarea>
                <button type='submit' className='text-white w-1/2 px-4 py-2 rounded-lg bg-sk hover:bg-sk1 transition duration-200'>Send Message</button>
                </div>
            </form>
            
        </div>
       
        
        <div className='py-10 w-full  border-b border-gr1 grid lg:grid-cols-4 grid-cols-2 gap-4 text-white'>
        <div className='col-span-1 flex flex-col gap-3'>
            <h2 className='font-semibold '>Learn</h2>
        <Link href="/" className= "hover:text-white  text-gr1 ">Home</Link>
        <Link href="/" className= "hover:text-white  text-gr1 ">About Us</Link>
        <Link href="/" className= "hover:text-white  text-gr1 ">Sevices</Link>
        <Link href="/" className= "hover:text-white  text-gr1 ">How It Works</Link>
        

        </div>
        <div className='  col-span-1 flex flex-col gap-3'>
        <h2 className='  font-semibold '>Quick Links</h2>
        <Link href="/" className= "hover:text-white  text-gr1 ">Performance</Link>
        <Link href="/" className= "hover:text-white  text-gr1 ">Blog</Link>
        <Link href="/" className= "hover:text-white  text-gr1 ">Privacy Policy</Link>
        <Link href="/" className= "hover:text-white  text-gr1 ">Special Offers</Link>

        </div>
        <div className='  col-span-1 flex flex-col gap-3'>
        <h2 className=' font-semibold  '>Get In Touch</h2>
        <Link href="/" className= "hover:text-white  text-gr1 ">Contact Us</Link>
        <Link href="/" className= "hover:text-white  text-gr1 ">FAQ</Link>
        <Link href="/" className= "hover:text-white  text-gr1 ">Login/Signup</Link>

        </div>
        
        
        <div className='col-span-1 flex flex-col gap-3'>
        <h2 className='font-semibold'>Social Links</h2>
        <Link href="/" className= "hover:text-white  text-gr1 ">Facebook</Link>
        <Link href="/" className= "hover:text-white  text-gr1 ">Instagram</Link>
        <Link href="/" className= "hover:text-white  text-gr1 ">Twitter</Link>
        <Link href="/" className= "hover:text-white  text-gr1 ">Linkedin</Link>

        </div>
        </div>
        <div className='py-10 w-full text-white flex items-center'>
        <Image  src="/home-1.png" alt='home' width={130} height={65} />
        <button type='submit' className='text-white ml-auto mr-28 px-3 py-2 rounded-lg bg-sk hover:bg-sk2 transition duration-200'>Subscribe Now</button>



        </div>
        </div>
        <div className="flex w-full flex-col py-8 bg-gr2 lg:flex-row gap-5 justify-center items-center ">
        <Link href="/" className= " hover:text-gre   text-white font-semibold">Terms of use </Link>
        <Link href="/" className= " hover:text-gre   text-white font-semibold"> Privacy Policy</Link>

        </div>
    </footer> 
    );
}
 
export default Footer;