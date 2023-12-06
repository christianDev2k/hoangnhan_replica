import Image from 'next/image';
import { useState } from 'react';
import { CartEmptyIcon, NoteIcon, TruckIcon, VoucherIcon } from '@/app/components/ui/svg';
import Button from '@/app/components/ui/Button';
import Popover from '@/app/components/ui/Popover';
import { Checkbox } from '@/app/components/ui/Checkbox';
import Drawer from '@/app/components/ui/Drawer';
import { Card } from '@/app/components/ui/Card';
import InputNumber from '@/app/components/ui/InputNumber';
import { ToggleProps } from '@/types/types';
import { clsx } from 'clsx';
import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-regular-svg-icons';
import Scrollbar from '@/app/components/ui/Scrollbar';

export default function CartDrawer({ toggleOpen, setToggleOpen }: ToggleProps) {
    const cartShipping: boolean = true;

    return (
        <CartDrawerStyled
            open={ toggleOpen }
            onClose={ () => setToggleOpen(pre => ( { ...pre, cart: false } )) }
            width={ 450 }
            title={ <h4 className="text-lg">Shopping Cart</h4> }
            styles={ {
                header: {
                    border: 0,
                    paddingBlock: 14,
                    paddingInline: 30,
                    borderBlockEnd: '1px solid var(--border-color-base)'
                },
                body: { padding: 0, display: 'flex', flexDirection: 'column' },
            } }
        >
            {/*Free shipping process bar */ }
            <CartProcessBar/>
            {/*Cart body */ }
            <CartBody/>
        </CartDrawerStyled>
    );

    function CartProcessBar() {
        return (
            <CartProcessBarStyled
                className={ clsx('text-[--btn-link-color] bg-[--light-grey-color] border-b border-[--border-color-base', {
                    'cart-shipping': cartShipping,
                }) }>
                <div className="process-bar h-[5px] bg-[--border-color-base] mb-3 rounded-[5px]">
                    <div className="progress-bar-shipping relative h-full bg-[--primary-color]">
                        <i className="truck-icon w-[30px] h-[30px] rounded-full absolute inline-flex items-center justify-center bg-white border border-[--primary-color] top-1/2 -mt-[1px] translate-x-1/2 -translate-y-1/2">
                            <span>{ TruckIcon }</span>
                        </i>
                    </div>
                </div>
                {
                    cartShipping
                        ? <p>Congratulations! You have got free shipping!</p>
                        : (
                            <p>
                                <span>Choose a product to enjoy </span>
                                <span className="text-[--primary-color] font-[--heading-font-weight]">FREE SHIPPING!</span>
                            </p>
                        )
                }
            </CartProcessBarStyled>
        );
    }

    function CartBody() {
        const [termChecked, setTermChecked] = useState<boolean>(false);

        if (!cartShipping) return <CartEmptyBody/>;
        return (
            <div className="flex flex-col grow overflow-y-hidden">
                {/*Cart list */ }
                <Scrollbar size="small">
                    <div className="px-[30px] grow">
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                    </div>
                </Scrollbar>

                {/*Cart footer*/ }
                <div className="bg-[--light-grey-color]">
                    {/*Icon*/ }
                    <ul className="cart-icons border-y border-[--border-color-base] bg-white flex">
                        <Popover
                            content={ <span className="text-white text-[13px]">Add order note</span> }
                            color="#111"
                            overlayInnerStyle={ { paddingBlock: 4, borderRadius: 5 } }
                        >
                            <li className="icon"><i>{ NoteIcon }</i></li>
                        </Popover>
                        <Popover
                            content={ <span className="text-white text-[13px]">Add voucher</span> }
                            color="#111"
                            overlayInnerStyle={ { paddingBlock: 4, borderRadius: 5 } }
                        >
                            <li className="icon"><i>{ VoucherIcon }</i></li>
                        </Popover>
                    </ul>

                    {/*Total*/ }
                    <div className="px-[30px] py-5">
                        {/*Subtotal*/ }
                        <div className="flex justify-between items-center text-lg text-[--heading-color] font-semibold">
                            <p>Subtotal</p>
                            <p>$0</p>
                        </div>

                        {/*Term*/ }
                        <div className="mt-[15px] flex items-center text-base mb-[15px]">
                            <Checkbox
                                type="checkbox"
                                id="cart-term-checkbox"
                                name="cart-term-checkbox"
                                className="cart-term-checkbox mr-2.5"
                                onChange={ () => setTermChecked(pre => !pre) }
                            >
                                <p className="text-base">
                                    <span>I agree with </span>
                                    <a href="#" className="!underline">Terms & Conditions</a>
                                </p>
                            </Checkbox>
                        </div>

                        {/*Button*/ }
                        <Button variant="secondary" className="w-full mb-2.5">View Cart</Button>
                        <Button variant="primary" className="w-full" disabled={ !termChecked }>Checkout</Button>
                    </div>
                </div>
            </div>
        );
    }

    function CartEmptyBody() {
        return (
            <div className="pt-[50px] px-[30px] pb-[30px] text-center">
                <div className="inline-block mx-auto mb-4">{ CartEmptyIcon }</div>
                <h6 className="text-lg font-semibold text-[--heading-color] mb-2.5">Your cart is empty.</h6>
                <p className="text-base">You may check out all the available products and buy some in the
                    shop.</p>
                <Button variant="primary" className="mt-[30px] mx-auto"
                        onClick={ () => setToggleOpen(pre => ( { ...pre, cart: false } )) }>RETURN TO SHOP</Button>
            </div>
        );
    }

    function CardProduct() {
        return (
            <CardProductStyled
                bodyStyle={ {
                    display: 'flex',
                    paddingInline: 0,
                    paddingBlock: 20,
                } }
            >
                {/*Image */ }
                <a href="#" className="mr-[15px]">
                    <Image
                        src="/img/products_sport_8_1.webp"
                        alt="products_sport_8_1.webp"
                        className="rounded-[--product-images-style-radius]"
                        width={ 87 }
                        height={ 87 }
                    />
                </a>

                {/*Information */ }
                <div className="grow pr-2.5">
                    <a href="#" className="text-base">Metcon 02 Men&apos;s Training Shoes</a>
                    <div className="mt-[5px] text-[--grey-color] leading-[1.2]">M</div>
                    <div className="mt-[11px] text-[--base-color] text-base font-medium">$115.00</div>
                    <InputNumber
                        className="mt-[5px]"
                        min={ 1 }
                        max={ 5 }
                        defaultValue={ 1 }
                        formatter={ (value) => Math.round(Number(value?.toString())).toString() }
                        name="qty"
                    />
                </div>

                {/*Action*/ }
                <div className="flex-col text-[13px]">
                    <button className="block p-1 mb-0.5"><FontAwesomeIcon icon={ faTrashCan }/></button>
                    <button className="block p-1"><FontAwesomeIcon icon={ faPenToSquare }/></button>
                </div>
            </CardProductStyled>
        );
    }
}

