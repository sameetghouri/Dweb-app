import Image from 'next/image'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import { FaWalking } from 'react-icons/fa'
import { BiWallet } from 'react-icons/bi'
import { BsCurrencyExchange } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
      <div className='flex flex-col items-center mt-20 lg:flex-row  w-full   min-h-screen'>
        <div className=' w-3/4 lg:w-1/2  lg:pl-32 lg:pr-6 bg-gr flex flex-col gap-4 justify-center' >
          <div className='bg-gradient-to-r from-purple-700 to-pink-500 text-gray-100 py-1 pl-4  lg:w-full w-11/12 rounded-lg flex items-center hover:opacity-90 '>
            <h1 className=''> Artificial Intelligence drive token  used to access AI technology </h1>
            <MdArrowOutward className="w-8 h-8 py-1 cursor-pointer ml-auto  hover:text-blue-300" />
          </div>
          <h1 className='text-white text-6xl font-semibold'>INSIGNAL TOKEN.</h1>
          <p className='text-3xl font-semibold text-gr3 '>Start Trading Now</p>
          <p className='text-xl text-gray-300'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
          <button className='mt-4 w-1/2 px-4 py-2 mr-auto font-semibold bg-sk text-white rounded-lg hover:translate-y-1 hover:bg-sk1 transition duration-300 ease-in-out '>Start Now</button>
        </div>
        <div className='w-3/4 lg:w-1/2 pt-8 pr-2 '>
          <Image src="/base.png" alt='a' width={900} height={900} />
        </div>
      </div>

      <div className='bg-gradient-to-b from-[#60efff] to-[#0061ff] w-full flex justify-center'>
        <div className='py-10 px-4  w-full max-w-6xl flex flex-col lg:flex-row lg:items-start lg:justify-center items-center gap-x-12 gap-y-7'>
          <div className=''>
            <h3 className='text-black text-xl'>NETWORK AT A GLANCE</h3>
          </div>
          <div className=' flex flex-col items-center'>
            <h3 className='text-black text-xl'>TOTAL HOTSPOTS</h3>
            <h4 className='text-black text-3xl font-semibold'>949,377</h4>
          </div>
          <div className='flex flex-col items-center'>
            <h3 className='text-black text-xl'>CIRCULATING HNT SUPPLY</h3>
            <h4 className='text-black text-3xl font-semibold'>154,294,919</h4>
          </div>
          <div className='py-3'>
            <Link className='px-4 py-3 ml-auto font-semibold bg-gray-800 text-white shadow-lg rounded-xl  hover:bg-sk1 transition duration-300 ease-in-out' href='/'>View Network Coverage</Link>
          </div>
        </div>
      </div>

      <div className='py-10 px-6 w-full max-w-6xl flex flex-col items-center md:items-start '>
        <h2 className='text-white text-5xl py-8 '>Latest News</h2>
        <div className='flex flex-col md:flex-row md:items-stretch items-center gap-5  '>
          <div className='flex flex-col bg-gradient-to-r from-red-500 to-red-400 px-4 py-6  rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
            <h4 className='text-gr2 text-lg font-semibold'>Network Scalability</h4>
            <h3 className='text-white mt-2 text-lg '>Helium Network boosts speed and reliability with upgrade to Solana Blockchain</h3>
          </div>
          <div className='flex flex-col bg-gradient-to-r from-purple-500 to-purple-400  px-4 py-6 rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
            <h4 className='text-gr2 text-lg font-semibold'>Mobile Carrier</h4>
            <h3 className='text-white mt-2 text-lg '>Mobile Carrier Nova Labs and T-Mobile Collaborate on Cryptocarrier, Helium Mobile</h3>
          </div>
          <div className='flex flex-col  bg-gradient-to-r from-blue-500 to-blue-400  px-4 py-6  rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
            <h4 className='text-gr2 text-lg font-semibold'>Coverage Integration</h4>
            <h3 className='text-white mt-2 text-lg '>Helium Connects Senet Customers in NYC</h3>
          </div>
          <div className='flex flex-col bg-gradient-to-r from-green-500 to-green-400  px-4 py-6  rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
            <h4 className='text-gr2 text-lg font-semibold'>Roaming Partner</h4>
            <h3 className='text-white mt-2 text-lg '>Actility and Helium Announce Roaming Integration</h3>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center  bg-[url(/b1.jpg)] bg-cover rounded w-full min-h-screen'>
        <h1 className='font-semibold leading-snug text-center text-3xl md:text-[42px] text-gray-100 w-8/12 pt-10'>Intelligent Signals Token (INSIG) is the driving force behind an Artificial Intelligence (AI) based Visual Signaling (VST) system.</h1>
        <Image className='pt-4' src="/mainimg.png" alt='mainimg' width={1000} height={500} />
      </div>

      <div className='flex flex-col pt-14 items-center w-full min-h-screen'>
        <div className='flex justify-center pb-6'>
          <button className='py-3 px-5 text-white rounded-l  bg-gradient-to-b  from-[#679df5] to-[#0061ff] hover:scale-105 transition duration-300 '>Buy Insign token</button>
          <button className='py-3 px-5 text-white rounded-r  bg-gradient-to-b from-[#ff88a5] to-[#d82955]   hover:scale-105 transition duration-300'>White Paper</button>
        </div>
        <div className='py-3 flex items-center gap-2'>
          <h4 className='text-white text-2xl'>In this video you will learn How this website works</h4>
          <FaRegLightbulb className='w-8 h-8 mt-2 text-white animate-pulse'/>
          </div>
        <div className='bg-[#8a868e] rounded  px-4 overflow-x-auto py-8 w-11/12 flex flex-col lg:flex-row items-center justify-around gap-4'>
          <div className='w-1/3 pl-2 lg:pl-4'>
            <Image src="/svg1.svg" alt='svg1' width={500} height={500} />
          </div>
          <div className='w-2/3 flex flex-col items-center'>
            <iframe className='rounded-3xl' width="600" height="337" src="https://www.youtube.com/embed/lCUlyvf9xrs" title="Signal Tokens Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div className=' bg-gradient-to-b from-purple-400 to-purple-700 mt-6 w-full flex justify-center'>
        <div className='py-14 px-4  w-full max-w-6xl flex flex-col lg:flex-row  items-center gap-y-8'>
          <div className=''>
            <h3 className='text-white font-semibold text-2xl'>Make your on demand app the next success story</h3>
          </div> 
          <div className='lg:ml-auto'>
            <Link className='px-4 py-3 ml-auto font-semibold bg-gray-800 text-white shadow-lg rounded-xl  hover:bg-gray-100 hover:text-gr transition duration-300 ease-in' href='/'>Get in Touch</Link>
          </div>
        </div>
      </div>

      <div className='flex flex-col  items-center mt-10 lg:flex-row  w-full  max-w-6xl min-h-screen'>
        <div className='w-2/3 flex justify-center lg:w-1/2 py-8 lg:pl-8'>
          <Image src="/ab-img.png" alt='a' width={500} height={500} />
        </div>
        <div className=' w-3/4  py-8 lg:w-1/2  lg:pl-8 lg:pr-6  flex flex-col gap-4 justify-center' >
          <h1 className=' text-5xl text-white'>What are Intelligent <span className='text-blue-400 animate-pulse  '>Signals?</span></h1>
          <p className='text-gray-400 leading-7 '>The Intelligent Signals Token (INSIG) is the driving force behind an Artificial Intelligence (AI) based Visual Signalling (VST) system.
            The VST system utilises technical analysis techniques, specifically the GANN method, to analyse crypto charts and identify optimal market entry and exit points for trading cryptocurrencies.
            Created by experienced traders and software engineers with over 50 years of experience in financial markets, this system takes the guesswork out of trading.
            It employs a systematic approach using historical data to predict future market movements. The Intelligent Signals platform boasts a 70% success rate.</p>

        </div>
      </div>

      <div className='flex flex-col items-center px-4 bg-[url(/b2.jpg)] bg-cover rounded w-full  '>
        <h1 className='pt-20  text-[44px] text-gray-100 font-semibold'>Why use Intelligent <span className='text-blue-400 animate-pulse  '>Signals?</span></h1>
        <h4 className='pt-4  text-gray-300 '>Trading in Crypto is not easy, and most traders lose money! Online educational resource Tradeciety (www.tradeciety.com) </h4>
        <div className='py-10 px-4 w-full max-w-4xl flex flex-col md:flex-row md:items-start md:justify-center items-center gap-x-12 gap-y-7'>
          <div className='flex flex-col w-3/4 md:w-1/3 gap-6'>
            <BiWallet className="w-14 h-14 cursor-pointer text-blue-400 " />
            <h3 className='text-gray-100 text-2xl'>95 % of traders in Crypto lose money</h3>
          </div>
          <div className=' flex flex-col w-3/4 md:w-1/3 gap-6 '>
            <FaWalking className="w-14 h-14 cursor-pointer text-blue-400 " />
            <h4 className='text-gray-100 text-2xl font-semibold'>80% of day traders quit in the first two years</h4>
          </div>
          <div className='flex flex-col w-3/4 md:w-1/3 gap-6'>
            <BsCurrencyExchange className="w-14 h-14 cursor-pointer text-blue-400 " />
            <h4 className='text-gray-100 text-2xl font-semibold'>Traders with a ten-year track record of losing continue to trade!</h4>
          </div>
        </div>
      </div>

      <div className='flex flex-col  justify-center items-center mt-10 lg:flex-row  w-full  max-w-6xl min-h-screen'>
        <div className=' w-3/4 py-8 lg:w-1/2  lg:pl-9   flex flex-col gap-4 justify-center' >
          <h1 className='text-5xl text-white'> <span className='text-green-400 animate-pulse'>Staking</span></h1>
          <h2 className='text-3xl text-gr3'>Build the Future with Intell Signals</h2>
          <p className='text-gray-300 leading-7 '>
            We want to introduce the staking feature so people can earn more with their tokens. Staking is a way of supporting the security and stability of the network while also earning passive income.
            Staking in the context of cryptocurrencies refers to holding and locking up a certain amount of tokens in a cryptocurrency network to participate in the network's consensus mechanism and earn rewards.
            In the context of staking, crypto signals help traders determine which cryptocurrencies to stake and for how long. For example, a signal may indicate that a particular cryptocurrency will likely
            experience price appreciation over the next few months, making it a good candidate for staking.
          </p>
          <button className='mt-4 px-4 py-2 mr-auto font-semibold bg-sk text-white rounded-lg hover:translate-y-1 hover:bg-sk1 transition duration-300 ease-in-out '>Learn More</button>
        </div>
        <div className='w-2/3 flex justify-center lg:pl-6 lg:w-1/2 py-8  '>
          <Image src="/ab-img.png" alt='a' width={500} height={500} />
        </div>

      </div>
      <div className='py-10 px-4 w-full max-w-6xl flex flex-col md:flex-row md:items-stretch items-center gap-x-12 gap-y-7'>

        <div className='flex flex-col bg-gr1 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in'>
          <h3 className='text-gray-100 text-2xl font-semibold'>BYE BYE GPU MINING</h3>
          <p className='text-gray-300'>Mining Helium tokens with Hotspots is done via radio technology, not expensive or wasteful GPUs.</p>
        </div>
        <div className=' flex flex-col bg-gr1 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in'>
          <h3 className='text-gray-100 text-2xl font-semibold'>Build Networks</h3>
          <p className='text-gray-300'>Hotspots work together to form a new global wireless network and undertake 'Proof-of-Coverage'.</p>
        </div>
        <div className='flex flex-col bg-gr1 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in'>
          <h3 className='text-gray-100 text-2xl font-semibold'>Choose your Hardware</h3>
          <p className='text-gray-300'>Hotspots are built by a variety of vendors to suit your needs.</p>
        </div>
      </div>

    </main>
  )
}
