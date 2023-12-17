'use client';

import React from 'react';
import Header from '@/app/components/templates/header';
import Footer from '@/app/components/templates/footer';
import { barlow } from '@/app/components/fonts/fonts';
import { ConfigProvider } from 'antd';
import StyledComponentsRegistry from '@/app/lib/StyledComponentRegistry';
import AntdRegistry from '@/app/lib/AntdRegistry';
import '@/app/components/styles/globals.css';

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body className={ `${ barlow.className } antialiased` }>
        <AntdRegistry>
            <StyledComponentsRegistry>
                <ConfigProvider
                    theme={ {
                        token: {
                            fontFamily: '',
                            colorPrimary: '#d73f0f',
                            colorLink: 'none',
                            colorLinkHover: 'none',
                            colorLinkActive: 'none',
                            colorPrimaryActive: 'none',
                            colorErrorOutline: 'none',
                            colorError: 'none',
                            colorErrorBorderHover: 'none',
                            colorErrorActive: 'none',
                            colorText: '#555',
                        },
                        components: {
                            InputNumber: {
                                activeBorderColor: 'none',
                                hoverBorderColor: 'none',
                                activeShadow: 'none',
                                handleHoverColor: 'none'
                            },
                            Input: {
                                activeBorderColor: 'none',
                                hoverBorderColor: 'none',
                            },
                            Collapse: {
                                headerPadding: 'none',
                                contentPadding: 'none',
                            },
                            Tabs: {
                                itemActiveColor: 'none',
                                itemHoverColor: 'none',
                                itemSelectedColor: 'none',
                                inkBarColor: 'none',
                            },
                            Select: {
                                multipleItemBg: 'transparent',
                                optionSelectedColor: '#555',
                                optionActiveBg: 'transparent'
                            },
                        },
                    } }>
                    <Header/>
                    { children }
                    <Footer/>
                </ConfigProvider>
            </StyledComponentsRegistry>
        </AntdRegistry>
        </body>
        </html>
    );
}