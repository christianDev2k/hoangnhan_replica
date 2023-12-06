import { Dispatch, SetStateAction } from 'react';

export type ToggleStateProps = {
    search: boolean,
    authenticate: boolean,
    cart: boolean,
    navbar: boolean
}

export type ToggleProps = {
    toggleOpen: boolean,
    setToggleOpen: Dispatch<SetStateAction<ToggleStateProps>>
}