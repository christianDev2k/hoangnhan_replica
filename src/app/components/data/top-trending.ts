import { CardProductProps } from '@/app/components/ui/CardProduct';

export type tabPaneDataType = {
    label: string,
    data: CardProductProps[],
}[];
export const tabPaneData: tabPaneDataType = [
    {
        label: 'Adidas',
        data: [...Array(8)],
    },
    {
        label: 'Nike',
        data: [...Array(8)],
    },
    {
        label: 'Jordan',
        data: [...Array(8)],
    }
]