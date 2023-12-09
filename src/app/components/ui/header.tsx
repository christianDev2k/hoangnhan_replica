"use client";

import { useState } from 'react';
import { navList } from '@/const/navbar';
import {
    SearchIcon,
    UserIcon,
    RecentlyIcon,
    WishlistIcon,
    CartIcon,
    NavToggle
} from '@/app/components/ui/svg';
import Badge from '@/app/components/ui/Badge';
import { ToggleProps, ToggleStateProps } from '@/types/types';
import { CardProduct } from '@/app/components/ui/CardProduct';
import Drawer from '@/app/components/ui/Drawer';
import Button from '@/app/components/ui/Button';
import Modal from '@/app/components/ui/Modal';
import CartDrawer from '@/app/components/ui/MiniCartDrawer';
import Input from '@/app/components/ui/Input';
import { blackOpsOne } from '@/app/components/fonts/fonts';
import styled from 'styled-components';

export default function Header() {
    const [toggle, setToggle] = useState<ToggleStateProps>({
        search: false,
        authenticate: false,
        cart: false,
        navbar: false,
    });

    return (
        <header className="border-b h-[--header-height] px-[15px] lg:px-[30px] py-[11px] flex items-center">
            <nav className="grid items-center grid-cols-3  text-[--menu-color] w-full">
                {/*Nav toggle*/ }
                <div className="block lg:hidden">
                    <button className=""
                            onClick={ () => setToggle(pre => ( { ...pre, navbar: true } )) }>{ NavToggle }</button>
                </div>

                {/*Logo */ }
                <div className="flex justify-center relative top-0.5 lg:static lg:block">
                    <a href="#" className={ `${ blackOpsOne.className } antialiased text-[24px] sm:text-[28px]` }>
                        HOANGNHAN
                    </a>
                </div>

                {/*Navbar*/ }
                <NavbarStyled className="justify-center hidden lg:flex">
                    {
                        navList.map(nav => (
                            <li key={ nav.title }>
                                <a href={ nav.path }>{ nav.title }</a>
                            </li>
                        ))
                    }
                </NavbarStyled>

                {/*Icons*/ }
                <IconsStyled className="flex items-center justify-end">
                    <li className="flex items-center">
                        <button onClick={ () => setToggle(pre => ( { ...pre, search: true } )) }>{ SearchIcon }</button>
                    </li>
                    <li className="hidden lg:flex items-center">
                        <button
                            onClick={ () => setToggle(pre => ( { ...pre, authenticate: true } )) }>{ UserIcon }</button>
                    </li>
                    <li className="hidden lg:flex items-center">
                        <button>{ RecentlyIcon }</button>
                    </li>
                    <li className="hidden lg:flex items-center">
                        <Badge count={ 2 } size={ 'small' }>
                            <button>{ WishlistIcon }</button>
                        </Badge>
                    </li>
                    <li className="flex items-center">
                        <Badge count={ 0 } size={ 'small' } showZero={ true }>
                            <button onClick={ () => setToggle(pre => ( { ...pre, cart: true } )) }>{ CartIcon }</button>
                        </Badge>
                    </li>
                </IconsStyled>
            </nav>

            {/*Search Drawer */ }
            <SearchDrawer toggleOpen={ toggle.search } setToggleOpen={ setToggle }/>

            {/*Authenticate Modal */ }
            <AuthenticateModal toggleOpen={ toggle.authenticate } setToggleOpen={ setToggle }/>

            {/*Navbar Drawer*/ }
            <NavbarDrawer toggleOpen={ toggle.navbar } setToggleOpen={ setToggle }/>

            {/*Cart Drawer*/ }
            <CartDrawer toggleOpen={ toggle.cart } setToggleOpen={ setToggle }/>
        </header>
    );
}

