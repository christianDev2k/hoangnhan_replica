'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Button from '@/app/components/ui/Button';

export default function HomeCarousel() {
    return (
        <SwiperStyled>
            <Swiper
                cssMode={ true }
                modules={ [Pagination, Autoplay] }
                pagination={ {
                    clickable: true,
                } }
                autoplay={ {
                    delay: 5000,
                } }
                loop={ true }
            >
                <SwiperButtonNext><FontAwesomeIcon icon={ faAngleRight }/></SwiperButtonNext>
                <SwiperButtonPre><FontAwesomeIcon icon={ faAngleLeft }/></SwiperButtonPre>
                <SwiperSlide>
                    <Image src="/img/carousel/sport_s1.webp" alt="public/img/carousel/sport_s1.webp" fill
                           sizes="( max-width: 100vw )" placeholder="blur"
                           blurDataURL={ '/logo/logo.png' }
                    />
                    <div className="slider-content">
                        <div className="subtitle">SUMMER ESSENTIALS</div>
                        <h2 className="title">FITNESS HOUSE</h2>
                        <p className="desc">Update your wardrobe with distinctive fashion style.</p>
                        <Button variant="white">Shop Now</Button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/img/carousel/sport_s3.webp" alt="public/img/carousel/sport_s1.webp" fill
                           sizes="( max-width: 100vw )" placeholder="blur"
                           blurDataURL={ '/logo/logo.png' }
                    />
                    <div className="slider-content">
                        <div className="subtitle">WINTER MELTING</div>
                        <h2 className="title">MIX CLOTHES</h2>
                        <p className="desc">Update your wardrobe with distinctive fashion style.</p>
                        <Button variant="white">Shop Now</Button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </SwiperStyled>
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


const SwiperStyled = styled.div`
    .swiper {
        width: 100%;
        height: 82vh;
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
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background-color: var(--color-white);
            position: absolute;
            z-index: 1;
            top: 50%;
            transform: translateY(-50%);
            opacity: 0;
            transition: var(--bls-transition);
            color: var(--color-black);
            font-size: 12px;

            @media screen and (max-width: 1200px) {
                width: 40px;
                height: 40px;
            }

            &.pre {
                left: 22px;
            }

            &.next {
                right: 22px;
            }
        }

        .swiper-pagination-bullet {
            background-color: var(--color-white);
        }

        .swiper-slide {
            display: flex;
            align-items: flex-end;

            img {
                display: block;
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .slider-content {
                padding: 75px;
                color: var(--color-white);
                z-index: 10;
                text-transform: uppercase;

                .subtitle {
                    font-size: var(--section-subheading-font-size, 12px);
                    font-weight: var(--section-subheading-font-weight, var(--heading-font-weight));
                    margin-bottom: clamp(0rem, 1vw, 15px);
                }

                .title {
                    color: var(--color-white);
                    font-size: clamp(36px, 4.7vw, var(--section-heading-font-size, 110px));
                    line-height: 1.15;
                    font-weight: var(--section-heading-font-weight);
                    margin-bottom: 15px;
                }

                .desc {
                    font-size: var(--section-description-font-size, 14px);
                    line-height: 1.5;
                    font-weight: var(--section-description-font-weight, var(--base-font-weight));
                    text-transform: none;
                    margin-bottom: clamp(25px, 4vw, 50px);
                }

                @media screen and (max-width: 768px) {
                    padding: 40px 15px
                }
            }
        }
    }
`;
