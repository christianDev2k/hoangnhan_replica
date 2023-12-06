import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Hoang Nhan Sport',
    icons: 'logo/logo.png'
}
export default function Page() {
    return (
        <main>
            <h1 className="font-bold text-center m-5 text-2xl">Main</h1>
        </main>
    );
}