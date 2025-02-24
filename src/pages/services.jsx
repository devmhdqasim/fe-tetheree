import Footer from '../../components/Footer'
import Showcase from '../../components/Showcase'
import ValuesCommitments from '../../components/ValuesCommitments'
import { useLocomotiveScroll } from "../../hooks/useLocomotiveScroll";

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <>
    {/* <main ref={scrollRef} data-scroll-container>
      <div data-scroll-section> */}
        <Showcase
          supTitle={'Who we are'}
          title={'Services'}
          subTitle={'Unlock the future of efficiency with our cutting-edge automation solutions. We specialize in connecting people through innovative processes, allowing humans to focus on what they do best. Our tailored efficiency solutions are designed to meet the unique needs of your business, integrating seamlessly with existing workflows and use cases. Harness the power of artificial intelligence to streamline operations across various platforms, including:'}
        />
        <ValuesCommitments />
        <Footer />
      {/* </div>
    </main> */}
    </>
  )
}


export default Index