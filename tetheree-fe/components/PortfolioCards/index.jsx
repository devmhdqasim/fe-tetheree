const Index = ({ }) => {
    return (
        <section className='relative bg-theme py-64 md:py-99'>
            <div className="container relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-26 mx-auto px-20 md:px-64">
                {[...Array(7)]?.map((item, _index) => (
                    <div className='w-full bg-[#E4E4E7] text-center rounded-xl mb-24 md:mb-42'>
                        <div className='w-full p-32'>
                            <div className='flex items-stretch gap-4'>
                                <div className='w-fit bg-[#1C1C1E] text-white text-12 font-normal rounded-lg py-8 px-12'>Development</div>
                                <div className='w-fit bg-[#1C1C1E] text-white text-12 font-normal rounded-lg py-8 px-12'>Design</div>
                            </div>
                            <img className='w-fit max-w-full h-72 my-32' src="/assets/flash-network.svg" alt="" />
                            <span className='block !text-[#71717A] !text-left text-13 font-normal'>Let’s create something amazing together. Reach out to discuss your project and see how Tetheree  can help your SaaS startup succeed.</span>
                        </div>
                        <div className='border-t border-[#D4D4D8] py-18'>
                            <div className='flex items-center justify-between gap-20 px-32'>
                                <button className='bg-transparent outline-none shadow-none border-none font-medium text-[#1C1C1E] transition-all hover:underline text-13'>VIEW Details</button>
                                <div className='w-24 h-24 aspect-square flex items-center justify-center bg-white rounded-full'>
                                    <img className='shrink-0' src="/assets/portfolio-arrow.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img className="w-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 object-cover" src="/assets/about-us-blur.svg" alt="" />
        </section>
    )
}

export default Index;