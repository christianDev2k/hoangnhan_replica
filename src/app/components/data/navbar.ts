import { PATH } from '@/constant/path';

export type NavListType = {
    title: string,
    path: string,
}[];

export const navListData: NavListType = [
    {
        title: 'Home',
        path: PATH.home,
    },
    {
        title: 'Shop',
        path: PATH.shop,
    },
    {
        title: 'Product',
        path: '#'
    },
    {
        title: 'Blog',
        path: '#'
    },
    {
        title: 'About',
        path: '#'
    },
    {
        title: 'Contact',
        path: '#'
    },
];