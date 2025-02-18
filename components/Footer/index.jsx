import { useState } from 'react'
import Arrow from '../Typography/Arrow'
import { H1, H2, H6, Button, Paragraph, Caption } from '../Typography'

const Index = ({ }) => {

    return (
        <footer className='relative bg-theme pt-72 md:pt-162 overflow-hidden'>
            <div className="container relative z-10 mx-auto px-20 md:px-24 lg:px-32">
                <div className=''>
                    <H1 className={'block md:hidden mr-auto'}>Get in touch with us</H1>
                    <section className='w-full flex items-start gap-99 mb-54 md:mb-20'>
                        <H1 className={'hidden md:block mr-auto'}>Get in touch with us</H1>
                        <ul>
                            {['Home', 'Community', 'Contacts', 'Investors']?.map((item, _index) => (
                                <li key={_index} className='text-[#FAFAFA] text-base md:text-sm font-normal transition-all cursor-pointer hover:underline mb-12'>{item}</li>
                            ))}
                        </ul>
                        <div>
                            <ul className='mb-32'>
                                {['Terms & Conditions', 'Privacy Policy', 'Investor Privacy Notice', 'Cookies Policy']?.map((item, _index) => (
                                    <li key={_index} className='text-[#FAFAFA] text-[12px] font-normal transition-all cursor-pointer hover:underline mb-4'>{item}</li>
                                ))}
                            </ul>
                            <ul>
                                {['Twitter', 'Linkedin', 'Medium']?.map((item, _index) => (
                                    <li key={_index} className='text-[#FAFAFA] text-[12px] font-normal transition-all cursor-pointer hover:underline mb-4'>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </section>
                    <section className='flex flex-col md:flex-row items-start gap-36 md:gap-99'>
                        <div className=''>
                            <div className='text-[#FAFAFA] font-normal text-2xs mb-32'>
                                <span className='block transition-all cursor-pointer hover:underline mb-4'>4517 Washington Ave.</span>
                                <span className='transition-all cursor-pointer hover:underline'>Manchester, Kentucky 39495</span>
                            </div>
                            <div className='hidden md:block text-[#FAFAFA] font-normal text-2xs mb-32'>
                                <span className='block transition-all cursor-pointer hover:underline mb-4'>4140 Parker Rd. Allentown, New</span>
                                <span className='transition-all cursor-pointer hover:underline'>Mexico 31134</span>
                            </div>
                            <div className='hidden md:block text-[#FAFAFA] font-normal text-2xs mb-32'>
                                <span className='block transition-all cursor-pointer hover:underline mb-4'>3891 Ranchview Dr.</span>
                                <span className='transition-all cursor-pointer hover:underline'>Richardson, California 62639</span>
                            </div>
                        </div>
                        <div>
                            <input className='w-full h-80 bg-black border border-[#18181B] text-white !outline-none !shadow-none text-2xs transition-all focus:!border-[#3a3a42] rounded-none pl-32 pr-16' type="text" placeholder='Email address' />
                            <textarea className='w-full h-180 bg-black border !border-[#18181B] text-white !outline-none !shadow-none transition-all focus:!border-[#3a3a42] text-2xs rounded-none pt-32 pl-32 pb-16 pr-16' type="text" placeholder='Your message' />
                            <div className='group flex items-center justify-between w-fulll h-64 relative border-l !border-l-[#F3722C] transition-all hover:!border-[#3a3a42] cursor-pointer py-24 px-32'>
                                <span className='text-xs text-white font-normal uppercase'>Send</span>
                                <span className='relative flex items-center justify-center transition-all group-hover:translate-x-24 border border-transparent aspect-square rounded-full p-4'>
                                    <Arrow />
                                </span>
                            </div>
                        </div>
                    </section>
                    <section className='w-full flex items-center justify-center md:justify-between py-52'>
                        <Paragraph className='text-white text-center md:text-left text-[12px] font-medium'>Tetheree © All rights reserved</Paragraph>
                        <Paragraph className='hidden md:block text-white text-[12px] font-medium'>2025</Paragraph>
                    </section>
                </div>
            </div>
            <img className="w-full absolute -bottom-2/4 -right-2/4 object-cover" src="/assets/about-us-blur.svg" alt="" />
        </footer>
    )
}

export default Index;