import { H1, H2, H3, H4, H5, H6, Button } from '../Typography'

export const FeaturedProduct = ({ containerClassName, title, subTitle, btnClassName, btnTitle, featuredBlur }) => {
    return (
        <section className={`${containerClassName} relative bg-[#121212] py-136`}>
            <div className="container flex flex-col items-center lg:max-w-[1000px] mx-auto px-20 md:px-64">
                <H2 className={'mb-6'}>{title}</H2>
                {subTitle && <H6 className={'text-center mb-50'}>{subTitle}</H6>}
                {btnTitle && <Button className={`${btnClassName} !bg-[#E95018] text-white !h-60 lg:!h-72 uppercase md:!text-2xs px-26 md:px-36`}>{btnTitle}</Button>}
            </div>
            {featuredBlur && <img className="w-fit absolute h-full left-0 top-0" src={featuredBlur} alt="" />}
        </section>
    )
}

export const PitchPoint = ({ number, title, subTitle, subTitleClassName, titleClassName, containerClassName, icons }) => {

    return (
        <div className='bg-theme'> 
            <div className="container flex flex-col mx-auto">
                <section className={`${containerClassName} group w-full flex flex-col xl:flex-row justify-between border border-[#333333] hover:bg-[#121212] hover:border-[#4e4e4e] rounded-sm transition-all gap-30 py-46 md:py-64 px-20 md:px-40 mb-20`}>
                    <div className='flex flex-col md:flex-row items-start gap-18 md:gap-40 mb-8'>
                        <span className='block w-full md:w-auto !text-[#F3722C] text-24 font-normal text-center md:text-left mt-12'>{number}</span>
                        <div className='md:w-4/5'>
                            <H2 className={`${titleClassName} font-semibold text-center md:text-left`}>{title}</H2>
                            {subTitle && <H6 className={`${subTitleClassName} lg:group-hover:translate-x-[10%] font-normal text-[12px] text-[#A1A1AA] leading-5 w-full text-center md:text-left transition-all mb-36`}>{subTitle}</H6>}
                        </div>
                    </div>
                    <div className='flex items-stretch justify-center xl:justify-end transition-all duration-200 opacity-100 xl:opacity-0 xl:group-hover:opacity-100 mt-0 xl:mt-34'>
                        {icons?.map((item, _index) => (
                            <span key={_index} className={`${_index == 0 ? '-right-32' : _index == 1 ? '-right-16' : 'right-0'} relative aspect-square w-full md:w-180 md:h-180 flex items-center justify-center border border-[#2D2D2F] transition-all group-hover:border-[#4e4e4e] rounded-full p-16`}>
                                {_index == 1 && <img className='absolute top-2/4 -translate-y-2/4 left-0' src="/assets/points/arrow-left.svg" alt="" />}
                                <div className={`${_index == 1 && 'bg-[#0D0D0F] group-hover:bg-[#2d2d2d]'} w-3/5 sm:w-full h-full flex items-center justify-center transition-all rounded-full`}>
                                    <img src={`/assets/${item}`} alt="" />
                                </div>
                                {_index == 1 && <img className='absolute top-2/4 -translate-y-2/4 right-0' src="/assets/points/arrow-right.svg" alt="" />}
                            </span>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export const IndustryWrapper = ({ title, subTitle, subTitleClassName, btnTitle, titleClassName, wrapperClassName, containerClassName, btnClassName, children }) => {

    return (
        <div className={`${wrapperClassName} bg-theme`}>
            <div className="container flex flex-col mx-auto">
                <section className={`${containerClassName} w-full flex flex-col justify-center py-46 px-20`}>
                    {title && <H2 className={`${titleClassName} font-semibold text-left mb-8`}>{title}</H2>}
                    {subTitle && <H6 className={`${subTitleClassName} font-normal w-full text-left mb-36`}>{subTitle}</H6>}
                    {children}
                    {btnTitle && <Button className={`${btnClassName} !bg-[#E95018] w-fit !h-70 !text-md`}>{btnTitle}</Button>}
                </section>
            </div>
        </div>
    )
}

export const VideoContent = ({ title, subTitle, subTitleClassName, btnTitle, titleClassName, containerClassName, btnClassName, children }) => {
    return (
        <div className='bg-theme'>
            <div className="container mx-auto">
                <section className='w-full flex flex-col md:flex-row gap-64 md:gap-28 justify-between px-20'>
                    <div className=''>
                        <H1 className='text-center md:text-left mb-14'>Bring the ultimate search to video content</H1>
                        <H4 className='w-full text-center md:text-left !text-[#6D6D6D] mb-26'>"Effortless Integration: Streamline Your Workflow</H4>
                        <H4 className='w-full text-center md:text-left !text-[#6D6D6D] mb-46'>Integrate with any CMS, OMS or carrier platform in a single click to instantly sync your customer data.</H4>
                        <div className='flex items-baseline justify-center md:justify-start gap-3'>
                            <Button className='!bg-[#E95018] text-white !h-60 lg:!h-72 uppercase md:!text-2xs px-26 md:px-36'>Get Started</Button>
                        </div>
                    </div>
                    <div className='w-full relative max-w-full h-full'>
                        <img className="w-full relative max-w-full h-full max-h-[400px] object-contain z-10" src="/assets/video-content.svg" alt="" />
                    </div>
                </section>
            </div>
        </div>
    )
}
