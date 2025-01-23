import Footer from '../../components/Footer'
import Showcase from '../../components/Showcase'
import ScrollToTop from '../../components/ScrollToTop'
import IndustriesWrapper from '../../components/IndustriesPitch';
import PitchPointsWrapper from '../../components/PitchPoints';
import { Tab, H1, H2, H4, H5, H6, H3, Button } from "../../components/Typography";
import { FeaturedProduct, VideoContent } from '../../components/Section'
const Index = () => {

  return (
    <>
      <Showcase headerImg secondaryBtn />
      <IndustriesWrapper />
      <PitchPointsWrapper />
      <FeaturedProduct
        title={'Channel Partnerships'}
        subTitle={'Expand your business opportunities through our channel partnership program. By reselling our solutions, you can grow your presence in your verticals and offer your clients the very best in efficiency and automation.'}
        btnTitle={'Get Started'}
      />
      <FeaturedProduct
        title={'Feature Products'}
        containerClassName={'!relative !bg-theme !pb-99'}
        subTitle={'Explore our suite of feature products, designed to bring automation and efficiency to the forefront of your operations:'}
        featuredBlur='/assets/featured-blur.svg'
      />
      <VideoContent />
      {/* <ScrollToTop /> */}
      <Footer />
    </>
  )
}


export default Index