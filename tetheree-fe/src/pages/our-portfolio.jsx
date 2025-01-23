import Footer from '../../components/Footer'
import Showcase from '../../components/Showcase'
import PortfolioCards from '../../components/PortfolioCards'

const Index = () => {

  return (
    <>
      <Showcase
        supTitle={'Who we are'}
        title={'Our Portfolio'}
        subTitle={'Unlock the future of efficiency with our cutting-edge automation solutions. We specialize in connecting people through innovative processes, allowing humans to focus on what they do best.'}
      />
      <PortfolioCards />
      <Footer />
    </>
  )
}


export default Index