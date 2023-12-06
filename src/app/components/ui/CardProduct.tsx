import { Card } from '@/app/components/ui/Card';
import styled from 'styled-components';
import Image from 'next/image';
import { clsx } from 'clsx';

type CardProductProps = {
    img?: string,
    alt?: string,
    vendor?: string,
    name?: string,
    price?: string,
    priceSale?: string,
    discount?: number,
    dynamic?: boolean,
}

export function CardProduct() {
    const dynamic = false;
    return (
        <CardStyled>
            <a href="#" className="block relative w-full aspect-square overflow-hidden">
                <Image
                    className={ clsx('img !rounded-[var(--product-images-style-radius)] object-cover', {
                        'hover:scale-105': !dynamic,
                        'dynamic': dynamic,
                    }) }
                    alt="products_sport_3_1.webp"
                    src="/img/products_sport_3_1.webp"
                    fill
                    sizes="100%"
                />
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

  .img {
    transition: var(--bls-transition);
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
`;