import { Metadata } from 'next';
import HomeCarousel from '@/app/components/templates/HomeCarousel';
import PageScrolling from '@/app/components/templates/PageScrolling';
import { pageScrollingData } from '@/app/components/data/page-scrolling';
import { TopTrendingSection } from '@/app/components/templates/TopTrendingSection';

export const metadata: Metadata = {
    title: 'HOME',
    icons: '/logo/devil-rabbit-sport-logo.png'
}
export default function Page() {
    return (
        <main>
            <HomeCarousel/>
            <PageScrolling data={ pageScrollingData }/>
            <TopTrendingSection/>
        </main>
    );
}