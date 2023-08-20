import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center ">
     <div className='flex flex-col items-center lg:flex-row  w-full  max-w-7xl min-h-screen'>
      <div className='w-3/4 pt-8 lg:w-1/2  lg:pl-14 lg:pr-6 bg-gr flex flex-col gap-4 justify-center' >
        <div className='bg-gradient-to-r from-purple-700 to-pink-500 text-gray-100 py-2 px-4 lg:w-11/12 rounded-lg '>
         <h1> Artificial Intelligence drive token </h1>
        </div>
        <h1 className='text-white text-6xl font-semibold'>INSIGNAL TOKEN.</h1>
        <p className='text-3xl font-semibold text-gr1 '>Start Trading Now</p>
        <p className='text-xl text-gray-300'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>
        <button className='px-4 py-2 mr-auto font-semibold bg-sk rounded hover:scale-105 transition duration-200'>Start Now</button>
      </div>
      <div className='w-3/4 lg:w-1/2 pt-8 '>
      <Image  src="/base.png" alt='a' width={1000} height={1000} />
      {/* <div>
      <Image  src="/linesnon.svg" alt='a' width={1000} height={1000} />
      </div> */}
      </div>
     </div>
    </main>
  )
}
