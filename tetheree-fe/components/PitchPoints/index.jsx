import { Tab, H6, H3, Button } from "../Typography";
import { PitchPoint } from '../../components/Section'

const Index = () => {
    return (
        <div className="bg-theme pb-99">
            <PitchPoint
                number='01'
                titleClassName='text-theme'
                title='Accelerator'
                subTitle='Accelerate your growth with our hybrid SaaS offerings, featuring fully customizable single-tenant solutions. There are no limits to what you can achieve with our flexible, scalable technology—designed to evolve with your business.'
            />

            <PitchPoint
                number='02'
                titleClassName='text-theme'
                title='Consulting'
                subTitle='Our consulting services are focused on delivering efficiency solutions that are tailored to suit your specific workflows and use cases. We work closely with you to understand your unique challenges and develop strategies that drive results.'
            />

            <PitchPoint
                number='03'
                titleClassName='text-theme'
                title='Innovation'
                subTitle='Stay ahead of the curve with our commitment to innovation. We leverage the latest technologies—including AI, video, and data solutions—to help you achieve new heights in your industry.'
            />
        </div>
    )
}

export default Index;