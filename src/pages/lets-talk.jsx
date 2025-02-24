import Footer from '../../components/Footer'
import Showcase from '../../components/Showcase'
import IndustriesWrapper from '../../components/IndustriesPitch';
import PitchPointsWrapper from '../../components/PitchPoints';
import { Tab, H1, H2, H4, H5, H6, H3, Button } from "../../components/Typography";
import { useLocomotiveScroll } from "../../hooks/useLocomotiveScroll";

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <>
    {/* <main ref={scrollRef} data-scroll-container>
      <div data-scroll-section> */}
        <Showcase
          contactForm
          supTitle={'Ready to work with us?'}
          title={'Let’s Talk!'}
          subTitle={'We specialize in connecting people through innovative processes, allowing humans to focus on what they do best.'}
        />
        <section className='bg-white py-99'>
          <div className="container flex flex-col items-center lg:max-w-[1000px] mx-auto px-20 md:px-64">
            <div className='text-center'>
              <H1 className={'!text-black'}>We are excited to work with you on your next project!</H1>
              <H5 className='!text-black py-20'>Let’s create something amazing together. Reach out to discuss your project and see how Tetheree  can help your SaaS startup succeed.</H5>
              <H1 className={'!text-black transition-all cursor-pointer hover:underline'}>hello@tetheree.com</H1>
            </div>
          </div>
        </section>
        <Footer />
      {/* </div>
    </main> */}
    </>
  )
}


export default Index