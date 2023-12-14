'use client';

import Image from 'next/image';
import styled from 'styled-components';

export default function PolicySection() {
    return (
        <PolicySectionStyled className="section">
            <div className="item">
                <div className="wrapper-img">
                    <Image src="/img/policy/policy1_f7.webp" alt="Freeship" fill sizes="100%"/>
                </div>
                <h3>FREE SHIPPING</h3>
                <p className="desc">Get complimentary ground shipping on every order. Don&apos;t love it? Send it back, on us.</p>
            </div>
            <div className="item">
                <div className="wrapper-img">
                    <Image src="/img/policy/policy2_f7.webp" alt="Freeship" fill sizes="100%"/>
                </div>
                <h3>FREE RETURNS</h3>
                <p className="desc">Free returns within 10 days, please make sure the items are in undamaged condition.</p>
            </div>
            <div className="item">
                <div className="wrapper-img">
                    <Image src="/img/policy/policy3_f7.webp" alt="Freeship" fill sizes="100%"/>
                </div>
                <h3>SUPPORT ONLINE</h3>
                <p className="desc">We support customers 24/7, send questions we will solve for you immediately.</p>
            </div>
        </PolicySectionStyled>
    );
}

const PolicySectionStyled = styled.div`
    display: flex;
    column-gap: 30px;
    
    .item {
        text-align: center;
    }
    
    .wrapper-img {
        position: relative;
        aspect-ratio: 1;
        width: 42px;
        margin: 0 auto 20px;
    }
    
    h3 {
        margin-bottom: 20px;
    }
    
    .desc {
        max-width: 76%;
        margin: 0 auto;
    }
    
    @media screen and (max-width: 768px) {
        column-gap: 15px;

        .desc {
            max-width: 100%;
        }
    }

    @media screen and (max-width: 576px) {
        display: block;
    
        .item {
            margin-bottom: 30px;
        }
        
        h3 {
            margin-bottom: 10px;
        }
        
        .desc {
            max-width: 100%;
        }
    }
`;