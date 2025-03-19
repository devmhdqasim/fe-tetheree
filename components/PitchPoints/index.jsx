import { Tab, H6, H3, Button } from "../Typography";
import { PitchPoint } from '../../components/Section'

const Index = () => {
    return (
        <div className="bg-theme relative z-10 pb-99">
            <PitchPoint
                number='01'
                titleClassName='text-theme'
                title='Promotions'
                subTitle='Accelerate your growth with our hybrid SaaS offerings, featuring fully customizable single-tenant solutions. There are no limits to what you can achieve with our flexible, scalable technology—designed to evolve with your business.'
                icons={['points/point-1.svg', 'points/point-2.svg', 'points/point-3.svg']}
            />

            <PitchPoint
                number='02'
                titleClassName='text-theme'
                title='Guidance'
                subTitle='Our consulting services are focused on delivering efficiency solutions that are tailored to suit your specific workflows and use cases. We work closely with you to understand your unique challenges and develop strategies that drive results.'
                icons={['points/point-1.svg', 'points/point-2.svg', 'points/point-3.svg']}
            />

            <PitchPoint
                number='03'
                titleClassName='text-theme'
                title='Collaboration'
                subTitle='Stay ahead of the curve with our commitment to innovation. We leverage the latest technologies—including AI, video, and data solutions—to help you achieve new heights in your industry.'
                icons={['points/point-1.svg', 'points/point-2.svg', 'points/point-3.svg']}
            />

            <PitchPoint
                number='04'
                titleClassName='text-theme'
                title='Logistics'
                subTitle='Stay ahead of the curve with our commitment to innovation. We leverage the latest technologies—including AI, video, and data solutions—to help you achieve new heights in your industry.'
                icons={['points/point-1.svg', 'points/point-2.svg', 'points/point-3.svg']}
            />

            <PitchPoint
                number='05'
                titleClassName='text-theme'
                title='Sales'
                subTitle='Stay ahead of the curve with our commitment to innovation. We leverage the latest technologies—including AI, video, and data solutions—to help you achieve new heights in your industry.'
                icons={['points/point-1.svg', 'points/point-2.svg', 'points/point-3.svg']}
            />
        </div>
    )
}

export default Index;