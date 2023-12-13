import { Card } from '@/app/components/ui/Card';
import styled from 'styled-components';
import Image from 'next/image';
import { clsx } from 'clsx';
import { CartIcon, QuickViewIcon, WishlistIcon } from '@/app/components/ui/svg';

export type CardProductProps = {
    img?: string,
    alt?: string,
    vendor?: string,
    name?: string,
    price?: string,
    priceSale?: string,
    discount?: number,
    dynamic?: boolean,
    slidePerView?: number,
}

export function CardProduct({ dynamic = false }: CardProductProps) {
    return (
        <CardStyled>
            <a
                href="#"
                className={ clsx('card-img block relative w-full aspect-square overflow-hidden rounded-[var(--product-images-style-radius)]', {
                    'dynamic relative': dynamic,
                }) }
            >
                <Image
                    className="object-cover"
                    alt="products_sport_3_1.webp"
                    src="/img/products_sport_3_1.webp"
                    fill
                    sizes="100%"
                />

                <div className={ clsx('action-btn absolute flex justify-center w-full', {
                    'hidden': !dynamic,
                }) }>
                    <div className="flex items-center justify-center gap-x-1">
                        <div className="action-item">{ CartIcon }</div>
                        <div className="action-item">{ WishlistIcon }</div>
                        <div className="action-item">{ QuickViewIcon }</div>
                    </div>
                </div>
            </a>
            <div className="mt-[15px]">
                <div className="my-[5px]">
                    <a href="#"
                       className="uppercase my-[5px] !text-[var(--grey-color)] font-semibold text-xs">UMINO</a>
                </div>
                <h3><a href="#">UMINO JUNIPER TRAIL 2 NEXT NATURE</a></h3>
                <div className="flex items-center mt-1 price">
                    <span className="price-item">$120.00</span>
                    <span className="price-item compare-price">$150.00</span>
                </div>
            </div>
        </CardStyled>
    )
}

const CardStyled = styled(Card)`
    &.ant-card {
        box-shadow: none !important;
    }

    h3 {
        font-size: var(--bls__product-name-size);
    }

    .price {
        .price-item {
            font-weight: var(--bls__product-name-weight);
            font-size: var(--bls__product-price-size);
        }

        .compare-price {
            display: none;
        }

        &.sale {
            .price-item {
                color: var(--primary-color);
            }

            .compare-price {
                display: block;
                margin-left: 5px;
                color: var(--bls__product-price-sale-color);
                font-weight: var(--bls__product-price-sale-weight);
                text-decoration: line-through;
            }
        }
    }

    .card-img {
        & img {
            transition: var(--bls-transition);
        }

        &:hover {
            .& img {
                transform: scale(1.05);
            }
        }

        &.dynamic:hover .action-btn {
            transform: translateY(-12px);
            opacity: 1;
            visibility: visible;
        }
    }
    
    .action-btn {
        opacity: 0;
        visibility: hidden;
        transition: var(--bls-transition);
        bottom: 10px;

        .action-item {
            margin: 0 2px;
            background-color: var(--color-white);
            width: 45px;
            height: 45px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: var(--bls-transition);

            &:hover {
                background-color: var(--color-black);

                svg, path {
                    fill: var(--color-white);
                }
            }

            svg {
                width: 16px;
                height: 16px;
            }
        }
    }

    @media screen and (max-width: 1024px) {
        .action-btn {
            bottom: 0;

            .action-item {
                width: 35px;
                height: 35px;

                svg {
                    width: 12px;
                    height: 12px;
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .action-btn {
            opacity: 1;
            visibility: visible;
            transform: translateY(-12px);
        }
    }
`;
