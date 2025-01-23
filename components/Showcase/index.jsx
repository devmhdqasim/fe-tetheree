import Navbar from '../Navbar'
import { H1, H4, H5, Caption, Button } from "../Typography";

const Index = ({ supTitle, title, subTitle, headerImg = false, contactForm, secondaryBtn = false }) => {
    return (
        <header className="bg-theme relative">
            <div className='relative z-10'>
                <Navbar />
                <div className="container mx-auto">
                    <section className='w-full flex flex-col md:flex-row justify-between py-76 md:pt-[200px] md:pb-[240px] gap-72 md:gap-32 px-20 md:px-54'>
                            <div className='relative'>
                                <div className='relative z-10'>
                            <H5 className='hidden md:block text-white font-medium mb-16'>{supTitle ?? 'We Build Solution for the industry'}</H5>
                            <H1 data-scroll className='text-left pr-0 lg:pr-64 mb-16'>{title ?? `Custom software for team collaboration`}</H1>
                            <H4 className='w-full text-left text-white mb-36 md:mb-64'>{subTitle ?? 'We specialize in connecting people through innovative processes, allowing humans to focus on what they do best.'}</H4>
                            <div className='flex flex-wrap items-baseline gap-20 md:gap-3'>
                                <Button className='!bg-[#E95018] text-white !h-60 lg:!h-72 uppercase md:!text-2xs px-26 md:px-36'>Get Started</Button>
                                {secondaryBtn && <Button className='!bg-transparent text-white !h-60 lg:!h-72 uppercase md:!text-base px-26 md:px-36'>About Us</Button>}
                            </div>
                            </div>
                            <img className="w-fit absolute top-2/4 -translate-y-2/4 object-cover -z-[1]" src="/assets/header-blur.png" alt="" />
                        </div>

                        {headerImg && <div className='w-full relative max-w-full h-full'>
                            <img className="w-full relative max-w-full h-full max-h-[400px] object-contain z-10" src="/assets/header.svg" alt="" />
                        </div>}

                        {contactForm && <div className='w-full h-full bg-[#b7b7b921] rounded-3xl p-32 md:p-48 md:pb-68'>
                            <div className='flex flex-col justify-end'>
                                <div className="grid grid-cols-2 gap-12">
                                    <div className='mb-20'>
                                        <label className='block text-2xs text-white font-normal mb-12' htmlFor="">What’s your name?</label>
                                        <input className='w-full h-40 sm:h-50 rounded-md text-[#D8D8D8] px-24' type="text" placeholder='Type your full name' />
                                    </div>
                                    <div className='mb-20'>
                                        <label className='block text-2xs text-white font-normal mb-12' htmlFor="">What’s your email?</label>
                                        <input className='w-full h-40 sm:h-50 rounded-md text-[#D8D8D8] px-24' type="text" placeholder='Type your main email' />
                                    </div>
                                </div>
                                <div className='mb-20'>
                                        <label className='block text-2xs text-white font-normal mb-12' htmlFor="">What’s services are you looking for?</label>
                                        <input className='w-full h-40 sm:h-50 rounded-md text-[#D8D8D8] px-24' type="text" placeholder='Type your service name' />
                                    </div>
                                    <section className='mb-16'>
                                        <label className='block text-2xs text-white font-normal mb-12' htmlFor="">What’s services are you looking for?</label>
                                    <div className="flex items-stretch gap-12">
                                        {[...Array(3)]?.map((item, _index) => (
                                            <div key={_index} className='w-full h-auto bg-[#E4E4E733] rounded-md'>
                                                <span className='block text-2xs sm:text-base text-white text-center font-semibold py-14 sm:py-18'>$5k-10K</span>
                                            </div>
                                        ))}
                                    </div>
                                    </section>
                                    <div className='mb-20'>
                                        <label className='block text-2xs text-white font-normal mb-12' htmlFor="">What’s your budget for this project?</label>
                                        <textarea className='w-full min-h-[120px] rounded-md text-[#D8D8D8] py-18 px-24' type="text" placeholder='Tell us about your Project' />
                                    </div>
                                    <div className="flex">
                                        <Button className='!w-fit !bg-[#E95018] text-white !h-46 sm:!h-60 lg:!h-72 uppercase md:!text-2xs px-26 md:px-36 ml-auto'>Get Started</Button>
                                    </div>
                            </div>
                            </div>}
                    </section>
                </div>
            </div>
            <img className="w-full absolute left-0 bottom-0 object-cover" src="/assets/header-graphic.svg" alt="" />
        </header>
    )
}

export default Index;