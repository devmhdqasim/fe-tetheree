import Footer from '../../components/Footer'
import Showcase from '../../components/Showcase'
import PortfolioCards from '../../components/PortfolioCards'
import { useLocomotiveScroll } from "../../hooks/useLocomotiveScroll";

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <main ref={scrollRef} data-scroll-container>
      <div data-scroll-section>
        <Showcase
          supTitle={'Who we are'}
          title={'Our Portfolio'}
          subTitle={'Unlock the future of efficiency with our cutting-edge automation solutions. We specialize in connecting people through innovative processes, allowing humans to focus on what they do best.'}
        />
        <PortfolioCards />
        <Footer />
      </div>
    </main>
  )
}


export default Index