const CartDrawerStyled = styled(Drawer)`
  .ant-drawer-close {
    margin-right: 0;

    &:hover {
      color: var(--color-link-hover);
    }
  }

  .ant-drawer-header-title {
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  .ant-drawer-title {
    flex: none;
  }

  .cart-icons {
    .icon {
      flex-grow: 1;
      padding: 16px;
      display: flex;
      justify-content: center;
      cursor: pointer;
      position: relative;

      &::after {
        content: "";
        height: 20px;
        border-right: 1px dashed var(--border-color-base);
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }

  .cart-term-checkbox {
    .ant-checkbox-inner {
      border-radius: 2px;
      width: 18px;
      height: 18px;
      border-color: var(--border-color-base);
    }

    &:hover .ant-checkbox-inner {
      border-color: var(--border-color-base);
    }

    .ant-checkbox:hover .ant-checkbox-inner {
      border-color: var(--border-color-base);
    }

    .ant-checkbox-checked .ant-checkbox-inner {
      background-color: #111 !important;
      border-color: #111;

      &::after {
        inset-inline-start: 25.5%;
      }
    }
  }
`;

const progress = keyframes`
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -60px -60px;
  }
`;

const flash = keyframes`
  50%, 0%, 100% {
    opacity: 1;
  }

  25%, 75% {
    opacity: 0;
  }
`;

const CartProcessBarStyled = styled.div`
  padding: 35px 30px 20px;

  .progress-bar-shipping {
    width: 0;
    background-image: linear-gradient(135deg, rgba(255, 255, 255, .15) 0, rgba(255, 255, 255, .15) 25%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
    -webkit-background-image: linear-gradient(135deg, rgba(255, 255, 255, .15) 0, rgba(255, 255, 255, .15) 25%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
    -moz-background-image: linear-gradient(135deg, rgba(255, 255, 255, .15) 0, rgba(255, 255, 255, .15) 25%, rgba(255, 255, 255, 0) 25%, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 100%);
    background-size: 40px 40px;
    transition: var(--bls-transition);
    animation: 5s linear infinite ${ progress };
  }

  .truck-icon {
    transition: var(--bls-transition);
    right: -15px;
  }

  &.cart-shipping {
    animation: ${ flash } .8s linear .8s 2 both;

    .progress-bar-shipping {
      width: 100%;
    }

    .truck-icon {
      right: 15px;
    }
  }
`;

const CardProductStyled = styled(Card)`
  border-bottom: 1px dashed var(--border-color-base);

  &.ant-card {
    box-shadow: none !important;
  }

  &:last-child {
    border-bottom: none !important;
  }
`;
