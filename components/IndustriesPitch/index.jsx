import Link from 'next/link';
import { useState } from 'react';
import { Tab, H6, H3, Button } from "../Typography";
import { IndustryWrapper } from '../../components/Section';

const Index = () => {
    const [selectedTab, setSelectedTab] = useState('Customized Automations')
    const [selectedIndustriesTab, setSelectedIndustriesTab] = useState('Education')

    return (
        <>
            <section data-scroll-section className='hidden md:block bg-theme'>
                <div className="container flex items-start gap-80 mx-auto px-20 pr-46">
                    <div data-scroll className='w-fit text-white ml-auto'>
                        <span className='block text-base font-semibold transition-all cursor-pointer hover:underline mb-6'>+1 800 123 654 987</span>
                        <span className='text-base font-semibold transition-all cursor-pointer hover:underline mb-6'>mohsin@tetheree.com</span>
                    </div>
                    <div data-scroll className='w-fit text-white'>
                        <span className='block text-base font-semibold transition-all cursor-pointer hover:underline mb-6'>27 Division St, New York,</span>
                        <span className='text-base font-semibold transition-all cursor-pointer hover:underline mb-6'> NY 10002, USA</span>
                    </div>
                </div>
            </section>

            <IndustryWrapper
                titleClassName='text-theme'
                title='Services'
                btnClassName='bg-[#E95018] text-white uppercase md:h-72'
                subTitle='Unlock the future of efficiency with our cutting-edge automation solutions. We specialize in connecting people through innovative processes, allowing humans to focus on what they do best. Our tailored efficiency solutions are designed to meet the unique needs of your business, integrating seamlessly with existing workflows and use cases. Harness the power of artificial intelligence to streamline operations across various platforms, including:'
                btnTitle='Start your free trial'
            >
                <section className='flex items-baseline gap-16 flex-wrap mb-30'>
                    {['Enterprise Resource Planning', 'Customer Relationship Managment', 'Content Managment System', 'Transportation Managment System', 'Learning Managment System']?.map((item, _index) => {
                        let word = item?.trim()?.split(" ")
                        return (
                            <Tab key={_index} className={`${true && 'hover:!bg-white hover:!text-black'}`}>
                                <span>{word?.[0]}</span>
                                <span>{word?.slice(1)?.join(" ")}</span>
                            </Tab>
                        )
                    })}
                </section>
                <div className='mb-[56px]'>
                    <H6 className='font-normal w-full text-left mb-30'>Additionally, we offer specialized platforms for diverse needs:</H6>
                    <section className='flex items-baseline gap-16 flex-wrap'>
                        {['Coaching Platform', 'Property Management Platform', 'Media Platform']?.map((item, _index) => (
                            <Tab key={_index} className={`${true && 'hover:!bg-white hover:!text-black'}`}>
                                <span>{item}</span>
                            </Tab>
                        ))}
                    </section>
                </div>
            </IndustryWrapper>

            <IndustryWrapper
                titleClassName='text-theme'
                title='Industries'
                subTitleClassName='w-full md:w-4/6 mb-46'
                btnClassName='bg-[#E95018] text-white uppercase md:h-72'
                subTitle='Our expertise spans a broad spectrum of industries, ensuring that no matter your field, we have the tools to drive your success:'
            >
                <div className='mb-30'>
                    <section className='flex items-stretch gap-16 flex-wrap xl:flex-nowrap'>
                        {['Logistics', 'Manufacturing', 'Education', 'Coaching', 'Property Management', 'Eco Travel', 'Concierge Services']?.map((item, _index) => (
                            <Tab key={_index} onClick={() => setSelectedIndustriesTab(item)} className={`${item == selectedIndustriesTab && '!bg-[#E95018] !border-white'} group border border-[#6F6F6F] hover:!bg-[#E95018] hover:!border-white rounded-none`}>
                                <span className={`${item == selectedIndustriesTab && '!text-white'} text-[#6F6F6F] group-hover:text-white font-semibold text-sm xl:text-base`}>{item}</span>
                            </Tab>
                        ))}
                    </section>
                </div>
                <section className='bg-[#121212] flex flex-col lg:flex-row items-center justify-between gap-36 md:gap-99 px-24 md:px-72 pt-36 pb-70'>
                    <div>
                        <H3 className={'!font-semibold mb-24'}>{selectedIndustriesTab}</H3>
                        <H6>Streamline your logistics operations with our AI-powered automation solutions. We specialize in optimizing supply chains, reducing costs, and improving efficiency.</H6>
                    </div>
                    <img className='w-full md:w-full px-20 md:pr-0' src="/assets/logistics-graphic.svg" alt="" />
                </section>
            </IndustryWrapper>

            <div className='relative'>
                <div className="relative">
                <IndustryWrapper
                    titleClassName='hidden sm:block text-theme !text-center mb-36'
                    title={selectedTab ?? 'Customized Integrations'}
                    subTitleClassName={'!text-center'}
                    containerClassName={'max-w-full lg:max-w-[1000px] flex justify-center !mx-auto'}
                    btnClassName='bg-[#E95018] text-white uppercase md:h-72'
                >
                    <div className=''>
                        <section className='flex items-baseline justify-center gap-16 flex-wrap mx-auto mb-54 md:mb-99'>
                            {['Customized Automations', 'Customized Integration', 'SaaS Offerings']?.map((item, _index) => (
                                <Tab onClick={() => setSelectedTab(item)} key={_index} className={`${selectedTab == item && '!bg-[#E95018] !border-[#E95018]'} flex-grow border border-[#6F6F6F] hover:!bg-[#E95018] hover:!border-[#E95018] rounded-none`}>
                                    <span className={`${selectedTab == item && '!text-white'} hover:!text-white text-[#FAFAFA] font-normal text-md`}>{item}</span>
                                </Tab>
                            ))}
                        </section>
                        {selectedTab == 'Customized Automations' && (
                            <H6 className={'text-center mb-36 md:mb-55'}>Streamline your workflows with our fully customizable automation solutions. We automate and monitor tasks, ensuring efficiency at every step. From routine tasks to complex processes, our automation tools are designed to keep your business running smoothly and efficiently.</H6>
                        )}
                        {selectedTab == 'Customized Integration' && (
                            <H6 className={'text-center mb-36 md:mb-55'}>Maximize the potential of industry-leading tools with our customized integration solutions. We help you make the most of what's available in the market by seamlessly incorporating leading technologies into your existing systems, complete with recognizable integration logos.</H6>
                        )}
                        {selectedTab == 'SaaS Offerings' && (
                            <H6 className={'text-center mb-36 md:mb-55'}>Our Software as a Service (SaaS) offerings provide efficiency and workflow optimization for a wide range of verticals. Here are just a few examples of how our solutions can be applied:</H6>
                        )}

                        <Link href={'/about-us'}>
                            <Button className={'w-fit flex !bg-transparent text-white uppercase mx-auto'}>LEARN ABOUT US</Button>
                        </Link>

                        {selectedTab == 'SaaS Offerings' && (
                            <div className='mt-36 md:mt-55'>
                                <section className='flex items-stretch justify-center gap-16 flex-wrap lg:flex-nowrap mx-auto mb-26'>
                                    {['Streamlined logistics management', 'Advanced media production workflows', 'Comprehensive coaching management tools', 'Optimized educational platforms']?.map((item, _index) => (
                                        <Tab key={_index} className={`!min-w-[240px] ${false && '!bg-[#E95018] !border-white !text-white'} !h-auto w-full flex-grow hover:!bg-[#E95018] hover:!border-white hover:!text-white pt-40 pb-26`}>
                                            <img className='mb-24' src={`/assets/industries/industry-${++_index}.svg`} alt="" />
                                            <span className={`${false && '!text-white'} text-[#FAFAFA] font-normal text-center hover:!text-white text-md`}>{item}</span>
                                        </Tab>
                                    ))}
                                </section>
                            </div>
                        )}
                    </div>
                </IndustryWrapper>

                {selectedTab == 'Customized Automations' && (
                    <IndustryWrapper
                        titleClassName='text-theme !text-center mb-36'
                        title='Industries'
                        subTitleClassName={'!text-center'}
                        containerClassName={'max-w-full lg:max-w-[1000px] flex justify-center !mx-auto -mt-36'}
                        subTitle='Our automation solutions are tailor-made for a variety of industries, ensuring that you get the most out of your operations:'
                        btnClassName='bg-[#E95018] text-white uppercase md:h-72'
                    >
                        <div className=''>
                            <section className='flex items-stretch justify-center gap-16 flex-wrap lg:flex-nowrap mx-auto mb-99'>
                                {['Supply Chain', 'Media', 'Coaching', 'Education']?.map((item, _index) => (
                                    <Tab key={_index} className={`!min-w-[240px] ${false && '!bg-[#E95018] !border-white !text-white'} !h-auto flex-grow hover:!bg-[#E95018] hover:!border-white hover:!text-white pt-40 pb-26`}>
                                        <img className='mb-24' src={`/assets/industries/industry-${++_index}.svg`} alt="" />
                                        <span className={`text-[#FAFAFA] font-normal text-center text-md`}>{item}</span>
                                    </Tab>
                                ))}
                            </section>
                        </div>
                    </IndustryWrapper>
                )}

                <div className='bg-theme w-full pb-99'>
                    <div className='w-[320px] flex h-1 bg-[#E95018] mx-auto' />
                </div>
                </div>
                <img className='absolute top-0 left-2/4 -translate-x-2/4 pointer-events-none' src="/assets/homepage-tabs-blur.svg" alt="" />
            </div>
        </>
    )
}

export default Index;