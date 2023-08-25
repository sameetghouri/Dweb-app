import Link  from 'next/link';
import Image  from 'next/image';
import {SiMinutemailer} from 'react-icons/si';
import {FiMail} from 'react-icons/fi';
import {BiUser} from 'react-icons/bi';
import {MdSubject} from 'react-icons/md';
import {AiOutlineMessage} from 'react-icons/ai';

const Footer = () => {
    return ( 
    <footer className="bg-black pt-6 w-full flex flex-col items-center">
        <div className='bg-black px-4 w-full max-w-5xl flex flex-col items-center'>
        <div className='py-10 border-b  flex justify-center lg:justify-end w-full border-gr1'>
            <div className='mr-auto pr-4 flex flex-col gap-4'>
            <h2 className='text-gray-300 text-[35px] font-semibold '>Get Ecosystem updates in your inbox</h2>
            <h3 className='text-gray-300 text-3xl font-semibold'>Quick Support</h3>
            <p className='text-gray-400 text-lg'>We're here for you, waiting to answer your queries, our team is happy to help you.</p>
            <div className='flex gap-2'>
                
                <Link href="/" className= "hover:text-green-400 flex transition duration-200 ease-in text-white ">
                <SiMinutemailer className='w-6 h-6 mr-2  text-green-400'/>
                intellsignals.entertainment@gmail.com</Link>
            </div>
            </div>
            <form className='flex bg-gr2 flex-col hover:scale-105 transition duration-300 rounded-xl w-1/2 gap-6 py-3 px-4'>
                <h2 className=' text-gray-300 text-2xl font-semibold '>Lets Get in touch with us</h2>
                <div className='flex flex-col gap-y-5'>
                <div className='flex relative items-center '>
                <BiUser className='absolute left-1 w-9 h-9 p-1 text-gray-600' />
                <input className='pl-12 rounded bg-gray-200 shadow-lg w-full  p-2 placeholder:text-gr1 ' type='text' placeholder='Full name'/>
                </div>
                <div className='flex relative items-center '>
                <FiMail className=' absolute left-1 w-9 h-9 mr-2 text-gray-600'/>
                <input className='pl-12 w-full rounded bg-gray-200 shadow-lg   p-2 placeholder:text-gr1 ' type='email' placeholder='Email Address'/>
                </div>
                <div className='flex relative items-center'>
                <MdSubject className='absolute left-1 w-9 h-9 mr-2 text-gray-600'/>    
                <input className='pl-12 w-full rounded bg-gray-200 shadow-lg  p-2 placeholder:text-gr1 ' type='text' placeholder='Enter Your Subject'/>
                </div>
                <div className='flex relative items-center'>
                <AiOutlineMessage className='absolute left-1 top-2 w-9 h-9 mr-2 text-gray-600'/>
                <textarea className='pl-12 w-full p-4 rounded bg-gray-200  shadow-lg   placeholder:text-gr1 ' placeholder='Message'></textarea>
                </div>
                <button type='submit' className='text-white px-4 py-2 rounded-lg bg-sk hover:bg-sk1 transition duration-200'>Send Message</button>
                </div>
            </form>
            
        </div>
       
        
        <div className='py-10 px-2 w-full  border-b border-gr1 grid lg:grid-cols-4 grid-cols-2 gap-4 text-white'>
        <div className='col-span-1 flex flex-col gap-3'>
            <h2 className='font-bold text-lg'>Learn</h2>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Home</Link>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">About Us</Link>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Sevices</Link>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">How It Works</Link>
        

        </div>
        <div className='  col-span-1 flex flex-col gap-3'>
        <h2 className='  font-bold text-lg'>Quick Links</h2>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Performance</Link>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Blog</Link>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Terms & Privacy Policy</Link>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Special Offers</Link>

        </div>
        <div className='  col-span-1 flex flex-col gap-3'>
        <h2 className=' font-bold text-lg '>Get In Touch</h2>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Contact Us</Link>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">FAQ</Link>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Login/Signup</Link>

        </div>
        
        
        <div className='col-span-1 flex flex-col gap-3'>
        <h2 className='font-bold text-lg'>Social Links</h2>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Facebook</Link>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Instagram</Link>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Twitter</Link>
        <Link href="/" className= "hover:text-white text-lg  text-gr1 ">Linkedin</Link>

        </div>
        </div>
        <div className='py-10 pl-2 w-full text-white flex items-center'>
        <Image  src="/home-1.png" alt='home' width={130} height={65} />
        <button type='submit' className='text-white ml-auto mr-28 px-3 py-2 rounded-lg bg-sk hover:bg-sk1 transition duration-200'>Subscribe Now</button>



        </div>
        </div>
        <div className="flex flex-col items-center w-full  pt-8  pb-3 bg-gr2 gap-y-4 ">
          <div className='flex items-center gap-4'>
            <div className='bg-white p-2 rounded-full hover:scale-105 transition duration-100'>
            <Image  src="/wa.png" alt='home' width={24} height={24} />
            </div>
            <div className='bg-white p-2 rounded-full hover:scale-105 transition duration-100'>
            <Image  src="/li.png" alt='home' width={24} height={24} />
            </div>
            <div className='bg-white p-2 rounded-full hover:scale-105 transition duration-100'>
            <Image  src="/gm.png" alt='home' width={24} height={24} />
            </div>
            <div className='bg-white p-2 rounded-full hover:scale-105 transition duration-100'>
            <Image  src="/tp.png" alt='home' width={24} height={24} />
            </div>
          </div>
        <div><p className='text-white'>@copyright2023 IntellSignals.com</p></div>
        </div>
    </footer> 
    );
}
 
export default Footer;