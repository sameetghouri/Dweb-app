const IntroductiontoAI = () => {
    return ( 
        <div className='  bg-white min-h-screen w-full flex flex-col items-center '>
        
        <img className=' w-full h-full' src="/img/b4.jpg" alt='b4' />
        <div className='relative sm:-top-36 w-4/5 bg-opacity-0 flex flex-col items-center gap-4'>
          <h2 className='text-[42px] font-bold text-black'>Introduction to AI and ML with Application and Future</h2>
          <h3 className='text-4xl  font-semibold text-gray-700'>Massive, Decentralized Connectivity</h3>
          <p className='text-gray-700 text-xl pt-2'>Machine Learning (ML) is a subset of Artificial Intelligence (AI) that can potentially transform various industries, including finance and Cryptocurrency.
            Unlike traditional programming, ML algorithms enable computers to learn and improve their performance on a specific task by processing and making predictions or decisions based on that data. The more data the algorithm is trained on, the more accurate its predictions become. </p>
          <p className='text-gray-700 text-xl pt-2'>AI and ML have already significantly impacted many industries by enabling machines to perform tasks that were once considered exclusive to humans, such as decision-making, problem-solving, and creativity. ML is used in various applications, including image and speech recognition, natural language processing, fraud detection, and autonomous driving.
            However, the rapid growth of AI and ML also raises important ethical, social, and economic questions that must be addressed.</p>

          <button className="mt-4 rounded-xl px-6 py-4 overflow-hidden relative group cursor-pointer border-2 font-semibold bg-purple-600 text-black ">
            <span className="absolute w-64 h-0 transition-all duration-[700ms] origin-center rotate-45 -translate-x-20 bg-gray-700 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
            <span className="relative text-white transition duration-[700ms]  ease">Use The Network</span>
          </button>
        </div>

        <div className='pb-4 z-1 px-4 w-full max-w-6xl flex flex-col md:flex-row md:items-stretch items-center gap-x-12 gap-y-7'>
          <div className='flex flex-col bg-gradient-to-b from-green-200 to-green-300 shadow p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-300'>
            <h3 className='text-gray-900 text-xl font-semibold'>AN OPEN ALTERNATIVE</h3>
            <p className='text-gray-700'>The People's Network is built on Open Source technology and governed by its worldwide community with stewardship from the Helium Foundation.</p>
          </div>
          <div className=' flex flex-col  bg-gradient-to-b from-blue-200 to-blue-300 shadow p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-300'>
            <h3 className='text-gray-900 text-xl font-semibold'>SCALABLE & AFFORDABLE</h3>
            <p className='text-gray-700'>Say goodbye to expensive cell contracts. On Helium a sensor can cost cents to run a year.</p>
          </div>
          <div className='flex flex-col bg-gradient-to-b from-purple-200 to-purple-300 shadow p-8 rounded-lg w-3/4 md:w-1/3 gap-6 hover:scale-105 transition duration-300'>
            <h3 className='text-gray-900 text-xl font-semibold'>LORAWAN-COMPATIBLE</h3>
            <p className='text-gray-700'>Utilize thousands of existing sensors, chipsets and MCUs for streamlined development.</p>
          </div>
        </div>
      </div>
     );
}
 
export default IntroductiontoAI;