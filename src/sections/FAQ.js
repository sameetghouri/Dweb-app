const FAQ1 = () => {
    const faq = [
        {
            q: 'What are Intelligent Signals?',
            a: 'Intelligent Signals is an ecosystem that utilizes Artificial Intelligence (AI) and Visual Signalling Technology (VST) to analyze crypto charts and identify optimal market entry and exit points for trading cryptocurrencies. It includes the Intelligent Signals Token (INSIG) as the exclusive means of subscribing to the platform. The INSIG token also incorporates a crypto trading bot for automated trading.'
        },
        {
            q: 'Why should i use Intelligent Signals?',
            a: "Intelligent Signals is designed to improve traders' performance and consistency in decision-making. It offers an automated and intelligent approach to crypto selection and trading, allowing for 24/7 monitoring and execution of trades without manual intervention. With a 70% success rate, it provides traders with a more reliable and hands-free trading experience."
        },
        {
            q: 'How does Intelligent Signals utilize pattren recognition?',
            a: "Intelligent Signals leverages AI and Machine Learning to analyze over 23,000 crypto charts and identify chart patterns. These patterns are ranked based on importance, providing traders with a competitive advantage. The Visual Signalling Technology (VST) developed by Intelligent Signals uses a color scheme (red, amber, and green) to simplify the identification and interpretation of patterns."
        },
        {
            q: 'What features does Intelligent Signals offers?',
            a: 'Intelligent Signals offers several essential features, including a trading bot for automated trading based on market signals and user-defined parameters. It also provides a strategy builder and backtester for traders to create and test their trading strategies. Additionally, it incorporates a risk profiler, staking opportunities, new listing alerts, and a community-centric ecosystem.'
        },
        {
            q: 'How does Intelligent Signals contribute to cryptocurrency market?',
            a: 'Intelligent Signals contributes to the cryptocurrency market by providing accurate trading signals based on technical analysis and AI. Its pattern recognition technology, GANN analytics, and cognitive recognition enable traders to forecast market movements and make informed trading decisions. The platform aims to improve risk management, offer timely market insights, and create a transparent and engaged community within the crypto space.'
        }
    ]
    return (
        <div className=' py-8 bg-gray-100 min-h-screen w-full flex flex-col items-center gap-8 '>
            <div>
                <div className=' py-8 bg-gray-100 min-h-screen w-full flex flex-col items-center gap-8 '>
                    <h2 className='text-5xl py-12 px-4 font-bold text-black'>Frequently Asked  <span className='text-green-500'>Questions</span> </h2>

                    {faq.map((item, index) => {
                        return(
                            <div className="w-4/5 collapse collapse-arrow bg-white shadow-lg" key={index}>
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl text-black font-bold">
                            {item.q}
                        </div>
                        <div className="collapse-content border-l-4 border-green-500">
                            <p className="text-gray-700 text-lg">{item.a}</p>
                        </div>
                    </div>
                        )
                    })}


                </div>
            </div>
        </div>
    );
}

export default FAQ1;