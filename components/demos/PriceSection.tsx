import WordFadeIn from "@/components/magicui/word-fade-in";

const plans = [
        {
            name: "Portfolio",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 4999,
            isMostPop: false,
            features: [
                "Static Website",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",

            ],
        },
        {
            name: "Startup",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 14999,
            isMostPop: true,
            features: [
                "Curabitur faucibus",
                "massa ut pretium maximus",
                "Sed posuere nisi",
                "Pellentesque eu nibh et neque",
                "Suspendisse a leo",
                "Praesent quis venenatis ipsum",
                "Duis non diam vel tortor",
            ],
        },
        {
            name: "Enterprise",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            price: 49999,
            isMostPop: false,
            features: [
                "Backend Heavy",
                "Scalable and Secure",
                "Time Flexibility",
                "Continous Maintenence and Updates",
                "Quick Emergency Support",
                "Marketing Support"
            ],
        },
    ];




export default function PriceSection () {
    return (
        <section className='py-3'>
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className='relative max-w-xl mx-auto sm:text-center'>
                    <WordFadeIn
            className="text-3xl pt-20 lg:text-5xl font-semibold max-w-3xl mx-auto md:text-center   z-20  "
            words="Pricing"
          />
                    <div className='mt-3 max-w-xl'>
                         <p className="text-center  mx-auto  text-xl md:text-2xl text-gray-500">
          We offer a range of pricing options to suit your needs.
        </p>
                    </div>
                </div>
                <div className='mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3'>
                    {
                        plans.map((item, idx) => (
                            <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                                {
                                    item.isMostPop ? (
                                        <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-gray-700 text-center text-white text-sm font-semibold">Most popular</span>
                                    ) : ""
                                }
                                <div className="p-8 space-y-4 border-b">
                                    <span className='text-indigo-600 font-medium'>
                                        {item.name}
                                    </span>
                                    <div className='text-gray-800 text-3xl font-semibold'>
                                        ₹{item.price} <span className="text-xl text-gray-600 font-medium">/project</span>
                                    </div>
                                    <p className="font-medium">
                                        {item.desc}
                                    </p>
                                    {/* <button className='px-3 py-3 rounded-lg w-full font-medium text-sm duration-150 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700'>
                                        Get Started
                                    </button> */}
                                </div>
                                <ul className='p-8 space-y-3'>
                                    <li className="pb-2 text-gray-800 font-medium">
                                        <p>Key Features</p>
                                    </li>
                                    {
                                        item.features.map((featureItem, idx) => (
                                            <li key={idx} className='flex items-center gap-5nfont-medium'>
                                                <svg
                                                    xmlns='http://www.w3.org/2000/svg'
                                                    className='h-5 w-5 text-blue-600'
                                                    viewBox='0 0 20 20'
                                                    fill='currentColor'>
                                                    <path
                                                        fill-rule='evenodd'
                                                        d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
                                                        clip-rule='evenodd'></path>
                                                </svg>
                                                {featureItem}
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};