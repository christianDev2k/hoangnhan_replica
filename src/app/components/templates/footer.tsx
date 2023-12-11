"use client";

import { blackOpsOne } from '@/app/components/fonts/fonts';
import styled from 'styled-components';
import Input from '@/app/components/ui/Input';
import Button from '@/app/components/ui/Button';
import Collapse from '@/app/components/ui/Collapse';

export default function Footer() {
    return (
        <FooterStyled className="bg-[--footer-bg--color] ">
            <div className="flex flex-wrap xl:px-[15px] pt-[50px] md:pt-[60px] xl:pt-[100px] md:pb-[30px]">
                <div className="w-full md:w-1/2 xl:w-4/12 px-[15px]">
                    <div className="mb-4 md:mb-6 relative -top-1">
                        <h2 className={ `${ blackOpsOne.className } antialiased text-[--footer-heading-color] !text-[24px] mb-4 md:mb-[22px]` }>
                            HOANGNHAN
                        </h2>
                        <p>268 St, South New York/NY 98944, United States.</p>
                        <div><a href="tel:0559550377">+84559550377</a></div>
                        <div><a href="mailto:hnhan793@gmail.com">hnhan793@gmail.com</a></div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className="hidden md:block md:w-1/2 xl:w-2/12 px-[15px]">
                    <h3>SHOP BY CATEGORIES</h3>
                    <ul>
                        <li><a href="#">Special Offers</a></li>
                        <li><a href="#">Performance</a></li>
                        <li><a href="#">Top Brands</a></li>
                    </ul>
                </div>
                <div className="hidden md:block md:w-1/2 xl:w-2/12 px-[15px]">
                    <h3>CUSTOMER SERVICE</h3>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Refund Policy</a></li>
                        <li><a href="#">Shipping & Return</a></li>
                        <li><a href="#">Term & Conditions</a></li>
                        <li><a href="#">Advanced Search</a></li>
                        <li><a href="#">Store Locations</a></li>
                    </ul>
                </div>
                <div className="hidden md:block md:w-1/2 xl:w-4/12 px-[15px]">
                    <h3>SIGN UP TO NEWSLETTER</h3>
                    <p className="pt-[15px]">Enter your email address to get $10 off your first order and free
                        shipping. Updates information on
                        Sales and Offers.</p>
                    <div className="mt-[30px] flex gap-2.5 items-center">
                        <Input variant="email" name="email" placeholder="Enter your email..." autoComplete="true"/>
                        <Button variant="white">Subscribe</Button>
                    </div>
                </div>

                {/*Collapse footer*/ }
                <div className="px-[15px] md:hidden w-full">
                    <CollapseStyled
                        items={ [
                            {
                                key: 1,
                                label: <h3>SHOP BY CATEGORIES</h3>,
                                children: (
                                    <ul>
                                        <li><a href="#">Special Offers</a></li>
                                        <li><a href="#">Performance</a></li>
                                        <li><a href="#">Top Brands</a></li>
                                    </ul>
                                ),
                            },
                            {
                                key: 2,
                                label: <h3>CUSTOMER SERVICE</h3>,
                                children: (
                                    <ul>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Refund Policy</a></li>
                                        <li><a href="#">Shipping & Return</a></li>
                                        <li><a href="#">Term & Conditions</a></li>
                                        <li><a href="#">Advanced Search</a></li>
                                        <li><a href="#">Store Locations</a></li>
                                    </ul>
                                ),
                            },
                            {
                                key: 3,
                                label: <h3>SIGN UP TO NEWSLETTER</h3>,
                                children: (
                                    <div className="mb-2.5">
                                        <p>Enter your email address to get $10 off your first
                                            order and free
                                            shipping. Updates information on
                                            Sales and Offers.</p>
                                        <div className="mt-[30px] flex items-center gap-2.5">
                                            <Input variant="email" name="email" placeholder="Enter your email..." autoComplete="true"/>
                                            <Button variant="white">Subscribe</Button>
                                        </div>
                                    </div>
                                ),
                            },
                        ] }
                        bordered={ false }
                    />
                </div>
            </div>
            <div className="px-[15px] xl:px-[30px]">
                <div className="py-2.5 md:py-[30px] md:border-t border-[#333] text-center">
                    <p>© 2023 Hoang Nhan Sport. All Rights Reserved</p>
                </div>
            </div>
        </FooterStyled>
    );
}

const FooterStyled = styled.footer`= font-size: var(--footer-text-size);

  & {
    font-size: 14px;
  }

  h3 {
    color: var(--footer-heading-color);
    font-size: var(--footer-heading-size);
    padding-bottom: 10px;
  }

  ul {
    margin-top: 15px;
    margin-bottom: 30px;

    li {
      margin-bottom: 10px;

      &:hover {
        transition: var(--bls-transition);
        padding-left: 10px;
      }
    }
  }

  a {
    color: var(--footer-link-color);

    &:hover {
      color: var(--footer-link-hover-color);
    }
  }

  p {
    color: var(--footer-text-color);
  }
`;

const CollapseStyled = styled(Collapse)`
  --border-color-base: #333;

  .ant-collapse-item {
    padding: 5px 0;
    border-bottom: 1px solid var(--border-color-base) !important;

    &:first-child {
      border-top: 1px solid var(--border-color-base);
    }
  }

  .ant-collapse-header {
    flex-direction: row-reverse;
    padding: 10px 0;

    h3 {
      padding-bottom: 0;
      line-height: 1.5;
    }

    svg {
      fill: var(--footer-text-color);
    }
  }

  .ant-collapse-content-box {
    padding: 10px 0 !important;

    ul {
      margin: 0;
      padding: 0;
    }
  }
`;