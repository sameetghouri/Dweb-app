import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
     <div className='flex min-h-screen'>
      <div className='w-full  bg-red-400'>A</div>
      <div className='w-full  bg-blue-400'>B</div>
     </div>
    </main>
  )
}
