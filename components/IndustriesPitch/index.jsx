import Link from 'next/link';
import { useState } from 'react';
import { Tab, H2, H6, H3, Button } from "../Typography";
import { IndustryWrapper } from '../../components/Section';

const Index = () => {

    return (
        <>
            <section className='hidden md:block bg-theme pb-32 lg:pb-42'>
                <div className="container flex items-start gap-80 mx-auto px-20 pr-46">
                    <div data-scroll className='w-fit text-white ml-auto'>
                        <span className='block text-base font-semibold transition-all cursor-pointer hover:underline mb-6'>+1 800 123 654 987</span>
                        <span className='text-base font-semibold transition-all cursor-pointer hover:underline mb-6'>mohsin@tetheree.com</span>
                    </div>
                    <div data-scroll className='w-fit text-white'>
                        <span className='block text-base font-semibold transition-all cursor-pointer hover:underline mb-6'>27 Division St, New York,</span>
                        <span className='text-base font-semibold transition-all cursor-pointer hover:underline mb-6'> NY 10002, USA</span>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Index;
