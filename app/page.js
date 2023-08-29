'use client'
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import { FaWalking } from 'react-icons/fa'
import { BiWallet } from 'react-icons/bi'
import { BsCurrencyExchange } from 'react-icons/bs'
import { FaRegLightbulb } from 'react-icons/fa'
import { FaUserCheck } from 'react-icons/fa'
import {BiSolidChevronDown} from 'react-icons/bi'
import Plans from '@/sections/Plans'
import Roadmap from '@/sections/Roadmap'


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

      <div className='flex flex-col pt-16 items-center w-full min-h-screen'>
        <div className='flex justify-center pb-6'>
          <button className='py-2 px-5 text-white rounded-l  bg-gradient-to-b  from-[#679df5] to-[#0061ff] hover:scale-105 transition duration-300 '>Buy Insign token</button>
          <button className='py-2 px-5 text-white rounded-r  bg-gradient-to-b from-[#ff88a5] to-[#d82955]   hover:scale-105 transition duration-300'>White Paper</button>
        </div>
        <div className='py-3 flex items-center gap-2'>
          <h4 className='text-white text-2xl'>In this video you will learn How this website works</h4>
          <FaRegLightbulb className='w-8 h-8 text-yellow-500 animate-pulse' />
        </div>
        <div className='bg-[#686767] rounded-3xl  px-10 overflow-x-auto py-8 w-2/3 flex flex-col  items-center justify-around '>
            <iframe className='rounded-3xl' width="600" height="337" src="https://www.youtube.com/embed/lCUlyvf9xrs" title="Signal Tokens Introduction" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

      <div className='flex flex-col mb-24 items-center px-4 bg-[url(/b2.jpg)] bg-cover rounded w-full  '>
        <h1 className='pt-20  text-[44px] text-gray-100 font-semibold'>Why use Intelligent <span className='text-blue-400 animate-pulse  '>Signals?</span></h1>
        <h4 className='pt-4  text-gray-300 '>Trading in Crypto is not easy, and most traders lose money! Online educational resource Tradeciety (www.tradeciety.com) </h4>
        <div className='p-10 w-full max-w-4xl flex flex-col md:flex-row md:items-start md:justify-center items-center gap-x-12 gap-y-7'>
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

        <div className='flex flex-col w-4/5 items-center  relative -bottom-24'>
          <h2 className='text-white text-4xl font-semibold py-4 '>Our Goals</h2>
          <div className='bg-gray-100 p-14  shadow-lg shadow-sky-400  rounded-xl flex flex-col md:flex-row md:items-start md:justify-center items-center gap-x-12 gap-y-7'>
            <div className='flex w-3/4 md:w-1/3 gap-6'>
              <FaUserCheck className="w-14 h-14 cursor-pointer text-blue-400 " />
              <div className='flex flex-col'>
                <h3 className='text-black text-5xl font-semibold'>25K</h3>
                <h4 className='text-gray-600'>Active Subscriber in 1 Year</h4>
              </div>
            </div>
            <div className='flex  w-3/4 md:w-1/3 gap-6'>
              <FaUserCheck className="w-14 h-14 cursor-pointer text-blue-400 " />
              <div className='flex flex-col'>
                <h3 className='text-black text-5xl font-semibold'>100K</h3>
                <h4 className='text-gray-600'>Active Subscriber in 3 Year</h4>
              </div>
            </div>
            <div className='flex  w-3/4 md:w-1/3 gap-6'>
              <FaUserCheck className="w-14 h-14 cursor-pointer text-blue-400 " />
              <div className='flex flex-col '>
                <h3 className='text-black text-5xl font-semibold'>500K</h3>
                <h4 className='text-gray-600'>Active Subscriber in 5 Year</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col  justify-center items-center mt-20 lg:flex-row  w-full  max-w-6xl min-h-screen'>
        <div className=' w-3/4 pt-7  lg:w-1/2  lg:pl-10   flex flex-col gap-4 justify-center' >
          <h1 className='text-7xl text-white'> <span className='text-green-400 animate-pulse'>Staking</span></h1>
          <h2 className='text-4xl text-gr3'>Build the Future with Intell Signals</h2>
          <p className='text-gray-300 leading-7 '>
            We want to introduce the staking feature so people can earn more with their tokens. Staking is a way of supporting the security and stability of the network while also earning passive income.
            Staking in the context of cryptocurrencies refers to holding and locking up a certain amount of tokens in a cryptocurrency network to participate in the network's consensus mechanism and earn rewards.
            In the context of staking, crypto signals help traders determine which cryptocurrencies to stake and for how long. For example, a signal may indicate that a particular cryptocurrency will likely
            experience price appreciation over the next few months, making it a good candidate for staking.
          </p>
          <button className='mt-4 px-4 py-2 mr-auto font-semibold bg-sk text-white rounded-lg hover:translate-y-1 hover:bg-sk1 transition duration-300 ease-in-out '>Learn More</button>
        </div>
        <div className='w-2/3 flex justify-end lg:pl-6 lg:w-1/2 py-8  '>
          <Image src="/ab-img.png" alt='a' width={500} height={500} />
        </div>

      </div>

      <div className='py-10 z-1 px-4 w-full max-w-6xl flex flex-col md:flex-row md:items-stretch items-center gap-x-12 gap-y-7'>
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

      <div className='mt-10 bg-[url(/b3.jpg)] min-h-screen bg-cover w-full flex justify-center '>
        <div className='flex flex-col md:flex-row w-full max-w-6xl md:items-stretch items-center px-4 py-8'>
          <div className='flex md:w-1/2 w-4/5 px-6 flex-col items-center  gap-8'>
            <h2 className='text-5xl font-semi-bold text-white'>Tokenomics</h2>
            <div className='flex flex-col items-center '>
              <h3 className='text-3xl font-semibold text-white'>Token Name</h3>
              <p className='text-2xl text-white'>Intelligent Signals</p>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-3xl font-semibold text-white'>Token Symbol</h3>
              <p className='text-2xl text-white'>Insig</p>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-3xl font-semibold text-white'>Total Supply</h3>
              <p className='text-2xl text-white'>300M</p>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-3xl font-semibold text-white'>Decimal</h3>
              <p className='text-2xl text-white'>Intelligent Signals</p>
            </div>
            <div className='flex flex-col items-center'>
              <h3 className='text-3xl font-semibold text-white'>Blockchain</h3>
              <p className='text-2xl text-white'>BEP20</p>
            </div>
          </div>
          <div className='flex md:w-1/2 w-4/5 px-6 mt-3 md:-mt-0  flex-col items-center  gap-8'>
            <h2 className='text-5xl font-semi-bold text-white'>Token Distribution</h2>
            <div className=''><Image src="/circle.png" alt='a' width={500} height={500} /></div>
            <div className='flex flex-col items-center'>
              <h3 className='text-3xl font-semibold text-white'>Token Utility</h3>
              <p className='text-2xl text-white'>INSIG tokens are required to pay for Intelligent Signals subscriptions on its proprietary trading platform.
                INSIG tokens also will be used for staking </p>
            </div>
          </div>
        </div>
      </div>

      <div className='  bg-white min-h-screen w-full flex flex-col items-center '>
        <div className=' bg-[url(/b4.jpg)] bg-contain bg-no-repeat h-screen w-full '>
        </div>
        <div className='relative -top-36 w-4/5 bg-opacity-0 flex flex-col items-center gap-4'>
          <h2 className='text-[42px] font-bold text-black'>Introduction to AI and ML with Application and Future</h2>
          <h3 className='text-4xl  font-semibold text-gray-700'>Massive, Decentralized Connectivity</h3>
          <p className='text-gray-700 text-xl pt-2'>Machine Learning (ML) is a subset of Artificial Intelligence (AI) that can potentially transform various industries, including finance and Cryptocurrency.
            Unlike traditional programming, ML algorithms enable computers to learn and improve their performance on a specific task by processing and making predictions or decisions based on that data. The more data the algorithm is trained on, the more accurate its predictions become. </p>
          <p className='text-gray-700 text-xl pt-2'>AI and ML have already significantly impacted many industries by enabling machines to perform tasks that were once considered exclusive to humans, such as decision-making, problem-solving, and creativity. ML is used in various applications, including image and speech recognition, natural language processing, fraud detection, and autonomous driving.
            However, the rapid growth of AI and ML also raises important ethical, social, and economic questions that must be addressed.</p>
          <button className='mt-4 px-6 py-4 font-semibold bg-gre text-white rounded-lg hover:scale-105 hover:bg-sk transition duration-200 ease-in '>Use The Network</button>
        </div>
        <div className='pb-4 z-1 px-4 w-full max-w-6xl flex flex-col md:flex-row md:items-stretch items-center gap-x-12 gap-y-7'>
          <div className='flex flex-col bg-gray-200 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in'>
            <h3 className='text-gray-900 text-xl font-semibold'>AN OPEN ALTERNATIVE</h3>
            <p className='text-gray-700'>The People's Network is built on Open Source technology and governed by its worldwide community with stewardship from the Helium Foundation.</p>
          </div>
          <div className=' flex flex-col bg-gray-200 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in'>
            <h3 className='text-gray-900 text-xl font-semibold'>SCALABLE & AFFORDABLE</h3>
            <p className='text-gray-700'>Say goodbye to expensive cell contracts. On Helium a sensor can cost cents to run a year.</p>
          </div>
          <div className='flex flex-col bg-gray-200 p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-200 ease-in'>
            <h3 className='text-gray-900 text-xl font-semibold'>LORAWAN-COMPATIBLE</h3>
            <p className='text-gray-700'>Utilize thousands of existing sensors, chipsets and MCUs for streamlined development.</p>
          </div>
        </div>
      </div>

      <div className='bg-[url(/b5.jpg)] min-h-screen bg-cover w-full flex justify-center '>
        <div className='flex flex-col lg:flex-row w-full max-w-7xl lg:items-stretch items-center py-8'>
          <div className='flex lg:w-1/2 w-4/5 p-2 flex-col items-center justify-center'>
            <Image src="/com.png" alt='a' width={700} height={700} />
          </div>
          <div className='flex lg:w-1/2 w-4/5 p-2 mt-3 lg:-mt-0  flex-col rounded-xl bg-black bg-opacity-40 hover:bg-opacity-50  gap-8'>
            <h2 className='text-5xl font-semi-bold text-white'>Intelligent Signal Ecosystem</h2>
            <p className='text-xl text-gray-100'>Community-Centric: Intelligent Signals believes the community is the key to success, especially in Web3.
              The happier and more successful a project community is, the more likely the members are to spread the word and help Intelligent Signals to scale new heights. With encouraging community engagement and loyalty uppermost in mind, Intelligent Signals’ dedicated Discord group is an open forum for token discussions and all aspects of trading. </p>
            <p className='text-xl text-gray-100'>Transparency: At the heart of Web3 are community, collaboration, and transparency. One of the core differences between Crypto and traditional finance is the availability of real-time open-source information. Intelligent Signals highly values integrity and openness, and it is this that guides our transparent information sharing.
              Intelligent Signals will provide constant updates on social media, with all INSIG transactions available on the blockchain in real time.</p>
            <p className='text-xl text-gray-100'>Risk-conscious: Every trade and market has risk-to-reward trade-offs related to risk profile, trading style, and psychology.
              Understanding and managing trading risk is essential to the Intelligent Signals platform.</p>
          </div>
        </div>
      </div>

      <div className='py-10 bg-gray-100  w-full flex flex-col items-center gap-10 '>
        <h2 className='text-5xl py-8 font-bold text-black'>Our Roadmap</h2>
        <div className='grid grid-cols-3'>
        <div className='col-span-1 flex flex-col items-center'>
          <ol className="relative text-gray-500 border-l border-gray-800 ">
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-green-500  ">
                <svg className="w-3.5 h-3.5 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
              </span>
              <h3 className="font-semibold text-black">April – June</h3>
              <p className="text-gray-600">Invitation Founders price 0.025p</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-green-500 ">
                <svg className="w-3.5 h-3.5 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <h3 className="font-semibold text-black">June 2023</h3>
              <p className="text-gray-600">30 days at 0.10p price</p>
            </li>
            <li className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-green-500 ">
                <svg className="w-3.5 h-3.5 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <h3 className="font-semibold text-black">July 2023</h3>
              <p className="text-gray-600">Step details here</p>
            </li>
            <li className="ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-green-500 ">
                <svg className="w-3.5 h-3.5 text-black " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
              </span>
              <h3 className="font-semibold text-black">August 2023</h3>
              <p className="text-gray-600"> 30 days 0.15p price</p>
            </li>
          </ol>
        </div>
        <div className='col-span-2 pl-4'>
        <Roadmap/>
        </div>
        </div>
      </div>

      {/* Plans Sections */}
      <div className=' flex flex-col bg-gradient-to-b from-gray-300 to-gray-400 items-center py-20  w-full '>
        <h2 className='text-5xl py-4 font-bold text-black'>Pricing</h2>
        <h3 className='text-2xl py-1 text-gray-700'>You can start with a free trial Or Buy the VIP Pakage</h3>
        <div className='w-full  py-4 max-w-6xl flex flex-col items-center'>
          <h2 className='text-3xl font-semibold text-black'>Regular Rates:</h2>
          <div className='flex py-4 flex-col items-center w-full lg:flex-row lg:items-stretch lg:justify-center gap-8'>
            <div className='relative flex flex-col items-center bg-gradient-to-b from-[#2c4e89] to-[#102b59]  rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
              <div className='flex  mt-2 py-1 justify-center '>
              <h3 className='text-white text-3xl font-bold '>Free: $0</h3>
              </div>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>1 Free Signal per day</h4>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>Perfect for beginners and those looking to dip their toes into crypto trading.</h4>
              <button className='lg:absolute lg:bottom-0 w-full bg-gradient-to-b px-2 py-3 from-sky-400 to-sky-600 rounded-b-xl text-white font-semibold'>Buy Now</button>
            </div>
            <div className='flex flex-col items-center bg-gradient-to-b from-[#2c4e89] to-[#102b59]  rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
            <div className='flex  mt-2 py-1 justify-center '>
              <h3 className='text-white text-3xl font-bold '>Premium: $49/Month</h3>
              </div>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'> 5 Signals per day</h4>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>Access to Premium signals</h4>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>Opportunity to diversify your portfolio</h4>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>Ideal for traders seeking more signals and a competitive edge.</h4>
              <button className='w-full bg-gradient-to-b px-2 py-3 from-sky-400 to-sky-600 rounded-b-xl text-white font-semibold'>Buy Now</button>
            </div>
            <div className='relative flex flex-col items-center bg-gradient-to-b from-[#2c4e89] to-[#102b59]  rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
            <div className='flex  mt-2 py-1 justify-center '>
              <h3 className='text-white text-3xl font-bold '>VIP: $99/Month</h3>
              </div>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>Unlimited Signals</h4>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>One-to-One Coaching (up to 1 hour)</h4>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'> Custom Crypto Research Reports on Demand</h4>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>For serious traders wanting maximum insights, personalized guidance, and research expertise.</h4>
              <button className='lg:absolute lg:bottom-0 w-full bg-gradient-to-b px-2 py-3 from-sky-400 to-sky-600 rounded-b-xl text-white font-semibold'>Buy Now</button>
            </div>
          </div>
        </div>
        <div className='w-full  py-4 max-w-6xl flex flex-col items-center'>
          <h2 className='text-3xl font-semibold text-black'>Discounted Rates (3 Months Subscription):</h2>
          <div className='flex py-4 w-full flex-col items-center  lg:flex-row lg:items-stretch lg:justify-center gap-8'>
            <div className='flex flex-col items-center bg-gradient-to-b from-[#2c4e89] to-[#102b59]  rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
              <h3 className='text-white mt-2 py-4 text-4xl font-bold '>$129/3 Months Premium:</h3>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>All benefits of Monthly Premium package</h4>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>Discounted rate for 3 months</h4>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>A cost-effective choice for extended premium access and savings.</h4>
              <button className='w-full bg-gradient-to-b px-2 py-3 from-sky-400 to-sky-600 rounded-b-xl text-white font-semibold'>Buy Now</button>
            </div>
            <div className='relative flex flex-col items-center bg-gradient-to-b from-[#2c4e89] to-[#102b59]  rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
              <h3 className='text-white mt-2 py-4 text-4xl font-bold '>$249/3 Months VIP:</h3>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'> All benefits of Monthly VIP package</h4>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>Discounted rate for 3 months</h4>
              <h4 className='text-white mt-2 p-2 border-b border-gray-500 w-full text-center'>Premium features at a reduced rate for traders committed to growth.</h4>
              <button className='lg:absolute lg:bottom-0 w-full bg-gradient-to-b px-2  py-3 from-sky-400 to-sky-600 rounded-b-xl text-white font-semibold'>Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <div className='relative py-8 bg-gray-100 min-h-screen w-full flex flex-col items-center gap-8 '>
        <Plans />
      </div>

      <div className='py-24  bg-gradient-to-b from-gray-200 to-gray-400 w-full flex flex-col items-center gap-10 '>
        <div className='px-4 w-11/12 flex flex-col items-center gap-5'>
          <h2 className='text-5xl font-bold text-black'>Founding Partners</h2>
          <h3 className='text-xl text-black'>We have put together a world className team of leadership , software engineers , AI experts , Trading professionals and financiers.</h3>
        </div>
        <div className='grid grid-cols-3 w-2/3 lg:grid-cols-4 xl:grid-cols-5 gap-10'>
          <div className='col-span-1'><Image src={'/agulus.svg'} alt='a' width={300} height={300} />   </div>
          <div className='col-span-1'><Image src={'/airly.svg'} alt='a' width={300} height={300} />   </div>
          <div className='col-span-1'><Image src={'/nowi.svg'} alt='a' width={300} height={300} />   </div>
          <div className='col-span-1'><Image src={'/digitalmatter.svg'} alt='a' width={300} height={300} />   </div>
          <div className='col-span-1'><Image src={'/lonestar.svg'} alt='a' width={300} height={300} />   </div>
          <div className='col-span-1'><Image src={'/open.svg'} alt='a' width={300} height={300} />   </div>
          <div className='col-span-1'><Image src={'/mydevices.svg'} alt='a' width={300} height={300} />   </div>
          <div className='col-span-1'><Image src={'/careband.svg'} alt='a' width={300} height={300} />   </div>
          <div className='col-span-1'><Image src={'/mimiq.svg'} alt='a' width={300} height={300} />   </div>
        </div>
      </div>

      {/* FAQ Section*/}
      <div className='relative py-8 bg-gray-100 min-h-screen w-full flex flex-col items-center gap-8 '>
        <div>
          <div className='relative py-8 bg-gray-100 min-h-screen w-full flex flex-col items-center gap-8 '>
            <h2 className='text-5xl py-12 px-4 font-bold text-black'>Frequently Asked  <span className='text-green-500'>Questions</span> </h2>
            {/* FAQ Item 1 */}
            <div className='bg-white w-4/5 relative shadow-xl hover:shadow-2xl hover:scale-105 transition duration-200 overflow-hidden'>
              <div className='flex items-start px-8 py-4 border-l-4 border-green-400  rounded bg-white  hover:text-black transition duration-200'>
                <div className='text-3xl text-black'>
                  {/* Left Icon */}
                  <i className='fas fa-chevron-left pr-2'></i>
                </div>
                <div className='relative '>
                  <h3 className='text-xl pb-2 text-black font-semibold'>
                    What are Intelligent Signals?
                  </h3>
                  <div className='text-gray-600 answer transition-max-h'>
                    {/* Answer Content */}
                    <p className='text-lg text-gray-600 mb-4 '>
                      Intelligent Signals is an ecosystem that utilizes Artificial Intelligence (AI) and Visual Signalling Technology (VST) to analyze crypto charts and identify optimal market entry and exit points for trading cryptocurrencies. It includes the Intelligent Signals Token (INSIG) as the exclusive means of subscribing to the platform. The INSIG token also incorporates a crypto trading bot for automated trading.
                    </p>
                  </div>
                </div>
                <div className='text-3xl hover:rotate-180 transition duration-300 ml-auto'>
                  {/* Right Icon */}
                  <BiSolidChevronDown className="w-8 h-8  border-2 rounded-full text-green-500 border-green-500  hover:border-yellow-500 hover:text-yellow-500 "/>
                </div>
              </div>
            </div>
  
            <div className='bg-white w-4/5 relative shadow-xl hover:shadow-2xl hover:scale-105 transition duration-200 overflow-hidden'>
              <div className='flex items-start px-8 py-4 border-l-4 border-green-400 rounded bg-white  hover:text-black transition duration-300 hover'>
                <div className='text-3xl text-black'>
                  {/* Left Icon */}
                  <i className='fas fa-chevron-left pr-2'></i>
                </div>
                <div className='relative'>
                  <h3 className='text-xl pb-2 text-black font-semibold'>
                  Why should i use Intelligent Signals?
                  </h3>
                  <div className='text-gray-600 answer transition-max-h'>
                    {/* Answer Content */}
                    <p className='text-lg text-gray-600 mb-4 '>
                     Intelligent Signals is designed to improve traders' performance and consistency in decision-making. It offers an automated and intelligent approach to crypto selection and trading, allowing for 24/7 monitoring and execution of trades without manual intervention. With a 70% success rate, it provides traders with a more reliable and hands-free trading experience.
                    </p>
                  </div>
                </div>
                <div className='text-3xl hover:rotate-180 transition duration-300 ml-auto'>
                  {/* Right Icon */}
                  <BiSolidChevronDown className="w-8 h-8  border-2 rounded-full text-green-500 border-green-500  hover:border-yellow-500 hover:text-yellow-500 "/>
                </div>
              </div>
            </div>
            <div className='bg-white w-4/5 relative shadow-xl hover:shadow-2xl hover:scale-105 transition duration-200 overflow-hidden'>
              <div className='flex items-start px-8 py-4 border-l-4 border-green-400 rounded bg-white  hover:text-black transition duration-300 hover'>
                <div className='text-3xl text-black'>
                  {/* Left Icon */}
                  <i className='fas fa-chevron-left pr-2'></i>
                </div>
                <div className='relative'>
                  <h3 className='text-xl pb-2 text-black font-semibold'>
                  How does Intelligent Signals utilize pattren recognition?
                  </h3>
                  <div className='text-gray-600 answer transition-max-h'>
                    {/* Answer Content */}
                    <p className='text-lg text-gray-600 mb-4 '>
                     Intelligent Signals leverages AI and Machine Learning to analyze over 23,000 crypto charts and identify chart patterns. These patterns are ranked based on importance, providing traders with a competitive advantage. The Visual Signalling Technology (VST) developed by Intelligent Signals uses a color scheme (red, amber, and green) to simplify the identification and interpretation of patterns.
                    </p>
                  </div>
                </div>
                <div className='text-3xl hover:rotate-180 transition duration-300 ml-auto'>
                  {/* Right Icon */}
                  <BiSolidChevronDown className="w-8 h-8  border-2 rounded-full text-green-500 border-green-500  hover:border-yellow-500 hover:text-yellow-500 "/>
                </div>
              </div>
            </div>
            <div className='bg-white w-4/5 relative shadow-xl hover:shadow-2xl hover:scale-105 transition duration-200 overflow-hidden'>
              <div className='flex items-start px-8 py-4 border-l-4 border-green-400 rounded bg-white  hover:text-black transition duration-300 hover'>
                <div className='text-3xl text-black'>
                  {/* Left Icon */}
                  <i className='fas fa-chevron-left pr-2'></i>
                </div>
                <div className='relative'>
                  <h3 className='text-xl pb-2 text-black font-semibold'>
                  What features does Intelligent Signals offers?
                  </h3>
                  <div className='text-gray-600 answer transition-max-h'>
                    {/* Answer Content */}
                    <p className='text-lg text-gray-600 mb-4 '>
                    Intelligent Signals offers several essential features, including a trading bot for automated trading based on market signals and user-defined parameters. It also provides a strategy builder and backtester for traders to create and test their trading strategies. Additionally, it incorporates a risk profiler, staking opportunities, new listing alerts, and a community-centric ecosystem.
                    </p>
                  </div>
                </div>
                <div className='text-3xl hover:rotate-180 transition duration-300 ml-auto'>
                  {/* Right Icon */}
                  <BiSolidChevronDown className="w-8 h-8  border-2 rounded-full text-green-500 border-green-500  hover:border-yellow-500 hover:text-yellow-500 "/>
                </div>
              </div>
            </div>
            <div className='bg-white w-4/5 relative shadow-xl hover:shadow-2xl hover:scale-105 transition duration-200 overflow-hidden'>
              <div className='flex items-start px-8 py-4 border-l-4 border-green-400 rounded bg-white  hover:text-black transition duration-300 hover'>
                <div className='text-3xl text-black'>
                  {/* Left Icon */}
                  <i className='fas fa-chevron-left pr-2'></i>
                </div>
                <div className='relative'>
                  <h3 className='text-xl pb-2 text-black font-semibold'>
                  How does Intelligent Signals contribute to cryptocurrency market?
                  </h3>
                  <div className='text-gray-600 answer transition-max-h'>
                    {/* Answer Content */}
                    <p className='text-lg text-gray-600 mb-4 '>
                   Intelligent Signals contributes to the cryptocurrency market by providing accurate trading signals based on technical analysis and AI. Its pattern recognition technology, GANN analytics, and cognitive recognition enable traders to forecast market movements and make informed trading decisions. The platform aims to improve risk management, offer timely market insights, and create a transparent and engaged community within the crypto space.
                    </p>
                  </div>
                </div>
                <div className='text-3xl hover:rotate-180 transition duration-300 ml-auto'>
                  {/* Right Icon */}
                  <BiSolidChevronDown className="w-8 h-8  border-2 rounded-full text-green-500 border-green-500  hover:border-yellow-500 hover:text-yellow-500 "/>
                </div>
              </div>
            </div>      
          </div>
          </div> 
        </div>
      

    </main>
  )
}
