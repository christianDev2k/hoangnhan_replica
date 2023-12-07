'use client';

import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import 'swiper/css';
import 'swiper/css/pagination';

export default function HomeCarousel() {
    return (
        <SwiperStyled>
            <Swiper
                cssMode={ true }
                modules={ [Pagination, Mousewheel, Keyboard] }
                pagination={ {
                    clickable: true,
                } }
                mousewheel={ true }
                keyboard={ true }
                loop={ true }
            >
                <SwiperButtonNext><FontAwesomeIcon icon={ faAngleRight }/></SwiperButtonNext>
                <SwiperButtonPre><FontAwesomeIcon icon={ faAngleLeft }/></SwiperButtonPre>
                <SwiperSlide>
                    <Image src="/img/carousel/sport_s1.webp" alt="public/img/carousel/sport_s1.webp" fill
                           sizes="( max-width: 100vw )" placeholder="blur"
                           blurDataURL={'/logo/logo.png' }/>
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/img/carousel/sport_s3.webp" alt="public/img/carousel/sport_s1.webp" fill
                           sizes="( max-width: 100vw )" placeholder="blur"
                           blurDataURL={'/logo/logo.png' }/>
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
    }

    .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
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

        &.pre {
            left: 25px;
        }

        &.next {
            right: 25px;
        }
    }

    .swiper-pagination-bullet {
        background-color: var(--color-white);
    }
`;
