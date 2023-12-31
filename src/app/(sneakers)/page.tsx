import React from 'react';
import { Metadata } from 'next';
import HomeCarousel from '@/app/components/templates/HomeCarousel';
import PageScrolling from '@/app/components/templates/PageScrolling';
import TopTrendingSection from '@/app/components/templates/TopTrendingSection';
import VideoSection from '@/app/components/templates/VideoSection';
import YouMightLikeSection from '@/app/components/templates/YouMightLikeSection';
import HomeBanner from '@/app/components/templates/HomeBanner';
import PolicySection from '@/app/components/templates/PolicySection';

export const metadata: Metadata = {
    title: 'HOME',
    icons: '/logo/devil-rabbit-sport-logo.png'
}
export default function Page(): React.ReactNode {
    return (
        <main>
            <HomeCarousel/>
            <PageScrolling/>
            <TopTrendingSection/>
            <VideoSection/>
            <YouMightLikeSection/>
            <HomeBanner/>
            <PolicySection/>
            <PageScrolling/>
        </main>
    );
}