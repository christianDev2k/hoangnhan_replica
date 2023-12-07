import { Metadata } from 'next';
import HomeCarousel from '@/app/components/ui/HomeCarousel';

export const metadata: Metadata = {
    title: 'HOME',
    icons: '/logo/devil-rabbit-sport-logo.png'
}
export default function Page() {
    return (
        <main><HomeCarousel/></main>
);
}