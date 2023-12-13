'use client';

import React from 'react';
import { ProductsSlider } from '@/app/components/ui/ProductsSlider';
import { youMightLikeData as data } from '@/app/components/data/you-might-like';

export default function YouMightLikeSection() {
    return (
        <div className="section">
            {/*Heading*/ }
            <h2 className="section-heading mb-0.5">YOU MIGHT LIKE...</h2>

            {/*Slide*/}
            <div className="lg:mt-10">
                <ProductsSlider data={ data }/>
            </div>
        </div>
    );
}