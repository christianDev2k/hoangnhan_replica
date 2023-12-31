'use client';

import { CardProduct, CardProductProps } from '@/app/components/ui/CardProduct';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

export function ProductsSlider({ data }: { data: CardProductProps[] }) {
    return (
        <ProductSliderStyled>
            <Swiper
                slidesPerView={ 4 }
                spaceBetween="20"
                loop={ true }
                breakpoints={ {
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                } }
            >
                <div className="navigate">
                    <SwiperButtonPre><FontAwesomeIcon icon={ faAngleLeft }/></SwiperButtonPre>
                    <SwiperButtonNext><FontAwesomeIcon icon={ faAngleRight }/></SwiperButtonNext>
                </div>
                {
                    data.map((_, index) => (
                        <SwiperSlide key={ index }>
                            <CardProduct dynamic={ true }/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </ProductSliderStyled>
    );
}

const SwiperButtonPre = ({ children }: { children: React.ReactNode }) => {
    const swiper = useSwiper();
    return <button onClick={ () => swiper.slidePrev() } className="nav-btn pre">{ children }</button>;
};

const SwiperButtonNext = ({ children }: { children: React.ReactNode }) => {
    const swiper = useSwiper();
    return <button onClick={ () => swiper.slideNext() } className="nav-btn next">{ children }</button>;
};


const ProductSliderStyled = styled.div`
    position: relative;

    &:hover {
        .nav-btn {
            opacity: 1;

            &.pre {
                transform: translate(-10px, -50%);
            }

            &.next {
                transform: translate(10px, -50%);
            }
        }
    }

    .nav-btn {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: var(--color-white);
        position: absolute;
        z-index: 10;
        top: 40%;
        transform: translateY(-50%);
        opacity: 0;
        transition: var(--bls-transition);
        color: var(--color-black);
        font-size: 12px;

        &.pre {
            left: 22px;
        }

        &.next {
            right: 22px;
        }

        &:hover {
            background-color: var(--color-black);
            color: var(--color-white);
        }
    }

    @media screen and (max-width: 1200px) {
        .nav-btn {
            width: 40px;
            height: 40px;
        }
    }

    @media screen and (max-width: 980px) {
        .swiper {
            display: flex;
            flex-direction: column-reverse;

            .navigate {
                display: flex;
                justify-content: center;

                .nav-btn {
                    position: unset;
                    opacity: 1;
                    transform: unset !important;
                    margin: 0 5px var(--bls__section-header-margin);
                    border: 1px solid var(--border-color-base);
                }
            }
        }
    }
`;
