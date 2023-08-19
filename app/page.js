import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
     <div className='flex justify-center w-full  max-w-7xl min-h-screen'>
      <div className='w-1/2 pl-14 bg-gr flex flex-col gap-4 justify-center' >
        <h1 className='text-white text-6xl font-semibold'>People-Powered Networks.</h1>
        <p className='text-3xl font-semibold text-gr1 '>Start a Wireless Revolution</p>
        <p className='text-xl text-gray-300'>The Helium Network represents a paradigm shift for decentralized wireless infrastructure.</p>
        <button className='px-4 py-2 mr-auto font-semibold bg-sk rounded hover:scale-105 transition duration-200'>Join Us</button>
      </div>
      <div className='w-1/2  '>
      <Image  src="/base.png" alt='a' width={1000} height={1000} />
      {/* <div>
      <Image  src="/linesnon.svg" alt='a' width={1000} height={1000} />
      </div> */}
      </div>
     </div>
    </main>
  )
}
