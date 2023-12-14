'use client';

import Image from 'next/image';
import styled from 'styled-components';
import Button from '@/app/components/ui/Button';

export default function HomeBanner() {
    return (
        <HomeBannerStyled className="section">
            <div className="banner-item">
                <Image src="/img/home-banner/men.webp" alt="Men image" fill/>
                <div className="content">
                    <Button variant="white">Men&apos;s</Button>
                </div>
            </div>
            <div className="banner-item">
                <Image src="/img/home-banner/women.webp" alt="Women image" fill/>
                <div className="content">
                    <Button variant="white">Women&apos;s</Button>
                </div>
            </div>
            <div className="banner-item">
                <Image src="/img/home-banner/unisex.webp" alt="Unisex image" fill/>
                <div className="content">
                    <Button variant="white">Unisex</Button>
                </div>
            </div>
        </HomeBannerStyled>
    );
}

const HomeBannerStyled = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    column-gap: 20px;

    .banner-item {
        position: relative;
        flex-grow: 1;
        border-radius: 10px;
        overflow: hidden;
        aspect-ratio: 0.8677777777777778;

        img {
            width: 100%;
            transition: var(--bls-transition);
        }

        .content {
            position: absolute;
            left: 0;
            bottom: 0;
            padding: 30px;
        }

        &:hover img {
            transform: scale(1.1);
        }
    }

    @media screen and (max-width: 768px) {
        display: block;

        .banner-item {
            margin-bottom: 20px;

            .content {
                padding: 20px;
            }
        }

        button {
            padding-left: 50px;
            padding-right: 50px;
        }
    }
`;