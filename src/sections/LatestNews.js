const LatestNews
 = () => {
    return ( 
        <div className='py-10 px-6 w-full max-w-6xl flex flex-col items-center md:items-start '>
        <h2 className='text-white text-5xl py-8 '>Latest News</h2>
        <div className='flex flex-col md:flex-row md:items-stretch items-center gap-5  '>
          <div className='flex flex-col bg-gradient-to-t from-red-500 to-red-400 px-4 py-6  rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
            <h4 className='text-black text-lg font-black'>Network Scalability</h4>
            <h3 className='text-black mt-2 leading-7 '>Helium Network boosts speed and reliability with upgrade to Solana Blockchain</h3>
          </div>
          <div className='flex flex-col bg-gradient-to-t from-purple-500 to-purple-400  px-4 py-6 rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
            <h4 className='text-black text-lg font-black'>Mobile Carrier</h4>
            <h3 className='text-black mt-2 leading-7 '>Mobile Carrier Nova Labs and T-Mobile Collaborate on Cryptocarrier, Helium Mobile</h3>
          </div>
          <div className='flex flex-col  bg-gradient-to-t from-blue-500 to-blue-400  px-4 py-6  rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
            <h4 className='text-black text-lg font-black'>Coverage Integration</h4>
            <h3 className='text-black mt-2 leading-7 '>Helium Connects Senet Customers in NYC</h3>
          </div>
          <div className='flex flex-col bg-gradient-to-t from-green-500 to-green-400  px-4 py-6  rounded-xl w-3/4 md:w-1/4 opacity-90 hover:opacity-100 hover:scale-105 transition duration-200 ease-in'>
            <h4 className='text-black text-lg font-black'>Roaming Partner</h4>
            <h3 className='text-black mt-2 leading-7 '>Actility and Helium Announce Roaming Integration</h3>
          </div>
        </div>
      </div>
     );
}
 
export default LatestNews
;