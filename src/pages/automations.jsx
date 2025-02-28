import Link from 'next/link'
import Footer from '../../components/Footer'
import Showcase from '../../components/Showcase'
import { IndustryWrapper } from '../../components/Section';
import { useLocomotiveScroll } from "../../hooks/useLocomotiveScroll";
import { Tab, H1, H2, H3, H4, H5, H6, Paragraph, Button } from "../../components/Typography";

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <>
      {/* <main ref={scrollRef} data-scroll-container>
      <div data-scroll-section> */}
      <Showcase
        primaryBtn={false}
        title={'Customized Automations'}
        subTitle={'Streamline your workflows with our fully customizable automation solutions. We automate and monitor tasks, ensuring efficiency at every step. From routine tasks to complex processes, our automation tools are designed to keep your business running smoothly and efficiently.'}
      />
      <div id="automations">
        <div className='relative'>
          <div className="relative">
            <IndustryWrapper
              title={false}
              subTitleClassName={'!text-center'}
              containerClassName={'max-w-full lg:max-w-[1000px] flex justify-center !mx-auto'}
              btnClassName='bg-[#E95018] text-white uppercase md:h-72'
            >
              <H2 className={`!text-center font-semibold mb-36`}>Customized Automations</H2>

              <H6 className={'text-center mb-36 md:mb-55'}>Streamline your workflows with our fully customizable automation solutions. We automate and monitor tasks, ensuring efficiency at every step. From routine tasks to complex processes, our automation tools are designed to keep your business running smoothly and efficiently.</H6>

              <Link href={'/about-us'}>
                <Button className={'w-fit flex !bg-transparent text-white uppercase mx-auto'}>LEARN ABOUT US</Button>
              </Link>
            </IndustryWrapper>

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

            <div className='bg-theme w-full pb-99'>
              <div className='w-[320px] flex h-1 bg-[#E95018] mx-auto' />
            </div>
          </div>
          <img className='absolute top-0 left-2/4 -translate-x-2/4 pointer-events-none' src="/assets/homepage-tabs-blur.svg" alt="" />
        </div>
      </div>
      <Footer />
      {/* </div>
    </main> */}
    </>
  )
}


export default Index