import { IndustryWrapper } from '../../components/Section';
import { Tab, H1, H2, H3, H4, H5, H6, Paragraph, Button } from "../../components/Typography";

const Index = () => {
    return (
        <div className='relative bg-theme'>
            <div className="container relative z-10 flex flex-col px-20 mx-auto">
                <section className={`w-full flex flex-col justify-center pt-46`}>
                    <H2 className={`font-semibold text-left mb-8`}>Our values ​​and commitments</H2>
                    <H6 className={`font-normal w-full text-left mb-36 md:mb-72`}>Unlock the future of efficiency with our cutting-edge automation solutions. We specialize in connecting people through innovative processes, allowing humans to focus on what they do best.</H6>
                </section>
                <section className='flex flex-col md:flex-row flex-wrap lg:flex-nowrap items-stretch justify-between gap-20 mb-99'>
                    {[{ title: 'Transparency', subTitle: 'We are transparent about the benefits and limitations of the solutions we offer you.' }, { title: 'Expertise', subTitle: 'We only work on subjects that we have a perfect command of.' }, { title: 'Accompaniement', subTitle: 'We support you in getting to grips with your new software.' }, { title: 'Advice', subTitle: 'We offer you solutions that are truly adapted to your needs.' }]?.map((item, _index) => (
                        <Tab className={'!block !w-full !h-auto bg-[#E4E4E733] !px-26 !pt-36 !pb-42'} >
                            <img className='w-24 mb-12' src={`/assets/Leaf.svg`} alt="" />
                            <H4 className={`font-medium text-left mb-13`}>{item?.title}</H4>
                            <Paragraph className={`font-normal w-full text-left`}>{item?.subTitle}</Paragraph>
                        </Tab>
                    ))}
                </section>
                <IndustryWrapper
                    titleClassName='text-theme'
                    containerClassName='!pt-26'
                    wrapperClassName='!bg-transparent'
                    btnClassName='bg-[#E95018] text-white uppercase md:h-72'
                >
                    <section className='flex items-baseline gap-16 flex-wrap mb-30'>
                        {['Enterprise Resource Planning', 'Customer Relationship Managment', 'Content Managment System', 'Transportation Managment System', 'Learning Managment System']?.map((item, _index) => {
                            let word = item?.trim()?.split(" ")
                            return (
                                <Tab key={_index} className={`${true && 'hover:!bg-[#E95018] hover:!text-white'}`}>
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
                                <Tab key={_index} className={`${true && 'hover:!bg-[#E95018] hover:!text-white'}`}>
                                    <span>{item}</span>
                                </Tab>
                            ))}
                        </section>
                    </div>
                </IndustryWrapper>
                <section className='flex flex-col md:flex-row items-stretch justify-between gap-24 md:gap-36'>
                    {[
                        { title: 'Our values ​​and commitments', subTitle: 'Unlock the future of efficiency with our cutting-edge automation solutions. We specialize in connecting people through innovative processes, allowing humans to focus on what they do best.' },
                        { title: 'Customized Automation', subTitle: 'Maximize the potential of industry-leading tools with our customized integration solutions. We help you make the most of whats available in the market by seamlessly' }
                    ]?.map((item, _index) => (
                        <div key={_index} className='bg-[#01000099] border border-[#5C5C5C] rounded-md pt-36 pb-26 px-42'>
                            <H4 className={`font-semibold text-left mb-13`}>{item?.title}</H4>
                            <Paragraph className={`font-normal w-full text-left mb-24`}>{item?.subTitle}</Paragraph>
                            <Button className='!bg-transparent text-white !h-60 lg:!h-72 uppercase md:!text-base !pl-0 pr-26 md:pr-36'>GET A QUOTE</Button>
                        </div>
                    ))}
                </section>
            </div>
            <img className="w-full absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 object-cover" src="/assets/about-us-blur.svg" alt="" />
        </div>
    )
}

export default Index;