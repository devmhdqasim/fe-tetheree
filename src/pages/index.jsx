import Footer from '../../components/Footer';
import Showcase from '../../components/Showcase';
import ScrollToTop from '../../components/ScrollToTop';
import IndustriesWrapper from '../../components/IndustriesPitch';
import PitchPointsWrapper from '../../components/PitchPoints';
import { FeaturedProduct, VideoContent } from '../../components/Section';
import { useLocomotiveScroll } from "../../hooks/useLocomotiveScroll";

const Index = () => {
  const { scrollRef } = useLocomotiveScroll();

  return (
    <>
      {/* <main ref={scrollRef} data-scroll-container>
        <div data-scroll-section> */}
          <Showcase headerImg secondaryBtn supTitle={'We Build Solution for the industry'} />
          <IndustriesWrapper />
          <PitchPointsWrapper />

          <FeaturedProduct
            title="Channel Partnerships"
            subTitle="Expand your business opportunities through our channel partnership program. By reselling our solutions, you can grow your presence in your verticals and offer your clients the very best in efficiency and automation."
            btnTitle="Get Started"
          />

          <FeaturedProduct
            title="Feature Products"
            containerClassName="!relative !bg-theme !pb-99"
            subTitle="Explore our suite of feature products, designed to bring automation and efficiency to the forefront of your operations:"
            featuredBlur="/assets/featured-blur.svg"
          />

          <VideoContent />
          <Footer />
        {/* </div>
      </main> */}
    </>
  );
};

export default Index;