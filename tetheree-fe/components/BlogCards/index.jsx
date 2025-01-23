import { Tab, H1, H2, H4, H5, H6, H3, Button } from "../../components/Typography";

const Index = ({ }) => {
    return (
        <section className='relative bg-theme pt-36 pb-64 md:pb-99'>
            <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-26 mx-auto px-20 md:px-64">
                {[...Array(6)]?.map((item, _index) => (
                    <div className='w-full border border-[#18181B] rounded-none mb-26 md:mb-42'>
                        <div className='w-full p-32'>
                            <div className='flex items-stretch gap-4 mb-32'>
                                <div className='w-fit bg-[#1C1C1E] text-white text-12 font-normal rounded-lg py-3 px-8'>Development</div>
                                <div className='w-fit bg-[#1C1C1E] text-white text-12 font-normal rounded-lg py-3 px-8'>Design</div>
                            </div>
                            <H4 className='block !text-white !text-left text-13 font-normal mb-72'>LG created a high-end line of kitchen appliances.</H4>
                        </div>
                        <div className='py-18'>
                            <div className='flex items-center justify-between gap-20 px-32'>
                                <div>
                                    <h4 className='text-white text-2xs'>Jerome Bell</h4>
                                    <span className='text-[#71717A] text-12'>21 Feb 23</span>
                                </div>
                                <div className='w-24 h-24 aspect-square flex items-center justify-center bg-[#FAFAFA] rounded-full'>
                                    <img className='shrink-0' src="/assets/portfolio-arrow.svg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <img className="max-w-full absolute bottom-1/4 left-2/4 -translate-x-2/4 object-cover" src="/assets/about-us-blur.svg" alt="" />
        </section>
    )
}

export default Index;