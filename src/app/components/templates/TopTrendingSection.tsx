'use client';

import styled from 'styled-components';
import Tabs from '@/app/components/ui/Tabs';
import { tabPaneData } from '@/app/components/data/top-trending';
import React from 'react';
import { ProductsSlider } from '@/app/components/ui/ProductsSlider';

type tabPaneType = { key: string, label: string, children: React.ReactNode }[];

const tabPane: tabPaneType = tabPaneData.map(({ label, data }) => ( {
    key: label,
    label,
    children: <ProductsSlider data={ data }/>,
} ))

export function TopTrendingSection() {
    return (
        <TopTrendingSectionStyled className="section">
            {/*Heading*/ }
            <h2 className="section-heading mb-0.5">Top Trending</h2>

            {/*Tab*/ }
            <Tabs
                defaultActiveKey="1"
                centered
                items={ tabPane }
                tabBarStyle={ {
                    fontSize: 14,
                    fontWeight: 600,
                    textTransform: 'uppercase',
                } }
            />
        </TopTrendingSectionStyled>
    );
}

const TopTrendingSectionStyled = styled.div`
    .ant-tabs-nav-wrap {
        margin-bottom: var(--bls__section-header-margin);
    }

    .ant-tabs-nav {
        margin-bottom: 0;

        &::before {
            border-bottom: none;
        }

        .ant-tabs-tab {
            margin: 0 25px;
            padding: 0;

            .ant-tabs-tab-btn:after {
                content: '';
                display: block;
                height: 1.5px;
                width: 0;
                background-color: var(--heading-color);
                transition: var(--bls-transition);
                -webkit-transition: var(--bls-transition);
            }

            .ant-tabs-tab-btn:hover:after {
                width: 100%;
            }

            &.ant-tabs-tab-active {
                .ant-tabs-tab-btn {
                    text-shadow: none;
                }

                .ant-tabs-tab-btn:after {
                    width: 100%;
                }
            }
        }
    }
`;