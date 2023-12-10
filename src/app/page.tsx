import { Metadata } from 'next';
import HomeCarousel from '@/app/components/ui/HomeCarousel';
import PageScrolling from '@/app/components/ui/PageScrolling';
import { pageScrollingData } from '@/app/components/data/page-scrolling';

export const metadata: Metadata = {
    title: 'HOME',
    icons: '/logo/devil-rabbit-sport-logo.png'
}
export default function Page() {
    return (
        <main>
            <HomeCarousel/>
            <PageScrolling data={ pageScrollingData }/>
        </main>
    );
}