function AuthenticateModal({ toggleOpen, setToggleOpen }: ToggleProps) {
    const [isCreate, setIsCreate] = useState<boolean>(false);

    return (
        <AuthenticateModalStyled
            open={ toggleOpen }
            onCancel={ () => setToggleOpen(pre => ( { ...pre, authenticate: false } )) }
            centered
            footer={ null }
            width={ 500 }
        >
            {
                !isCreate
                    ? (
                        <form action="" noValidate>
                            <div>
                                <h3>Login</h3>
                                <div className="modal-body">
                                    <Input variant="primary" name="email" autoComplete="true" placeholder="Your email*" className="form-control"/>
                                    <Input variant="primary" name="password" autoComplete="true" placeholder="Password*" className="form-control"/>
                                    <a href="#" className="form-text">Forgot your password?</a>
                                    <div className="mt-[30px]">
                                        <div className="mb-5">
                                            <Button
                                                className="authenticate-btn"
                                                variant="primary"
                                            >
                                                Login
                                            </Button>
                                        </div>
                                        <div>
                                            <Button
                                                className="authenticate-btn"
                                                variant="secondary"
                                                htmlType="button"
                                                onClick={ () => setIsCreate(true) }
                                            >
                                                Create Account
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )
                    : (
                        <form action="" noValidate>
                            <div>
                                <h3>Create Account</h3>
                                <div className="modal-body">
                                    <Input variant="primary" name="firstName" autoComplete="true" placeholder="First name" className="form-control"/>
                                    <Input variant="primary" name="lastName" autoComplete="true" placeholder="Last name" className="form-control"/>
                                    <Input variant="primary" name="email" autoComplete="true" placeholder="Your email*" className="form-control"/>
                                    <Input variant="primary" name="password" autoComplete="true" placeholder="Password*" className="form-control"/>
                                    <p className="form-text !text-sm">
                                        Your personal data will be used to support your experience throughout this website,
                                        to manage access to your account and for other purposes described in our privacy
                                        policy.
                                    </p>
                                    <div className="mt-[30px]">
                                        <div className="mb-5">
                                            <Button
                                                className="authenticate-btn"
                                                variant="primary"
                                            >
                                                Create Account
                                            </Button>
                                        </div>
                                        <div>
                                            <Button
                                                className="authenticate-btn"
                                                variant="secondary"
                                                htmlType="button"
                                                onClick={ () => setIsCreate(false) }
                                            >
                                                Login
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )
            }
        </AuthenticateModalStyled>
    )
}

function SearchDrawer({ toggleOpen, setToggleOpen }: ToggleProps) {
    return (
        <SearchDrawerStyled
            open={ toggleOpen }
            onClose={ () => setToggleOpen(pre => ( { ...pre, search: false } )) }
            placement="top"
            height="90%"
            styles={ {
                header: { border: 0, padding: 0 },
                body: { paddingBlock: 0, paddingInline: 0 }
            } }
        >
            <div className="px-[15px] py-[30px] md:px-[30px] md:py-[60px] ">
                {/*Search title */ }
                <h4 className="text-center">Search Our Site</h4>

                {/*Search input */ }
                <div className="md:w-2/3 mx-auto">
                    <div className="md:px-[15px]">
                        {/*Search input */ }
                        <div className="relative">
                            <Input variant="primary" name="drawer_search" placeholder="I'm looking for..."
                                   className="block w-full h-[45px]"
                                   spellCheck="false"/>
                            <button
                                className="absolute top-0 right-0 px-5 h-[--input-height] flex items-center text-[--color-link]">
                                { SearchIcon }
                            </button>
                        </div>

                        {/*Quick search */ }
                        <div className="text-center mt-2.5 text-base">
                            <span className="text-[--grey-color]">Quick Search: </span>
                            <a href="#" className="mr-0.5">Jordan, </a>
                            <a href="#" className="mr-0.5">Nike, </a>
                            <a href="#">MLB</a>
                        </div>

                        {/*Search Not Found */ }
                        {/*<div className="flex flex-col items-center mt-[30px] gap-4">*/ }
                        {/*    <h5 className="text-[24px] text-[--grey-color] font-normal">Nothing matches your search*/ }
                        {/*        “<span className="text-[--color-link]">nike</span> */ }
                        {/*    </h5>*/ }
                        {/*    <p>{ SadIcon }</p>*/ }
                        {/*</div>*/ }

                        {/*Search Result */ }
                        {/*<div className="flex flex-col items-center mt-[30px] gap-4">*/ }
                        {/*    <h5 className="text-[24px] text-[--grey-color] font-normal">Search for*/ }
                        {/*        <span className="text-[--color-link]">1</span>*/ }
                        {/*    </h5>*/ }

                        {/*    /!*TODO: Call API *!/*/ }
                        {/*    /!*Search result *!/*/ }
                        {/*</div>*/ }
                    </div>
                </div>

                {/*Popular product*/ }
                <div className="mt-5">
                    <div className="h5 text-[20px]">Popular Products</div>

                    {/*TODO: Call API*/ }
                    <div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 mt-5 gap-[--search-result-item-gap]">
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                        <CardProduct/>
                    </div>
                </div>
            </div>
        </SearchDrawerStyled> )
}

