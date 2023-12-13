import { Metadata } from 'next';
import HomeCarousel from '@/app/components/templates/HomeCarousel';
import PageScrolling from '@/app/components/templates/PageScrolling';
import TopTrendingSection from '@/app/components/templates/TopTrendingSection';
import VideoSection from '@/app/components/templates/VideoSection';

export const metadata: Metadata = {
    title: 'HOME',
    icons: '/logo/devil-rabbit-sport-logo.png'
}
export default function Page() {
    return (
        <main>
            <HomeCarousel/>
            <PageScrolling/>
            <TopTrendingSection/>
            <VideoSection/>
        </main>
    );
}