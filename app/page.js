import Image from 'next/image'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <div className='flex flex-col items-center mt-20 lg:flex-row  w-full   min-h-screen'>
        <div className=' w-3/4 lg:w-1/2  lg:pl-32 lg:pr-6 bg-gr flex flex-col gap-4 justify-center' >
          <div className='bg-gradient-to-r from-purple-700 to-pink-500 text-gray-100 py-1 pl-4  lg:w-full w-11/12 rounded-lg flex items-center hover:opacity-90'>
            <h1> Artificial Intelligence drive token  used to access AI technology </h1>
            <MdArrowOutward className="w-8 h-8 cursor-pointer ml-auto" />
          </div>
          <h1 className='text-white text-6xl font-semibold'>INSIGNAL TOKEN.</h1>
          <p className='text-3xl font-semibold text-gr3 '>Start Trading Now</p>
          <p className='text-xl text-gray-300'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <button className='mt-2 px-4 py-2 mr-auto font-semibold bg-sk text-white rounded hover:translate-y-1 hover:bg-sk1 transition duration-300 ease-in-out '>Start Now</button>
        </div>
        <div className='w-3/4 lg:w-1/2 pt-8 pr-2 '>
          <Image src="/base.png" alt='a' width={900} height={900} />
        </div>
      </div>
      <div className='bg-[#151515] w-full flex justify-center'>
        <div className='py-10 px-4  w-full max-w-6xl flex flex-col lg:flex-row lg:items-start lg:justify-center items-center gap-x-12 gap-y-7'>
          <div className=''>
            <h3 className='text-gr3 text-xl'>NETWORK AT A GLANCE</h3>
          </div>
          <div className=' flex flex-col items-center'>
            <h3 className='text-gr3 text-xl'>TOTAL HOTSPOTS</h3>
            <h4 className='text-gray-100 text-3xl font-semibold'>949,377</h4>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-gr3 text-xl'>CIRCULATING HNT SUPPLY</h3>
            <h4 className='text-gray-100 text-3xl font-semibold'>154,294,919</h4>
          </div>
          <div className='py-3'>
            <Link className='px-4 py-3 ml-auto font-semibold bg-sk text-white rounded  hover:bg-sk1 transition duration-300 ease-in-out' href='/'>View Network Coverage</Link>
          </div>

        </div>
      </div>
      <div className='flex flex-col items-center  bg-[url(/banner-1.jpg)] bg-cover rounded w-full min-h-screen'>
        <h1 className='font-semibold leading-snug text-center text-[44px] text-gray-100 w-8/12 pt-10'>Intelligent Signals Token (INSIG) is the driving force behind an Artificial Intelligence (AI) based Visual Signaling (VST) system.</h1>
        <Image className='pt-4' src="/mainimg.png" alt='mainimg' width={1000} height={500} />
      </div>
      <div className='flex flex-col justify-center items-center mt-10 w-full  max-w-7xl min-h-screen'>
        <div className='mb-6 flex justify-center'>
          <button className='py-2 px-4 text-white rounded-l-full  bg-green-500 hover:bg-green-600 transition duration-300 '>Buy Insign token</button>
          <button className='py-2 px-4 text-white rounded-r-full  bg-blue-500 hover:bg-blue-600 transition duration-300'>White Paper</button>

        </div>
        <iframe width="700" height="394" src="https://www.youtube.com/embed/lCUlyvf9xrs" title="Signal Tokens Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
      <div className='flex flex-col  justify-center items-center mt-10 lg:flex-row  w-full  max-w-6xl min-h-screen'>
        <div className='w-2/3 lg:w-1/2 py-8 lg:pl-2 '>
          <Image src="/ab-img.png" alt='a' width={800} height={800} />
        </div>
        <div className=' w-3/4 py-8 lg:w-1/2  lg:pl-8 lg:pr-6  flex flex-col gap-4 justify-center' >
          <h1 className='text-5xl text-white'>What are Intelligent Signals?</h1>
          <p className='text-gray-300 leading-7 '>The Intelligent Signals Token (INSIG) is the driving force behind an Artificial Intelligence (AI) based Visual Signalling (VST) system.
            The VST system utilises technical analysis techniques, specifically the GANN method, to analyse crypto charts and identify optimal market entry and exit points for trading cryptocurrencies.
            Created by experienced traders and software engineers with over 50 years of experience in financial markets, this system takes the guesswork out of trading.
            It employs a systematic approach using historical data to predict future market movements. The Intelligent Signals platform boasts a 70% success rate.</p>
        </div>
      </div>


    </main>
  )
}