function NavbarDrawer({ toggleOpen, setToggleOpen }: ToggleProps) {
    return (
        <NavbarDrawerStyled
            open={ toggleOpen }
            width={400}
            title={
                <div className="p-[15px] text-white">
                    <p className="text-[12px] font-semibold hover:text-white leading-[--base-line-height]">MENU</p>
                </div>
            }
            onClose={ () => setToggleOpen(pre => ( { ...pre, navbar: false } )) }
            placement="left"
            styles={ {
                header: { border: 0, padding: 0, backgroundColor: '#000', paddingInline: 15 },
                body: {
                    paddingBlock: 0,
                    paddingInline: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }
            } }
        >
            {/*Navbar list*/ }
            <nav className="px-[30px] py-2.5">
                <ul className="navbar-list">
                    {
                        navList.map(nav => (
                            <li key={ nav.title } className="navbar-item border-b border-[--border-color-base]">
                                <a href={ nav.path }
                                   className="block py-[15px] font-semibold uppercase">{ nav.title }</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>

            {/*Button*/ }
            <div className="px-[25px] py-[30px]">
                <Button variant="primary" href="#" className="w-full mb-2.5">Login</Button>
                <Button variant="secondary" href="#" className="w-full">Create account</Button>
            </div>
        </NavbarDrawerStyled> )
}

const NavbarStyled = styled.ul`
  li {
    a {
      position: relative;
      padding: 10px var(--spacing-menu);
      white-space: nowrap;
      font-weight: var(--navigation-font-weight);
      letter-spacing: var(--navigation-letter-spacing);
      font-size: var(--navigation-font-size);
      cursor: pointer;
      text-transform: uppercase;
      line-height: 28px;

      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;

const IconsStyled = styled.ul`
  li {
    margin-left: 20px;

    svg {
      transition: var(--bls-transition);

      &:hover {
        color: var(--primary-color);
      }
    }
  }
`;

const SearchDrawerStyled = styled(Drawer)`
  position: relative;

  .ant-drawer-close {
    font-size: 18px;
    position: absolute;
    right: 25px;
    top: 25px;
    color: var(--grey-color);
    z-index: 1;

    &:hover {
      color: var(--color-link-hover);
    }
  }

  h4 {
    --font-h4: 32px;
    font-size: clamp(20px, 3vw, var(--font-h4));
    margin-bottom: clamp(10px, 3vw, 20px);
  }
`;

const AuthenticateModalStyled = styled(Modal)`
  .ant-modal-content {
    padding: 0 !important;
    border-radius: 5px !important;
  }

  .ant-modal-close {
    &:hover {
      color: var(--btn-link-color);
      text-decoration: none;
      cursor: pointer;
      background-color: transparent;
    }
  }

  h3 {
    --font-h3: 24px;
    text-align: center;
    padding-top: 35px;
    margin: 0;
    font-size: clamp(16px, 3.5vw, var(--font-h3));
    line-height: 1;
    text-transform: capitalize;
  }

  .modal-body {
    padding: 30px;

    .form-control {
      width: 100%;
      margin-bottom: 15px;
    }

    .form-text {
      font-size: var(--base-font-size);
      color: var(--base-color);
    }

    .authenticate-btn {
      width: 100%;
    }
  }
`;

const NavbarDrawerStyled = styled(Drawer)`
  .ant-drawer-close {
    margin-right: 15px;
    color: white;

    &:hover {
      color: var(--primary-color);
    }

    svg {
      width: 14px;
      height: 14px;
    }
  }

  .ant-drawer-header-title {
    justify-content: space-between;
    flex-direction: row-reverse;
  }

  .ant-drawer-title {
    flex: none;
  }

  .navbar-list .navbar-item {
    &:last-child {
      border-bottom: none;
    }
  }
`;
