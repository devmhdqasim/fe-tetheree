import Footer from '../../components/Footer'
import Showcase from '../../components/Showcase'
import BlogCards from '../../components/BlogCards'
import { useLocomotiveScroll } from "../../hooks/useLocomotiveScroll";

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <main ref={scrollRef} data-scroll-container>
      <div data-scroll-section>
        <Showcase
          supTitle={'Who we are'}
          title={'Our Blog'}
          subTitle={'Unlock the future of efficiency with our cutting-edge automation solutions. We specialize in connecting people through innovative processes, allowing humans to focus on what they do best.'}
        />
        <BlogCards />
        <Footer />
      </div>
    </main>
  )
}


export default Index