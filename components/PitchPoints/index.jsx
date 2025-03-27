import { Tab, H6, H3, Button } from "../Typography";
import { PitchPoint } from '../../components/Section'

const Index = () => {
    const icons = [
        {
            id: 0,
            left: 'points/left/promotions.svg',
            middle: 'points/middle/promotions.svg',
            right: 'points/right/promotions.svg',
        },
        {
            id: 1,
            left: 'points/left/guidance.svg',
            middle: 'points/middle/guidance.svg',
            right: 'points/right/guidance.svg',
        },
        {
            id: 2,
            left: 'points/left/collaboration.svg',
            middle: 'points/middle/collaboration.svg',
            right: 'points/right/collaboration.svg',
        },
        {
            id: 3,
            left: 'points/left/logistics.svg',
            middle: 'points/middle/logistics.svg',
            right: 'points/right/logistics.svg',
        },
        {
            id: 4,
            left: 'points/left/sales.svg',
            middle: 'points/middle/sales.svg',
            right: 'points/right/sales.svg',
        }
    ]


    return (
        <div className="bg-theme relative z-10 pb-99">
            <PitchPoint
                number='01'
                title='PROMOTIONS'
                subTitle='Is your business having trouble standing out? Maybe it’s time to put a little imagination into your marketing. Explore new and exciting ways to promote your business and give potential customers an experience they’ll never forget, so that, when it matters, they’ll remember you.'
                icons={icons?.[0]}
            />

            <PitchPoint
                number='02'
                titleClassName='text-theme'
                title='GUIDANCE'
                subTitle='If you’re not sure where to start, that doesn’t mean you can’t. Bring us your goals and the challenges you’re facing. We’ll work with you to audit your current systems and processes, and then come up with solutions that meet your needs.'
                icons={icons?.[1]}
            />

            <PitchPoint
                number='03'
                title='COLLABORATION'
                subTitle='A connected team is a winning team. Don’t let disorganization run rampant and burn through your company’s resources. Let us put together a collaborative platform that helps manage staff, projects, and customers more effectively.'
                icons={icons?.[2]}
            />

            <PitchPoint
                number='04'
                title='LOGISTICS'
                subTitle='When your fleet moves efficiently, costs come down and your customers perk up. We build systems that help your products and people get from Point A to Point B in the best way possible, so you can focus on scaling your business to reach new heights.'
                icons={icons?.[3]}
            />

            <PitchPoint
                number='05'
                title='SALES'
                subTitle='When you increase your sales efficiencies, your profits will come along for the ride. Let us diagnose your current sales flow, and we’ll create a custom solution that helps your salespeople spend more time selling, and gives them the tools needed to convert more leads into customers.'
                icons={icons?.[4]}
            />

        </div>
    )
}

export default Index;