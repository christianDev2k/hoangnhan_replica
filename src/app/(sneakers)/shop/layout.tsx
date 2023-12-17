'use client';

import React from 'react';
import styled from 'styled-components';
import Breadcrumb from '@/app/components/ui/Breadcrumb';
import Link from 'next/link';
import { PATH } from '@/constant/path';
import Image from 'next/image';
import Button from '@/app/components/ui/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { faFilter, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { View2ColumnIcon, View3ColumnIcon, View4ColumnIcon } from '@/app/components/ui/svg';
import Popover from '@/app/components/ui/Popover';
import Select from '@/app/components/ui/Select';
import Drawer from '@/app/components/ui/Drawer';

const breadcrumb: { path: string, title: string }[] = [
    {
        path: PATH.home,
        title: 'Home',
    },
    {
        path: PATH.shop,
        title: 'Shop',
    }
];

const banner: { img_path: string, title: string }[] = [
    {
        title: 'Football',
        img_path: '/img/shop/sport_c1.jpg',
    },
    {
        title: 'Allshose',
        img_path: '/img/shop/sport_c2.jpg',
    },
    {
        title: 'Lifestyle',
        img_path: '/img/shop/sport_c3.jpg',
    },
    {
        title: 'Running',
        img_path: '/img/shop/sport_c4.jpg',
    },
    {
        title: 'Fitness',
        img_path: '/img/shop/sport_c5.jpg',
    },
    {
        title: 'Football',
        img_path: '/img/shop/sport_c1.jpg',
    },
    {
        title: 'Football',
        img_path: '/img/shop/sport_c2.jpg',
    },
];

const productsFilter: { value: string, label: string }[] = [
    {
        label: 'Best Selling',
        value: '',
    },
    {
        label: 'Alphabetically, A-Z',
        value: '',
    },
    {
        label: 'Alphabetically, Z-A',
        value: '',
    },
    {
        label: 'Price, low to high',
        value: '',
    },
    {
        label: 'Price, high to low',
        value: '',
    },
    {
        label: 'Date, old to new',
        value: '',
    },
    {
        label: 'Date, new to old',
        value: '',
    },
];

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <LayoutStyled>
            {/* Heading Banner */ }
            <div className="heading-banner flex items-center justify-center">
                <div className="text-center">
                    <h1 className="heading-title !text-[--color-white]">Shop</h1>
                    <Breadcrumb
                        items={ breadcrumb.map(({ path, title }) => ( {
                            title: <Link key={ path } href={ path } className="breadcump-title">{ title }</Link>
                        } )) }/>
                </div>
            </div>

            {/* Banner */ }
            <div className="section !pb-0">
                <Swiper
                    keyboard={ true }
                    breakpoints={
                        {
                            0: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 30,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 30,
                            },
                        }
                    }
                >
                    {
                        banner.map(({ img_path, title }, index) => (
                            <SwiperSlide key={ index }>
                                <Link href="#"
                                      className="banner-item block aspect-[3/4] overflow-hidden rounded-[10px] relative w-full">
                                    <Image src={ img_path } alt={ title } fill priority sizes="100%"/>
                                    <div className="absolute left-1/2 bottom-5 -translate-x-1/2">
                                        <Button variant="white">{ title }</Button>
                                    </div>
                                </Link>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>

            <div className="section">
                <div className="flex sm:grid items-center grid-cols-3">
                    {/*Filter toggle */ }
                    <div className="flex items-center">
                        <button className="filter-toggle text-white bg-[--color-link]">
                            <div>
                                <FontAwesomeIcon icon={ faFilter } className="text-[12px]"/>
                                <span className="uppercase ml-[5px] font-semibold text-xs">Filter</span>
                            </div>
                        </button>
                        <p className="ml-5 hidden lg:block">There are 30 results in total</p>
                    </div>

                    {/*View mode */ }
                    <div>
                        <div className="md:flex items-center justify-center gap-2.5 hidden">
                            <Popover content={ <span className="text-white text-[13px]">2 Columns</span> }>
                                <button className="view-mode-btn">{ View2ColumnIcon }</button>
                            </Popover>
                            <Popover content={ <span className="text-white text-[13px]">3 Columns</span> }>
                                <button className="view-mode-btn">{ View3ColumnIcon }</button>
                            </Popover>
                            <Popover content={ <span className="text-white text-[13px]">4 Columns</span> }>
                                <button className="view-mode-btn">{ View4ColumnIcon }</button>
                            </Popover>
                        </div>
                    </div>

                    {/*Sort */ }
                    <div className="hidden sm:block text-right">
                        <label className="mr-[15px] text-[--heading-color]" htmlFor="product-filter">Sort by:</label>
                        <Select
                            id="product-filter"
                            defaultValue="Best Selling"
                            style={ { width: 120 } }
                            options={ productsFilter.map(({ label, value }) => ( {
                                key: label,
                                label: <span>{ label }</span>,
                                value,
                            } )) }
                            popupMatchSelectWidth={ false }
                        />
                    </div>

                    {/*Sort drawer*/ }
                    <div className="block sm:hidden ml-[30px]">
                        <button className="filter-toggle text-[--heading-color] bg-[#ebebeb]">
                            <div>
                                <span className="uppercase ml-[5px] font-semibold text-xs">Sort by</span>
                                <FontAwesomeIcon icon={ faAngleDown } className="text-[10px] ml-1"/>
                            </div>
                        </button>
                    </div>
                </div>

                {/*Children*/ }
                <div>{ children }</div>
            </div>

            {/*Sidebar drawer */ }
            <div className="hidden"></div>
        </LayoutStyled>
    );
}

const LayoutStyled = styled.div`
    .heading-banner {
        background-image: url('/img/shop/port_bg_cate.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        min-height: 200px;
    }

    .breadcump-title, .breadcump-title:hover, .ant-breadcrumb-separator {
        color: var(--color-white);
    }

    .banner-item {
        --btn-padding: 12px 45px;

        img {
            transition: var(--bls-transition);
        }

        &:hover {
            img {
                transform: scale(1.1);
            }
        }
    }

    .filter-toggle {
        padding: 2px 18px;
        border-radius: 3px;
    }

    .view-mode-btn {
        path {
            transition: var(--bls-transition);
        }

        &:hover {
            svg path {
                fill: var(--heading-color);
            }
        }
    }

    .ant-select {
        width: auto !important;

        .ant-select-selector {
            border: transparent;
            padding: 0;
            box-shadow: none !important;

        }

        .ant-select-selection-item {
            font-weight: 500;
            font-size: var(--base-font-size);
            color: var(--heading-color);
            padding-inline-end: 30px;
        }

        .ant-select-arrow {
            color: var(--heading-color);
            transform: translateY(2px);
        }
    }
`;
